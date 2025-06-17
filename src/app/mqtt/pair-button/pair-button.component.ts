import { Component, signal, inject } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { ZigbeeService } from '../zigbee.service';

@Component({
  selector: 'se-pair-button',
  imports: [ToggleComponent],
  template: `
    <h4>Aanmelden</h4>

    <!-- @if (allowJoin()) { -->
    <p>nog: {{ countdown() }}</p>
    <!-- } -->
  `,
  styleUrl: './pair-button.component.css',
  host: {
    '[style.backgroundColor]': 'allowJoin() ? "var(--color-success)" : "var(--color-error)"',
    '(click)': 'switchJoin(!allowJoin())',
  }
})
export class PairButtonComponent {
  z2m = inject(ZigbeeService);
  signOnTimeout = signal(60);
  countdown = signal('');

  allowJoin = this.z2m.joinAllowed;

  switchJoin = async (allow: boolean, n = 15) => {
    try {
      const result = await this.z2m.publish('zigbee2mqtt/bridge/request/permit_join', { value: allow, time: allow ? n : 0 });
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
