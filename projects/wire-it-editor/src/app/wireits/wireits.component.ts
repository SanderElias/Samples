import { ChangeDetectionStrategy, Component, CreateSignalOptions, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, catchError, combineLatest, filter, firstValueFrom, map, of, startWith, tap } from 'rxjs';
import { PackageJsonService } from '../package.json.service';
import { WireitComponent } from './wireit/wireit.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { string } from 'yargs';

@Component({
  selector: 'se-wireits',
  standalone: true,
  imports: [CommonModule, WireitComponent, ReactiveFormsModule],
  template: `
    @if (vm$ | async; as vm) {
      <header>
        <h2>WireIt scripts</h2>
        <input type="text" [formControl]="search" placeholder="🔎 Filter" />
        <button (click)="pjs.addWireitScript('newScript', {})">➕</button>
      </header>
      @for (wireit of vm.wireits; track wireit) {
        <se-wireit [name]="wireit[0]" [props]="wireit[1]"></se-wireit>
      }
    }
  `,
  styleUrls: ['./wireits.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WireitsComponent {
  pjs = inject(PackageJsonService);
  wireits$ = this.pjs.pjObject$.pipe(
    filter(pj => pj.wireit !== undefined),
    map(contents => contents.wireit as Record<string, string>),
    map(wireits => Object.entries(wireits))
  );

  search = new FormControl('');

  vm$ = combineLatest({
    wireits: this.wireits$,
    search: this.search.valueChanges.pipe(startWith('')),
  }).pipe(
    map(({ wireits, search }) => {
      return {
        wireits: wireits.filter(([name]) => search === '' || name.includes(search)),
      };
    }),
    tap(console.log)
  );
}

/** sample error handler, this one just ignores it! */
const ignoreErrorHandler = <I>(err: any, initialValue: I) => {
  // TODO: handle error
  return of(initialValue); //probably not the best way to handle this
};

/**
 * Create a wirtable signal from an observable, will set the signal to the value once the observable emits
 * until that time, it will hold the initialValue. Make sure the types match! (a type of (someType | undefined) will work.
 * @param observable
 * @param options
 * @param handleError
 * @returns
 */
function createSignal<T>(
  observable: Observable<T>,
  options?: { initialValue?: T } & CreateSignalOptions<T>,
  handleError = ignoreErrorHandler
) {
  const initialValue = options?.hasOwnProperty('initialValue') ? options.initialValue : ([] as T);
  const sgn = signal(initialValue, options);
  firstValueFrom(observable.pipe(catchError(err => handleError(err, initialValue)))).then(value => sgn.set(value));

  return signal;
}
