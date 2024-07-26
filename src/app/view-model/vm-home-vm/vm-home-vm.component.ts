import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChildren, inject } from '@angular/core';
import { modelFromLatest } from '@se-ng/observable-utils';
import { combineLatest, NEVER, Observable, of, timer } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  pluck,
  scan,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { RakiService } from '../../../app/rijks/raki.service';
import { PaintingComponent } from '../painting/painting.component';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { QuoteComponent } from '../quote/quote.component';
import { Quote, QuoteService } from '../quote/quote.service';
import { ObsFromEvent } from '../vm-home/ObsFromEvent';

interface Vm {
  art: string;
  quote: Quote;
  countDown: number;
  baToggle: boolean;
  bqToggle: boolean;
  speed: number;
}
@Component({
  selector: 'vm-home-vm',
  templateUrl: './vm-home-vm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, PaintingComponent, QuoteComponent, PlayButtonComponent, AsyncPipe],
})
export class VmHomeVmComponent {
  private raki = inject(RakiService);
  private q = inject(QuoteService);

  private viewModal!: Vm;
  @ObsFromEvent('click')
  @ViewChildren('ba', { read: ElementRef })
  artClick$: Observable<Event> = of();

  /** create observable with clicks from viewChildren */
  @ObsFromEvent('click')
  @ViewChildren('bq', { read: ElementRef })
  quoteClick$: Observable<Event> = of();

  @ObsFromEvent('change')
  @ViewChildren('speed', { read: ElementRef })
  speedChange$: Observable<Event> = of();

  art$ = this.raki.randomImage$.pipe(filter(Boolean));

  baClicks$ = this.toToggleStream(this.artClick$);
  bqClicks$ = this.toToggleStream(this.quoteClick$);

  speed$ = this.speedChange$.pipe(
    /** read teh value out of the event */
    pluck('target', 'value'),
    /** cast to number */
    map(x => Number(x)),
    /** set a start speed */
    startWith(3.5),
    /** log so we can see when an event is triggered */
    // tap(r => console.log('speed', r)),
    // shareReplay({bufferSize: 1, refCount: true})/
    catchError(() => NEVER)
  );

  quote$ = this.speed$.pipe(switchMap(seconds => this.q.RandomQuoteOnIntervalObs(seconds * 1000).pipe(filter(Boolean))));

  /** helpers to handle pausing */
  pauseQuote$ = this.bqClicks$.pipe(switchMap(b => (b ? NEVER : this.quote$)));
  pausedArt$ = this.baClicks$.pipe(switchMap(b => (b ? NEVER : this.art$)));

  countDown$ = this.pausedArt$.pipe(
    /** watch the art clicks, and use a interval */
    switchMap(() => combineLatest([this.baClicks$, timer(0, 1000)])),
    /** when there user clicks, stop this stream */
    switchMap(([artPaused, timeVal]) => (artPaused ? NEVER : of(timeVal))),
    /** count down from 20 */
    scan((duration, t) => 20 - t, 1),
    catchError(() => NEVER)
  );

  /**
   * Here we introduce viewModel$.
   * This way, we combine all data we need for use in the template.
   * As an added bonus, this also enables the way to introduce a loading indicator
   * The big upside is the handling in the template, so take a look there.
   */
  // vm$ = combineLatest(
  //   this.pausedArt$,
  //   this.pauseQuote$,
  //   this.countDown$,
  //   this.baClicks$,
  //   this.bqClicks$,
  //   this.speed$
  // ).pipe(
  //   map<any[], Vm>(([art, quote, countDown, baToggle, bqToggle, speed]) => ({
  //     art,
  //     quote,
  //     countDown,
  //     baToggle,
  //     bqToggle,
  //     speed,
  //   }))
  //   /** log the changes, so we can see what's happening */
  //   // tap(viewModel => console.log('ViewModel:', viewModel))
  // );

  vm$ = modelFromLatest<Vm>({
    art: this.pausedArt$ as Observable<string>,
    quote: this.pauseQuote$ as Observable<Quote>,
    countDown: this.countDown$,
    baToggle: this.baClicks$.pipe(distinctUntilChanged()),
    bqToggle: this.bqClicks$,
    speed: this.speed$,
  }).pipe(
    debounceTime(4),
    // tap(viewModel => console.log({ viewModel })),
    tap(vm => (this.viewModal = vm)),
    catchError(() => NEVER)
  );

  constructor() {
    if (typeof document === 'undefined') {
      return;
    }
  }

  /**
   * helper, takes a event observable,
   * change it to a toggling stream of booleans
   */
  toToggleStream(o: Observable<Event>) {
    if (typeof document === 'undefined') return of(false);
    return o.pipe(
      /** on every msg toggle, start of with true */
      scan(acc => !acc, false),
      /** make sure the stream starts */
      startWith(false)
      /** log to console so we can see what's happening */
      // tap(r => console.log('clicked', name, r))
    );
  }
}
