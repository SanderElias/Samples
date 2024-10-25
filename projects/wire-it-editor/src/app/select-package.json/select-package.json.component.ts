import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService } from '../package.json.service';
import { combineLatest, from, map, of, startWith, tap } from 'rxjs';
import { get } from 'idb-keyval';
declare global {
  interface Window {
    tenant: string;
    testSignalR: any;
  }
}

@Component({
    selector: 'app-select-package-json',
    imports: [CommonModule],
    template: `
    @if (vm$ | async; as vm) {
      @if (vm.hasHandle === false) {
        <button (click)="readPackageJson()">Open a Package.json</button>
      }
      <!-- <button *ngIf="vm.hasHandle===true" (click)="readPackageJson()">Write Package.json back to disk</button> -->
      @if (vm.hasHandle === true) {
        <h4>Opened project Name: {{ vm.name }}</h4>
      }
    }
  `,
    styles: [
        `
      :host {
        display: flex;
        gap: 1rem;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SelectPackageJsonComponent {
  pjs = inject(PackageJsonService);

  hasHandle$ = this.pjs.fileHandle$.pipe(map(handle => !!handle));
  storedPackageJson = from(get('lastPackageJson'));

  vm$ = combineLatest({
    hasHandle: this.hasHandle$,
    handle: this.pjs.fileHandle$,
    name: this.pjs.pjObject$.pipe(map(contents => contents.name)),
    oldContent: this.storedPackageJson,
  }).pipe(
    // tap(console.log),
    startWith({
      hasHandle: false,
      handle: null,
      name: '',
    })
  );

  async readPackageJson() {
    console.log('readPackageJson');
    try {
      // @ts-ignore
      const [fileHandle] = await window.showOpenFilePicker({
        suggestedName: 'package.json',
        types: [
          {
            description: 'select a package.JSON file',
            accept: { 'application/json': ['.json'] },
          },
        ],
        multiple: false,
      });
      this.pjs.setHandle(fileHandle);
    } catch (e) {
      console.log(`couln't open file`, e);
    }
  }
}
