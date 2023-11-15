import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import TemplateComponent from '../template/template.component';
import ReactiveComponent from '../reactive/reactive.component';

@Component({
  selector: 'se-both',
  standalone: true,
  imports: [CommonModule, TemplateComponent, ReactiveComponent],
  template: `
    <header><H1>Reactive vs Template</H1></header>
    <main>
      <se-template></se-template>
      <se-reactive></se-reactive>
    </main>
  `,
  styleUrls: ['./both.component.css'],
})
export default class BothComponent {}
