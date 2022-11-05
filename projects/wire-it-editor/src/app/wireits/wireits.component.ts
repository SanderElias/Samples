import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';
import { PackageJsonService } from '../package.json.service';
import { WireitComponent } from './wireit/wireit.component';

@Component({
  selector: 'se-wireits',
  standalone: true,
  imports: [CommonModule, WireitComponent],
  template: `
  <header>
    <h2>Wire-It scripts</h2>
  </header>
    <ng-container *ngFor="let wireit of wireits$ | async">
      <se-wireit [name]="wireit[0]" [props]="wireit[1]"></se-wireit>
    </ng-container>
  `,
  styles: [
    `
      :host {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--size-content-2), 1fr));
      }
      header {
        grid-column: 1 / -1;
        background: var(--color-primary);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WireitsComponent {
  pjs = inject(PackageJsonService)
  wireits$ = this.pjs.pjObject$.pipe(
    filter((pj) => pj.wireit !== undefined),
    map(contents => contents.wireit as Record<string, string>),
    map(wireits => Object.entries(wireits))
  );

}
