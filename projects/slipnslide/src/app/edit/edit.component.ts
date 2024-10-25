import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { debounceTime, filter, map, shareReplay, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Slide, SlidesService } from '../slides.service';
import { MdEditComponent } from './md-edit/md-edit.component';
import { AsyncPipe } from '@angular/common';
import { SelectFileComponent } from './select-file/select-file.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'markdown-edit',
    template: `<a routerLink="/home"><h1>Edit</h1></a>
    <select-file (fileName)="filename.next($event)"></select-file>
    <md-edit [markdown]="(slide$ | async)?.markdown"></md-edit> `,
    styles: [],
    imports: [RouterLink, SelectFileComponent, MdEditComponent, AsyncPipe],

})
export class EditComponent implements OnInit, OnDestroy {
  private slides = inject(SlidesService);

  @ViewChild(MdEditComponent, { static: true }) mde: MdEditComponent;
  filename = new ReplaySubject<string>(1);
  updateSub;
  slide$ = this.filename.pipe(
    debounceTime(1), // needed because the filname can be updated in the same cycle causing an error
    switchMap(filename => this.slides.getByFilename(filename)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  ngOnInit() {
    this.updateSub = this.mde.updates
      .pipe(
        withLatestFrom(this.slide$),
        filter(([markdown, slide]: [string, Slide]) => slide.markdown.trimStart() !== markdown),
        map(([markdown, slide]) => ({ ...slide, markdown })),
        tap(slide => this.slides.save(slide))
      )
      .subscribe();
  }
  ngOnDestroy() {
    this.updateSub.unsubscribe();
  }
}
