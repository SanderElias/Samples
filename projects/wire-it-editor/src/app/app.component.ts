import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PackageJsonService } from './package.json.service';
import { ScriptsComponent } from './scripts/scripts.component';
import { SelectPackageJsonComponent } from './select-package.json/select-package.json.component';
import { WireitsComponent } from './wireits/wireits.component';

@Component({
    imports: [SelectPackageJsonComponent, CommonModule, ScriptsComponent, WireitsComponent],
    selector: 'app-root',
    template: `<h1>
      WireIt Editor
      <button (click)="copyToClipBoard()">📎</button>
    </h1>
    <app-select-package-json></app-select-package-json>
    <app-scripts></app-scripts>
    <se-wireits></se-wireits> `,
    styles: [
        `
      :host {
        display: block;
      }
      h1 {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      h1 button {
        font-size: 1rem;
      }
    `,
    ],

})
export class AppComponent {
  pjs = inject(PackageJsonService);

  async copyToClipBoard() {
    const json = await firstValueFrom(this.pjs.pjObject$);
    const { scripts, wireit } = json;
    json.scripts = Object.fromEntries(Object.entries(scripts).sort(scriptSort));
    if (wireit) {
      json.wireit = Object.fromEntries(Object.entries(wireit).sort(scriptSort));
    }
    const newPkg = JSON.stringify(json, null, 2);
    console.log(newPkg);
    await navigator.clipboard.writeText(newPkg);
  }
}

/** ignore 'pre' and 'post' during sort, so those will be listed next to each other */
const clean = (key: string) => key.replace('pre', '').replace('post', '');

function scriptSort(a: [string, unknown], b: [string, unknown]) {
  return clean(a[0]).localeCompare(clean(b[0]));
}
