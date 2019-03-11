import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'play-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button>
    <span [hidden]="isPaused"><i class="fas fa-fw fa-pause"></i></span>
    <span [hidden]="!isPaused"><i class="fas fa-fw fa-play"></i></span>
  </button>
  `,
})
export class PlayButtonComponent  {
  @Input() isPaused: boolean;

}
