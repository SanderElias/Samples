import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PackageJsonService } from './package.json.service';
import { ScriptsComponent } from './scripts/scripts.component';
import { SelectPackageJsonComponent } from './select-package.json/select-package.json.component';
import { WireitsComponent } from './wireits/wireits.component';

@Component({
  standalone: true,
  imports: [SelectPackageJsonComponent, CommonModule, ScriptsComponent, WireitsComponent],
  selector: 'app-root',
  template: `<h1>
    WireIt Editor
    <button (click)="copyToClipBoard()">📎</button>
  </h1>
    <app-select-package-json></app-select-package-json>
    <app-scripts></app-scripts>
    <se-wireits></se-wireits>
  `,
  styles: [`
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
  `]
})
export class AppComponent {
  pjs = inject(PackageJsonService)


  async copyToClipBoard() {
    const json = await firstValueFrom(this.pjs.pjObject$);
    console.log(json);
    await navigator.clipboard.writeText(JSON.stringify(json , null, 2))
  }

}
