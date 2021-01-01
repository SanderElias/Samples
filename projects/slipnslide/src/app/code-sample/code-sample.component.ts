import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { from, of, ReplaySubject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
// import * as monaco from 'monaco-editor';
declare const monaco: any;

@Component({
  selector: 'code-sample',
  template: ``,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }
    `,
  ],
})
export class CodeSampleComponent implements OnInit, OnDestroy {
  src$ = new ReplaySubject<string>(1);
  @Input() set src(x) {
    // = ''; //'slipnslide/src/app/code-sample/code-sample.component.ts';
    if (typeof x === 'string') {
      this.src$.next(x);
    }
  }
  @Input() startLine = 0;
  @Input() endLine = Number.MAX_SAFE_INTEGER;
  fileUrl = src => `http://localhost:8201/file/${src}`;

  @Input() set sl(n: number) {
    this.startLine = n;
  }
  @Input() set el(n: number) {
    this.endLine = n;
  }
  elm = this.elmRef.nativeElement;
  code$ = this.src$.pipe(
    switchMap(src => this.http.get(this.fileUrl(src), { responseType: 'text' })),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  editorSub: any;
  constructor(private http: HttpClient, private elmRef: ElementRef, private zone: NgZone) {}

  async save(newContent) {
    const oldContent = await this.code$.toPromise();

    if (oldContent !== newContent) {
      console.log('Saving to disk!');
      /** there is actually something to save! */
      this.src$.pipe(src => this.http.put(this.fileUrl(src), newContent).subscribe());
    }
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.editorSub = from(monacoFromCdn())
        .pipe(
          switchMap(() => this.code$),
          tap(value => {
            const editor = monaco.editor.create(this.elm, {
              value,
              language: 'typescript',
              theme: 'vs-dark',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              renderValidationDecorations: 'off',
              minimap: { enabled: false },
            });
            window['e'] = editor;
            window.addEventListener('keydown', ev => {
              if (ev.ctrlKey && ev.key === 's') {
                // this.save(editor.getValue());
                console.log('should be saved?');
                ev.preventDefault();
              }
            });
          })
        )
        .subscribe({
          next(code) {},
          error(e) {
            console.log('error while initializing monaco editor', e);
          },
        });
    });
  }
  ngOnDestroy() {
    this.editorSub.unsubscribe();
  }
}

function monacoFromCdn() {
  const version = '0.21.2';
  return new Promise((resolve, reject) => {
    if (window['monaco'] !== undefined) {
      /** no need to load if its already here ;) */
      return resolve(monaco);
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
