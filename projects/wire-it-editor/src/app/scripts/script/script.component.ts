import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService } from '../../package.json.service';

@Component({
  selector: 'app-script',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button  (click)="pjs.upgrade(script[0])" [title]="script[1]">{{script[0]}}</button>
  `,
  styles: [
    `
      :host {
        display: button;
        border: 1px solid black;
        width: max(auto, 4rem);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptComponent {
  pjs = inject(PackageJsonService)
  @Input() script: [string, string] = ['', ''];



}
