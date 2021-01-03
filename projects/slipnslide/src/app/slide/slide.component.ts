import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CodeSampleComponent } from '../code-sample/code-sample.component';
import { DemoComponent } from '../demo/demo.component';
import { ShowCompComponent } from '../show-comp/show-comp.component';

const availableComps = {
  demo: DemoComponent,
};
@Component({
  selector: 'app-slide',
  template: `<scully-content></scully-content>`,
})
export class SlideComponent {
  constructor(injector: Injector) {
    const dyn = createCustomElement(CodeSampleComponent, { injector });
    customElements.define('code-editor', dyn);
    const sh = createCustomElement(ShowCompComponent, { injector });
    customElements.define('show-component', sh);
  }
}
