import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Service,
  signal,
  type WritableSignal} from '@angular/core';

@Component({
  selector: 'se-gamepad',
  template: `
    <h1>Gamepad</h1>
    <ul>
      @for (button of buttons(); track $index) {
        <li>
          Button {{ $index }} =
          {{ button().pressed ? 'pressed' : 'released' }} (value:
          {{ button().value }})
        </li>
      }
      @for (axis of axis(); track $index) {
        <li>Axis {{ $index }} = {{ axis() }}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './gamepad.component.css'
})
export class GamepadComponent {
  info = signal({} as any);
  buttons = inject(GamePad).buttons;
  axis = inject(GamePad).axis;
}

@Service()
class GamePad {
  #window = inject(DOCUMENT).defaultView!;
  #gamePad = signal<Gamepad | undefined>(undefined);
  buttons = signal<WritableSignal<GamepadButton>[]>([]);
  axis = signal<WritableSignal<number>[]>([]);

  constructor() {
    const window = this.#window;
    if (window) {
      this.#window.addEventListener('gamepadconnected', e => {
        // use the last connected gamepad.
        const gp = navigator.getGamepads()[e.gamepad.index];
        this.#gamePad.set(gp || undefined);
        console.dir(gp);
      });
      this.#window.addEventListener('gamepaddisconnected', e => {
        const gp = navigator.getGamepads()[e.gamepad.index];
        if (gp && gp.index === this.#gamePad()?.index) {
          // clear the gamepad if the disconnected one is the currently used one.
          this.#gamePad.set(undefined);
        }
      });
      effect(() => {
        const gp = this.#gamePad();
        if (gp) {
          // update the gamepad info on each render.
          this.loop(); // start the loop to update the gamepad info.
        }
      });
    }
  }

  loop() {
    const gamePad = this.#gamePad();
    const buttonThing = (button: GamepadButton) => ({
      value: button.value,
      pressed: button.pressed,
      touched: button.touched
    });
    if (!gamePad) return;
    if (gamePad.buttons.length !== this.buttons().length) {
      // if the number of buttons changes, replace the buttons signal.
      this.buttons.set(
        gamePad.buttons.map(button => signal(buttonThing(button)))
      );
    }
    if (gamePad.axes.length !== this.axis().length) {
      // if the number of axes changes, replace the axis signal.
      this.axis.set(gamePad.axes.map(num => signal(num)));
    }
    gamePad.buttons.forEach((button, i) => {
      const { pressed, value, touched } = this.buttons()[i]();
      if (
        pressed !== button.pressed ||
        value !== button.value ||
        touched !== button.touched
      ) {
        // update the button signal if the pressed state, value, or touched state changes.
        this.buttons()[i].set(buttonThing(button));
      }
    });
    gamePad.axes.forEach((axis, i) => {
      const value = this.axis()[i]();
      if (value !== axis) {
        // update the axis signal if the value changes.
        this.axis()[i].set(axis);
      }
    });
    requestAnimationFrame(() => this.loop()); // schedule the next update on the next animation frame.
  }
}
