import { afterRenderEffect, Component, computed, ElementRef, inject, input, signal, Signal, viewChild } from '@angular/core';
import { ZigbeeService } from '../zigbee.service';
import type { ZigbeePrefixes } from '../mqtt.component';

@Component({
  selector: 'se-pair-button',
  imports: [],
  template: `
    <div class="pbWrapper" (click)="showDialog($event)">
      @if (joinAllowed()) {
        <h5>Er kan</h5>
        <h5>verbonden worden</h5>
      } @else {
        <h5>klik hier om te pairen</h5>
      }
    </div>

    <dialog #dlg>
      <div>
        <h3>Kies device om mee te pairen</h3>
        <select (change)="selectedRouter.set($any($event.target).value)">
          @for (opt of routerList(); track opt.ieee_address) {
            <option [value]="opt.friendly_name" [selected]="opt.friendly_name === selectedRouter()">{{ opt.friendly_name }}</option>
          }
        </select>
        <button (click)="startPairing()">Start pairen</button>
        <button (click)="closeDialog()">Afbreken</button>
      </div>
    </dialog>
  `,
  styleUrl: './pair-button.component.css',
  host: {
    '[style.backgroundColor]': 'joinAllowed() ? "var(--color-success)" : "var(--color-error)"',
    '(click)': 'showDialog($event)'
  }
})
export class PairButtonComponent {
  z2m = inject(ZigbeeService);
  elm = inject(ElementRef).nativeElement as HTMLDivElement;

  selectedPrefixes = input<ZigbeePrefixes[]>([]);

  selectedRouter = signal<string>('');
  countdown = signal('');
  routerList = computed(() =>
    this.z2m
      .devices()
      .filter(d => d.type === 'Router')
      .filter(d => this.selectedPrefixes().some(prefix => d.friendly_name?.startsWith(prefix)))

      .map(d => ({
        friendly_name: d.friendly_name,
        ieee_address: d.ieee_address
      })).sort((a, b) => a.friendly_name.localeCompare(b.friendly_name))
  );
  dlg: Signal<ElementRef<HTMLDialogElement>> = viewChild.required('dlg');

  _ = afterRenderEffect(() => {
    const selected = this.selectedRouter();
    const path = getPath(this.elm);
    const lsKey = 'pairingRouter' + path;
    const storedRouter = localStorage.getItem(lsKey);
    if (!selected) {
      if (!storedRouter) {
        const routers = this.routerList();
        // there is no stored one, pick the first from the list
        this.selectedRouter.set(routers[0]?.friendly_name || '');
      } else {
        // there is a stored one, set it as selected
        this.selectedRouter.set(storedRouter);
      }
    } else {
      if (selected !== storedRouter) {
        // update the stored router if it is different from the selected one
        console.log('store', selected, 'as', lsKey);
        localStorage.setItem(lsKey, selected);
      }
    }
  });

  showDialog = (ev: MouseEvent) => {
    const div = this.elm.querySelector('div.pbWrapper');
    // only handle clicks on the button or things inside the wrapper, exclude the dialog itself
    if (this.elm !== ev.target && div !== ev.target && !div?.contains(ev.target as Node)) {
      return;
    }
    // if we can join, we should switch off joining, we need no dialog for stopping.
    this.joinAllowed() ? this.switchJoin(false) : this.dlg().nativeElement.showModal();
  };

  joinAllowed = this.z2m.joinAllowed;

  closeDialog = () => {
    this.dlg().nativeElement.close();
  };

  startPairing = async () => {
    const router = this.selectedRouter();
    if (!router) {
      console.error('No router selected for pairing');
      return;
    }
    await this.switchJoin(true);
    console.log('Started pairing with router:', router);
    this.dlg().nativeElement.close();
  };

  switchJoin = async (allow: boolean) => {
    try {
      const result = await this.z2m.publish('zigbee2mqtt/bridge/request/permit_join', {
        value: allow,
        time: allow ? 120 : 0,
        device: this.selectedRouter()
      });
    } catch (error) {
      console.error('Error switching join:', error);
    }
  };
}

export function getPath(elm: HTMLDivElement) {
  let path = '';
  while (elm && elm.tagName !== 'BODY') {
    const idx = Array.from(elm.parentElement?.children ?? [])?.indexOf(elm) ?? 0;
    path = `${elm.tagName}[${idx}]${path ? '/' : ''}${path}`.trim();
    if (elm.tagName === 'HTML') break;
    elm = elm.parentElement as HTMLDivElement;
  }
  return path;
}
