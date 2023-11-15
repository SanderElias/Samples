import { ChangeDetectionStrategy, Component, ElementRef, ViewChildren } from '@angular/core';
import { combineLatest, NEVER, Observable, of, timer } from 'rxjs';
import { filter, map, pluck, scan, startWith, switchMap, tap, shareReplay } from 'rxjs/operators';
import { RakiService } from '../../../app/rijks/raki.service';
import { QuoteService } from '../quote/quote.service';
import { ObsFromEvent } from './ObsFromEvent';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { QuoteComponent } from '../quote/quote.component';
import { PaintingComponent } from '../painting/painting.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vm-home',
  templateUrl: './vm-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, PaintingComponent, QuoteComponent, PlayButtonComponent, AsyncPipe],
})
export class VmHomeComponent {
  /** create observable with clicks from viewChildren */
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

  /** use helpers to get obsevables from user events */
  baClicks$ = this.toToggleStream(this.artClick$);
  bqClicks$ = this.toToggleStream(this.quoteClick$);

  speed$ = this.speedChange$.pipe(
    /** read teh value out of the event */
    pluck('target', 'value'),
    /** cast to number */
    map(x => +x),
    /** set a start speed */
    startWith(3.5),
    /** log so we can see when an event is triggered */
    tap(r => console.log('speed', r))
    // shareReplay({bufferSize: 1, refCount: true})
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
    scan((duration, t) => 20 - t, 1)
  );
  constructor(
    private raki: RakiService,
    private q: QuoteService
  ) {
    setTimeout(() => {
      console.log(this.artClick$);
    }, 100);
  }

  /**
   * helper, takes a event observable,
   * change it to a toggling stream of booleans
   */
  toToggleStream(o: Observable<Event>) {
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
