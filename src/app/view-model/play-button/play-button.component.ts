import { Component, Input, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'play-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button>
      <span [hidden]="isPaused()"><i class="fas fa-fw fa-pause"></i></span>
      <span [hidden]="!isPaused()"><i class="fas fa-fw fa-play"></i></span>
    </button>
  `,
  standalone: true,
})
export class PlayButtonComponent {
  isPaused = input<boolean | null>();
}
