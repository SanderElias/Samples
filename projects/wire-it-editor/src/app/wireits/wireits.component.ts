import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, filter, map, startWith, tap } from 'rxjs';
import { PackageJsonService } from '../package.json.service';
import { WireitComponent } from './wireit/wireit.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'se-wireits',
  standalone: true,
  imports: [CommonModule, WireitComponent, ReactiveFormsModule],
  template: `
  <ng-container *ngIf="vm$ | async as vm">
    <header>
      <h2>WireIt scripts</h2>
      <input type="text" [formControl]="search" placeholder="🔎 Filter">
      <button (click)="pjs.addWireitScript('newScript',{})">➕</button>
    </header>
    <se-wireit *ngFor="let wireit of vm.wireits" [name]="wireit[0]" [props]="wireit[1]"></se-wireit>
  </ng-container>
  `,
  styleUrls: ['./wireits.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WireitsComponent {
  pjs = inject(PackageJsonService)
  wireits$ = this.pjs.pjObject$.pipe(
    filter((pj) => pj.wireit !== undefined),
    map(contents => contents.wireit as Record<string, string>),
    map(wireits => Object.entries(wireits))
  );

  search = new FormControl('');

  vm$ = combineLatest({
    wireits: this.wireits$,
    search: this.search.valueChanges.pipe(startWith(''))
  }).pipe(
    map(({ wireits, search }) => {
      return {
        wireits: wireits.filter(([name]) => search === '' || name.includes(search))
      }
    }),
    tap(console.log)
  )

}
