import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService } from '../package.json.service';
import { map } from 'rxjs';
import { ScriptComponent } from './script/script.component';

@Component({
  selector: 'app-scripts',
  standalone: true,
  imports: [CommonModule, ScriptComponent],
  template: `<app-script *ngFor="let script of scripts$ | async" [script]="script"></app-script>`,
  styles: [
    `
      :host {
        display: flex;
        gap: .5rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptsComponent {
  pjs = inject(PackageJsonService)
  scripts$ = this.pjs.pjObject$.pipe(
    map(contents => contents.scripts as Record<string, string>),
    map(scripts => Object.entries(scripts).filter(([key, value]) => !value.includes('wireit')))
  );
}
