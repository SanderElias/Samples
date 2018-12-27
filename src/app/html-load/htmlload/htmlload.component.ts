import { Component, OnInit, ElementRef } from '@angular/core';
import { BogusLoadService } from '../bogus-load.service';

@Component({
  selector: 'app-htmlload',
  templateUrl: './htmlload.component.html',
  styles: []
})
export class HtmlloadComponent implements OnInit {
  private elm = this.elmRef.nativeElement as HTMLElement;

  constructor(private html: BogusLoadService, private elmRef: ElementRef) {}

  ngOnInit() {
    /** I don't need to unsubscribe, because htmlLoad completes */
    this.html.load('Some url provided').subscribe(html => {
      console.log('html loaded', html, this.elm);
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
  }
}
