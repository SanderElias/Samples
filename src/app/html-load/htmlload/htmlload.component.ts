import type { OnDestroy } from '@angular/core';
import { Component, ElementRef, inject } from '@angular/core';

import { BogusLoadService } from '../bogus-load.service';

@Component({
  selector: 'app-htmlload',
  templateUrl: './htmlload.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class HtmlloadComponent implements OnDestroy {
  /* injections */
  html = inject(BogusLoadService);
  /** gets the native element.  */
  elm = inject(ElementRef).nativeElement as HTMLElement;

  sub = this.html.load('Some url provided').subscribe(html => {
    if (typeof document === 'undefined') return;

    /**
     * setting innerHTML doesn't "run" scripts,
     * instead create a document fragment
     */
    const frag = document.createRange().createContextualFragment(html);
    /** erase old content */
    this.elm.innerHTML = '';
    /** add the new 'html' to the page */
    this.elm.appendChild(frag);
  });

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
