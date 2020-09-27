import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import Editor from '@toast-ui/editor';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

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

      }
    `,
  ],
})
export class MdEditComponent implements OnInit, OnDestroy {
  @Input() set markdown(x) {
    if (x && typeof x === 'string') {
      setTimeout(() => this.editor && this.editor.setMarkdown(x), 10);
    }
  }
  @Output() updates = new EventEmitter<string>();
  private content = new Subject<string>();
  private content$ = this.content.pipe(
    debounceTime(500),
    map(() => this.editor.getMarkdown())
  );

  private contntSub = this.content$.subscribe(this.updates);

  private elm = this.elmRef.nativeElement;
  private editor: Editor;

  constructor(private elmRef: ElementRef) {}

  ngOnInit(): void {
    if (this.elm) {
      // this.elm.innerHTML = 'hello'
      Promise.all(styles.map(loadCss)).then(() => {
        const el = document.createElement('div');
        this.elm.appendChild(el);
        this.editor = new Editor({
          el,
          events: {
            change: () => this.content.next(),
          },
          usageStatistics: false,
          initialValue: this.markdown,
        });
      });
    }
  }

  ngOnDestroy() {
    this.contntSub.unsubscribe();
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
