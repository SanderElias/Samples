import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SlidesService } from '../../slides.service';
import { NgForOf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'select-file',
  template: `<select>
    @for (file of files$ | async; track file) {
      <option>{{ file }}</option>
    }
  </select>`,
  styles: [`":host{display:block}`],
  standalone: true,
  imports: [NgForOf, AsyncPipe],
})
export class SelectFileComponent implements OnDestroy, OnInit {
  private elmRef = inject(ElementRef);
  private slides = inject(SlidesService);

  @Output() fileName = new EventEmitter<string>();
  init$ = new Subject();

  inputs$ = this.init$.pipe(
    map(() => this.elmRef.nativeElement.firstChild),
    switchMap((elm: HTMLElement) => fromEvent(elm, 'input')),
    map((ev: any) => ev.target.value as string),
    filter(s => !!s)
  );

  files$ = this.slides.slides$.pipe(
    map(slides => slides.map(s => s.filename)),
    /** emit initial file */
    tap((files: string[]) => files.length && this.fileName.emit(files[0]))
  );

  private sub = this.inputs$.subscribe(this.fileName);

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.init$.next();
    this.init$.complete();
  }
}
