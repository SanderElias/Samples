import { Component, inject } from '@angular/core';

import { LangService } from '../lang.service';

@Component({
  selector: 'se-home',
  imports: [],
  template: `
    <h1>
      Welcome
      <h1>
        <h2>to the {{ lang }} home page</h2>
      </h1>
    </h1>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  lang = inject(LangService).current;
}
