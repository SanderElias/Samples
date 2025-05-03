import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, afterRender, inject, viewChild } from '@angular/core';
import { HighLightBodyComponent } from '../high-light-body/high-light-body.component';

@Component({
    selector: 'td:not([ignoreHl])',
    imports: [],
    template: `<span #org><ng-content></ng-content></span>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighLightTDComponent {
  /** injections  */
  tbody = inject(HighLightBodyComponent, { optional: true, skipSelf: true }); // get the tbody, so we can get the highlight signal.
  elm = inject(ElementRef).nativeElement as HTMLElement; // get the native element of this component
  fakeElm = inject(DOCUMENT).createElement('span'); // create a new span to use for the highlighted version of the content.

  originalContent = viewChild.required<string, ElementRef<HTMLSpanElement>>('org', { read: ElementRef }); // get the original content of the cell.

  highLight = () => {
    const original = this.originalContent().nativeElement;
    const fake = this.fakeElm;
    if (!this.highlightIsDone(original, fake)) {
      // no highlight done, so show the original content.
      original.hidden = false;
      fake.innerHTML = ''; // and clear the fake content.
    }
  };

  highlightIsDone = (originalContent: HTMLSpanElement, fakeContent: HTMLSpanElement) => {
    const originalText = originalContent.innerHTML;
    if (!originalText || originalText.trim() === '' || originalText.trim() === '--') return false; // nothing in the source that can be highlighted
    const highLight = this.tbody?.highLight();
    if (!highLight) return false; // if there is nothing to highlight, we are done too
    const hl = new RegExp(highLight, 'gi');
    if (!hl.test(originalText)) return false; // the filter is not in this cell, done!
    const newHtml = originalText.replace(hl, (match) => `<mark>${match}</mark>`); // create the new content using the HTML <mark> to do the highlighting
    if (newHtml !== fakeContent.innerHTML) {
      // only rewrite the dom when there is a change. DOM writes are way more expensive as a test
      fakeContent.innerHTML = newHtml; // inject the version with the markers in there.
      originalContent.hidden = true; // hide the Angular version
    }
    return true; // done!
  };

  constructor() {
    if (!this.tbody) {
      throw new Error(`[HighLightTDComponent] could not find the required parent \`<tbody [highLight]="someSignal<string>"\``);
    }

    this.elm.appendChild(this.fakeElm); // add the empty span, so its ready to go.
    afterRender({ read: this.highLight }); // run the highlight function after the render cycle.
  }
}
