import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Slide, SlidesService } from '../../slides.service';

@Component({
  selector: 'select-file',
  template: `<select>
    <option *ngFor="let slide of slides$ | async">{{ slide.filename }}</option>
  </select>`,
  styles: [`":host{display:block}`],
})
export class SelectFileComponent implements OnDestroy, OnInit {
  @Output() fileName = new EventEmitter<Slide>();
  init$ = new Subject();

  inputs$ = this.init$.pipe(
    map(() => this.elmRef.nativeElement.firstChild),
    switchMap((elm: HTMLElement) => fromEvent(elm, 'input')),
    map((ev: any) => ev.target.value as string),
    switchMap(name => this.sld.getByFilename(name)),
    filter(s => !!s.filename)
  );

  slides$ = this.sld.slides$.pipe(
    tap(slides => {
      /** once slides are loaded, trigger initial load with first slide. */
      if (slides && slides[0]) {
        const elm: HTMLSelectElement = this.elmRef.nativeElement.firstChild;
        setTimeout(() => elm.dispatchEvent(new Event('input')), 10);
      }
    })
  );

  private sub = this.inputs$.subscribe(this.fileName);

  constructor(private elmRef: ElementRef, private sld: SlidesService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.init$.next();
    this.init$.complete();
  }
}
