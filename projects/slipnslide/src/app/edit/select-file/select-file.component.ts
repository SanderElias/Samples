import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'select-file',
  template: `<select>
    <option *ngFor="let file of files$ | async">{{ file }}</option>
  </select>`,
  styles: [`":host{display:block}`],
})
export class SelectFileComponent implements OnDestroy, OnInit {
  @Output() fileName = new EventEmitter<string>();
  init$ = new Subject();

  inputs$ = this.init$.pipe(
    map(() => this.elmRef.nativeElement.firstChild),
    tap(elm => console.log(elm)),
    switchMap((elm: HTMLElement) => fromEvent(elm, 'input')),
    map((ev: any) => ev.target.value as string),
    filter(s => !!s)
  );

  files$ = this.http.get('http://localhost:8201/slides');

  private sub = this.inputs$.subscribe(this.fileName);

  constructor(private elmRef: ElementRef, private http: HttpClient) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.init$.next();
    this.init$.complete();
  }
}
