import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { PackageJsonService } from '../package.json.service';
import { ScriptComponent } from './script/script.component';

@Component({
  selector: 'app-scripts',
  imports: [AsyncPipe, ScriptComponent],
  template: `<header>
      <h2>NPM scripts</h2>
      <small>(click one to upgrade it to WireIt!<br />Only non-upgraded ones are shown)</small>
    </header>
    @for (script of scripts$ | async; track script) {
      <app-script [script]="script"></app-script>
    }`,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-1);
        margin: var(--size-1) 0;
      }
      header {
        display: flex;
        align-items: top;
        gap: var(--size-1);
        width: 100%;
      }
      small {
        max-inline-size: inherit;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptsComponent {
  pjs = inject(PackageJsonService);
  scripts$ = this.pjs.pjObject$.pipe(
    map(contents => contents.scripts as Record<string, string>),
    map(scripts => Object.entries(scripts).filter(([key, value]) => !value.includes('wireit')))
  );
}
