import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService } from '../../../package.json.service';
import { map } from 'rxjs';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'se-dependencies',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ng-container *ngIf="vm$ | async as vm">
    <input type="hidden" name="props.dependencies" [(ngModel)]=deps>

  </ng-container>

  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],

})
export class DepedenciesComponent {
  @Input() deps: string[] = []

  pjs = inject(PackageJsonService)

  vm$ = this.pjs.pjObject$.pipe(
    map(p => {
      const wireits = p.wireit ?? {}
      const names = Object.keys(wireits)
      return { names }
    })
  )

}
