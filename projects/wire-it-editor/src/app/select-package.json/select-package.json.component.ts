import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService } from '../package.json.service';
import { combineLatest, map, startWith } from 'rxjs';
declare global {
  interface Window {
    tenant: string;
    testSignalR: any;
  }
}

@Component({
  selector: 'app-select-package-json',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ng-container *ngIf="vm$ | async as vm">
    <button *ngIf="vm.hasHandle===false" (click)="readPackageJson()">Open a Package.json</button>
    <!-- <button *ngIf="vm.hasHandle===true" (click)="readPackageJson()">Write Package.json back to disk</button> -->
    <h4 *ngIf="vm.hasHandle===true">
      Opened project Name: {{vm.name}}
</h4>
  </ng-container>
    `,
  styles: [
    `
      :host {
        display: flex;
        gap: 1rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectPackageJsonComponent {
  pjs = inject(PackageJsonService)

  hasHandle$ = this.pjs.fileHandle$.pipe(map(handle => !!handle));


  vm$ = combineLatest({
    hasHandle: this.hasHandle$,
    handle: this.pjs.fileHandle$,
    name: this.pjs.pjObject$.pipe(map(contents => contents.name)),
  }).pipe(
    startWith({
      hasHandle: false,
      handle: null,
      name: ''
    })
  )

  async readPackageJson() {
    console.log('readPackageJson');
    try {
      // @ts-ignore
      const [fileHandle] = await window.showOpenFilePicker({
        suggestedName: 'package.json',
        types: [{
          description: 'select a package.JSON file',
          accept: { 'application/json': ['.json'] }
        }],
        multiple: false
      });
      this.pjs.setHandle(fileHandle);
    } catch (e) {
      console.log(`couln't open file`, e);
    }
  }
}


