import { Component, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import Editor from '@toast-ui/editor';
// import { safeDump } from 'js-yaml';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

const styles = [
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css',
  'https://uicdn.toast.com/editor/latest/toastui-editor.min.css',
];

@Component({
  selector: 'md-edit',
  template: ``,
  styles: [
    `
      :host {
        display: block;
        background-color: white;
      }
    `,
  ],
  standalone: true,
})
export class MdEditComponent implements OnInit, OnDestroy {
  attributes: { [key: string]: any };
  _markdown: string;
  @Input() set markdown(x: string) {
    if (x) {
      this._markdown = x.trimStart();
      if (this.editor) {
        /**
         * the if is needed because on creation editor doesn't exist yet
         * this way it sets it via _markdown on init, and otherwise with the setMarkdown.
         */
        this.editor.setMarkdown(this._markdown);
      }
    }
  }
  @Output() updates = new EventEmitter<string>();
  private content = new Subject<string>();
  private content$ = this.content.pipe(
    debounceTime(500),
    map(() => this.editor.getMarkdown().trimStart()),
    distinctUntilChanged(),
    filter(x => x !== this._markdown)
  );

  /** feed the new content into the output emitter */
  private contentSub = this.content$.subscribe(this.updates);

  private elm = this.elmRef.nativeElement;
  private editor: Editor;

  constructor(
    private elmRef: ElementRef,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    if (this.elm) {
      // this.elm.innerHTML = 'hello'
      Promise.all(styles.map(loadCss)).then(() => {
        this.zone.runOutsideAngular(() => {
          const el = document.createElement('div');
          this.elm.appendChild(el);
          this.editor = new Editor({
            el,
            events: {
              change: () => this.content.next(),
            },
            // previewStyle: 'vertical',
            usageStatistics: false,
            initialValue: this._markdown,
          });
        });
      });
    }
  }

  ngOnDestroy() {
    this.contentSub.unsubscribe();
  }
}

function loadCss(href): Promise<void> {
  return new Promise((resolve, reject) => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    if (links.find((e: HTMLLinkElement) => e.href === href) === undefined) {
      const lnk = document.createElement('link');
      const loaded = () => {
        lnk.removeEventListener('load', loaded);
        resolve();
      };
      lnk.addEventListener('load', loaded);
      lnk.rel = 'stylesheet';
      lnk.href = href;
      document.head.appendChild(lnk);
    } else {
      resolve();
    }
  });
}
