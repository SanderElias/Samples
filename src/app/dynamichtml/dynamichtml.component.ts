import { Component, ElementRef, Injector, Input, OnInit, SecurityContext } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';
import { number } from 'yargs';

/**
 * I did put those in 1 file because those 2 components
 * are co-dependent, and you will get circular warnings otherwise
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dyn-data',
  template: `{{ content }}`,
  styles: [
    `
      :host {
        display: inline-block;
        border: 1px solid green;
        padding: 5px 2px;
      }
    `,
  ],
})
class DynDataComponent {
  @Input() property = '';
  constructor(private parent: DynamicHtmlComponent) {}

  get content() {
    if (this.parent && this.property && this.parent[this.property]) {
      return this.parent[this.property];
    }
  }
}

@Component({
  selector: 'app-dynamichtml',
  template: `
    <h1>Dynamic HTML sample</h1>

    <input type="text" [value]="name" (input)="name = $any($event.target).value" />
    <textarea [value]="html" (input)="update($any($event.target).value)"></textarea>
    <button>Update</button>

    <div id="target"></div>
  `,
  styles: [
    `
      textarea {
        display: block;
        height: 6rem;
        width: 30rem;
        padding: 0;
      }
    `,
  ],
  standalone: true,
})
export class DynamicHtmlComponent implements OnInit {
  elm = this.elmRef.nativeElement as HTMLDivElement;
  name = 'Angular';
  html = `
  <h1>Some random HTML</h1>
  <p>Well, <dyn-data property='name'></dyn-data> is awesome</p>
  <p>
  To do it this way is really dangerous, as it will expose to all kind of security issues.
  (see the functioning alert in the sample code!!)
  But the person that asked the question, needed a way to run script tags, and this is the easiest way.
  With this sample comes a severe warning, that this is really dangerous.
  </p>
  <button onclick="alert('hi')">hi</button>
  `;

  constructor(
    private elmRef: ElementRef,
    injector: Injector,
    private sanitizer: DomSanitizer
  ) {
    const dyn = createCustomElement(DynDataComponent, { injector });
    customElements.define('dyn-data', dyn);
  }

  ngOnInit() {
    this.update(this.html);
  }

  update(newHtml) {


    const target = this.elm.querySelector('#target')!;
    /**
     * To do it this way is really dangerous, as it will expose to all kind of security issues.
     *   (the most importand one: https://owasp.org/www-community/attacks/xss/)
     * (see the functioning alert in the sample code!!)
     * But the person that asked the question, needed a way to run script tags, and this is the easiest way.
     * With this sample there was a severe warning, that this is really dangerous.
     *
     * When the Angular sanitizer is a bit too strict for your use-case, there are alternatives, like DOMPurify
     * For more information see: https://angular.io/guide/security
     */

    // DON'T DO THIS!
    /** DANGER AHEAD */ target.innerHTML = newHtml; /** I mean it, this might cost you your job */
    // REALLY, DON'T
    // (Really don't! They even send out Igor to comment on your sample code ;-P )
    return;

    /** this is the version you should be using */
    // @ts-ignore
    target.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, newHtml);
  }
}
