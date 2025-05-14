import { Component } from '@angular/core';

import ReactiveComponent from '../reactive/reactive.component';
import TemplateComponent from '../template/template.component';

@Component({
  selector: 'se-both',
  imports: [TemplateComponent, ReactiveComponent],
  template: `
    <header><H1>Reactive vs Template</H1></header>
    <main>
      <se-template></se-template>
      <se-reactive></se-reactive>
    </main>
  `,
  styleUrls: ['./both.component.css']
})
export default class BothComponent {}
