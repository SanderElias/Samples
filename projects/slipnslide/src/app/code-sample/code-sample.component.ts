import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, from, Observable, of, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, pluck, shareReplay, switchMap, take, tap } from 'rxjs/operators';
// import * as monaco from 'monaco-editor';
declare const monaco: any;

interface State {
  src: string;
  startLine: number;
  originalCode: string;
  editor?: any;
}

@Component({
  selector: 'code-sample',
  template: ``,
  styles: [
    `
      :host {
        display: block;
        height: 300px;
      }
    `,
  ],
  standalone: true,
})
export class CodeSampleComponent implements OnInit, OnDestroy {
  state$ = new BehaviorSubject<State>({ src: '', startLine: 0, originalCode: '' });
  @Input() set src(src) {
    // = ''; //'slipnslide/src/app/code-sample/code-sample.component.ts';
    if (typeof src === 'string') {
      this.state$.next({ ...this.state$.value, src });
    }
  }

  @Input() set startLine(startLine: number) {
    this.state$.next({ ...this.state$.value, startLine });
  }
  @Input() set sl(startLine: number) {
    this.state$.next({ ...this.state$.value, startLine });
  }

  fileUrl = src => `http://localhost:8201/file/${src}`;
  elm = this.elmRef.nativeElement;
  code$ = this.state$.pipe(
    pluck('src'),
    distinctUntilChanged(),
    switchMap(src => this.http.get(this.fileUrl(src), { responseType: 'text' })),
    tap(originalCode => this.state$.next({ ...this.state$.value, originalCode })),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private http: HttpClient,
    private elmRef: ElementRef,
    private zone: NgZone
  ) {
    console.log('init code-sample');
  }

  async save(newContent) {
    combineLatest([this.state$, this.code$])
      .pipe(
        take(1),
        switchMap(([state, oldContent]) => (oldContent !== newContent ? this.http.put(this.fileUrl(state.src), newContent) : EMPTY))
      )
      .subscribe();
  }

  stateSub = this.state$.subscribe();

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      from(monacoFromCdn())
        .pipe(
          // tap(mn => console.log({ mn })),
          switchMap(() => this.code$),
          map(value => {
            const editor = monaco.editor.create(this.elm, {
              value,
              language: 'typescript',
              theme: 'vs-dark',
              fontSize: '28px',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              renderValidationDecorations: 'off',
              minimap: { enabled: false },
            });
            window['e'] = editor;
            window.addEventListener('keydown', ev => {
              if (ev.ctrlKey && ev.key === 's') {
                this.save(editor.getValue());
                ev.preventDefault();
              }
            });
            return editor;
          }),
          take(1),
          tap(editor => this.state$.next({ ...this.state$.value, editor }))
        )
        .subscribe();
    });
  }
  ngOnDestroy() {
    this.stateSub.unsubscribe();
  }
}

function monacoFromCdn() {
  const version = '0.34.1';
  return new Promise((resolve, reject) => {
    if (window['monaco'] !== undefined) {
      /** no need to load if its already here ;) */
      return resolve(window['monaco']);
    }
    const lnk = document.createElement('link');
    lnk.rel = 'stylesheet';
    lnk.setAttribute('data-name', 'vs/editor/editor.main');
    lnk.href = `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/editor/editor.main.min.css`;
    document.head.appendChild(lnk);
    const ldr = document.createElement('script');
    ldr.src = `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/loader.min.js`;
    ldr.addEventListener('load', load);
    ldr.addEventListener('error', reject);
    document.body.appendChild(ldr);
    function load() {
      window['__myResolve__'] = resolve;
      const src = `
      require.config({
        paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs" },
      });
      const proxy = URL.createObjectURL(
        new Blob(
          ["self.MonacoEnvironment = {baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min'}; importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/base/worker/workerMain.min.js');"],
          { type: 'text/javascript' }
        )
      );
      window['MonacoEnvironment'] = { getWorkerUrl: () => proxy };
      require(['vs/editor/editor.main'], window['__myResolve__']);
      `;
      const st = document.createElement('script');
      st.text = src;
      document.body.appendChild(st);
    }
  });
}
