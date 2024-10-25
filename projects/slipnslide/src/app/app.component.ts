import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CodeSampleComponent } from './code-sample/code-sample.component';
import { ShowCompComponent } from './show-comp/show-comp.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    styles: [],
    imports: [RouterOutlet],

})
export class AppComponent {
  title = 'slipnslide';
}
