import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, NEVER, of, Subject, timer } from 'rxjs';
import { filter, map, pluck, scan, shareReplay, startWith, switchMap, take, tap } from 'rxjs/operators';
import { RakiService } from '../../../app/rijks/raki.service';
import { Quote, QuoteService } from '../quote/quote.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VmHomeVmComponent implements OnInit {
  init$ = new Subject<void>();
  @ViewChild('ba', { read: ElementRef, static: false }) ba;
  @ViewChild('bq', { read: ElementRef, static: false }) bq;
  @ViewChild('speed', { read: ElementRef, static: false }) speedRef;

  art$ = this.raki.randomImage$.pipe(filter(Boolean));

  /** use helpers to get obsevables from user events */
  baClicks$ = this.refClickToggle('ba');
  bqClicks$ = this.refClickToggle('bq');
  speed$ = this.refEvent('speedRef', 'change').pipe(
    /** read teh value out of the event */
    pluck('target', 'value'),
    /** cast to number */
    map(x => +x),
    /** set a strt speed */
    startWith(3.5),
    /** log so we can see when an event is triggered */
    tap(r => console.log('speed', r)),
  );

  quote$ = this.speed$.pipe(
    switchMap(seconds => this.q.RandomQuoteOnIntervalObs(seconds * 1000).pipe(filter(Boolean)))
  );

  /** helpers to handle pausing */
  pauseQuote$ = this.bqClicks$.pipe(switchMap(b => (b ? NEVER : this.quote$)));
  pausedArt$ = this.baClicks$.pipe(switchMap(b => (b ? NEVER : this.art$)));

  countDown$ = this.pausedArt$.pipe(
    /** watch the art clicks, and use a interval */
    switchMap(() => combineLatest(this.baClicks$, timer(0, 1000))),
    /** when there user clicks, stop this stream */
    switchMap(([artPaused, timeVal]) => (artPaused ? NEVER : of(timeVal))),
    /** count down from 20 */
    scan((duration, t) => 20 - t, 1)
  );

  /**
   * Here we introduce viewModel$.
   * This way, we combine all data we need for use in the template.
   * As an added bonus, this also enables the way to introduce a loading indicator
   * The big upside is the handling in the template, so take a look there.
   */
  vm$ = combineLatest(
    this.pausedArt$,
    this.pauseQuote$,
    this.countDown$,
    this.baClicks$,
    this.bqClicks$,
    this.speed$
  ).pipe(
    map<any[], Vm>(([art, quote, countDown, baToggle, bqToggle, speed]) => ({
      art,
      quote,
      countDown,
      baToggle,
      bqToggle,
      speed
    }))
    /** log the changes, so we can see what's happening */
    // tap(viewModel => console.log('ViewModel:', viewModel))
  );

  constructor(private raki: RakiService, private q: QuoteService) {}

  /**
   * helper, takes a click event,
   * change it to a toggling stream of booleans
   */
  refClickToggle(name: string) {
    return this.refEvent(name, 'click').pipe(
      /** on every msg toggle, start of with true */
      scan(acc => !acc, false),
      /** make sure the stream starts */
      startWith(false),
      /** log to console so we can see what's happening */
      tap(r => console.log("clicked",name, r)),
    );
  }

  /** Helper to turn a viewchild into an event */
  refEvent(name: string, eventName: string) {
    /** wait for init */
    return this.init$.pipe(
      /** repeat */
      switchMap(() => timer(10, 100)),
      /** until the view provides the child */
      switchMap(() => (this[name] ? of(this[name]) : NEVER)),
      /** "stop" the timer loop */
      take(1),
      /** create the event lister */
      switchMap(() => fromEvent(this[name].nativeElement, eventName)),
    );
  }

  ngOnInit() {
    console.log('init fired');
    /**
     * Lift the init to the next cycle. That way all the UI elements are in place
     * and available to the refEvent helper
     */
    setTimeout(() => (this.init$.next(), this.init$.complete()), 10);
  }
}
