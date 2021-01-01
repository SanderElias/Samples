import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CodeSampleComponent } from '../code-sample/code-sample.component';


@Component({
  selector: 'app-slide'
  ,template: `<h1>Slide</h1>
  <scully-content></scully-content>`
})
export class SlideComponent {


  constructor( injector: Injector) {
    const dyn = createCustomElement(CodeSampleComponent, { injector });
    customElements.define('code-editor', dyn);
  }


}
