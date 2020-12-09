import { Component, ElementRef, Injector, Input, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';

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

    <input type="text" [value]="name" (input)="name = $event.target.value" />
    <textarea [value]="html" (input)="update($event.target.value)"></textarea>
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
})
export class DynamicHtmlComponent implements OnInit {
  elm = this.elmRef.nativeElement as HTMLDivElement;
  name = 'Angular';
  html = `
  <h1>test some html<h1>
  <p>Well, <dyn-data property='name'></dyn-data> is awesome</p>
  `;

  constructor(private elmRef: ElementRef, injector: Injector) {
    const dyn = createCustomElement(DynDataComponent, { injector });
    customElements.define('dyn-data', dyn);
  }

  ngOnInit() {
    this.update(this.html);
  }

  update(newHtml) {
    const target = this.elm.querySelector('#target');
    target.innerHTML = newHtml;
  }
}


