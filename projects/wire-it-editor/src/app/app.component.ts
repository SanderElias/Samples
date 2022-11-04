import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PackageJsonService } from './package.json.service';
import { ScriptsComponent } from './scripts/scripts.component';
import { SelectPackageJsonComponent } from './select-package.json/select-package.json.component';

@Component({
  standalone: true,
  imports: [SelectPackageJsonComponent, CommonModule, ScriptsComponent],
  selector: 'app-root',
  template: `<h1>Wire-It Editor</h1>
    <app-select-package-json></app-select-package-json>
    <app-scripts></app-scripts>
  `,
  styles: [`
  :host {
    display: block;
  }
  `]
})
export class AppComponent {
  pjs = inject(PackageJsonService)
}
