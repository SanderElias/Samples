import { Component, signal, inject, computed, Signal, viewChild, ElementRef } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { ZigbeeService } from '../zigbee.service';

@Component({
  selector: 'se-pair-button',
  imports: [ToggleComponent],
  template: `
    @if (allowJoin()) {
      <h5>Er kan nog</h5>
      <h4>{{ countdown() }}</h4>
      <h5>seconden verbonden worden</h5>
    } @else {
      <h5>klik hier om te pairen</h5>
    }

    <dialog #dlg>
      <div>
        <h3>Kies device om mee te pairen</h3>
        <select (change)="selectedRouter.set($any($event.target).value)">
          @for (opt of routerList(); track opt.ieee_address) {
            <option [value]="opt.friendly_name">{{ opt.friendly_name }}</option>
          }
        </select>
        <button (click)="startPairing()">Start pairen</button>
        <button (click)="closeDialog()">Afbreken</button>
      </div>
    </dialog>
  `,
  styleUrl: './pair-button.component.css',
  host: {
    '[style.backgroundColor]': 'allowJoin() ? "var(--color-success)" : "var(--color-error)"',
    '(click)': 'showDialog($event)'
  }
})
export class PairButtonComponent {
  z2m = inject(ZigbeeService);
  elm = inject(ElementRef).nativeElement as HTMLDivElement;
  signOnTimeout = signal(60);
  selectedRouter = signal<string | undefined>(undefined);
  countdown = signal('');
  routerList = computed(() =>
    this.z2m
      .devices()
      .filter(d => d.type === 'Router')
      .map(d => ({
        friendly_name: d.friendly_name,
        ieee_address: d.ieee_address
      }))
  );
  dlg: Signal<ElementRef<HTMLDialogElement>> = viewChild.required('dlg');

  showDialog = (ev: MouseEvent) => {
    if (this.elm !== ev.target) {
      return;
    }
    if (!this.allowJoin()) {
      this.dlg().nativeElement.showModal();
      return;
    }
    this.switchJoin(false);
  };

  allowJoin = this.z2m.joinAllowed;

  closeDialog = () => {
    this.dlg().nativeElement.close();
  };

  startPairing = () => {
    const router = this.selectedRouter();
    if (!router) {
      console.error('No router selected for pairing');
      return;
    }
    console.log('Starting pairing with router:', router);
    this.switchJoin(true);
    this.dlg().nativeElement.close();
  };

  switchJoin = async (allow: boolean,) => {
    try {
      const result = await this.z2m.publish('zigbee2mqtt/bridge/request/permit_join', {
        value: allow,
        time: allow ? this.signOnTimeout() : 0,
        device: this.selectedRouter()
      });
      console.log('switchJoin result', result);
      if (allow) {
        this.startCountDown();
      }
    } catch (error) {
      console.error('Error switching join:', error);
    }
  };

  startCountDown = async () => {
    const timeout = this.signOnTimeout();
    const endTime = Date.now() + timeout * 1000;
    const checkAllowTime = Date.now() + 3000; // wait 3 seconds before checking the allowJoin state
    console.log('endTime', new Date(endTime).toLocaleTimeString(), 'timeout', timeout, 'seconds');
    while (Date.now() < endTime) {
      const remaining = Math.ceil((endTime - Date.now()) / 1000);
      const min = Math.floor(remaining / 60);
      const sec = remaining % 60;
      this.countdown.set(`${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`);
      await new Promise(resolve => setTimeout(resolve, 15)); // make sure we update every frame
      if (Date.now() > checkAllowTime && !this.allowJoin()) {
        // if the user toggled the switch off, stop the countdown
        console.log('Join cancelled by user');
        this.countdown.set('');
        return;
      }
    }
    console.log('Join timeout ended');
  };
}
