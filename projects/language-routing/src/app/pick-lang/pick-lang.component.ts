import { Component, inject } from '@angular/core';

import { LangService } from '../lang.service';

@Component({
  selector: 'se-pick-lang',
  imports: [],
  template: `
    <h1>Pick a language</h1>
    <div>
      @for (lang of availableLanguages; track lang) {
        <button (click)="pick(lang)">{{ lang }}</button>
      }
    </div>
  `,
  styleUrls: ['./pick-lang.component.css']
})
export class PickLangComponent {
  ls = inject(LangService);
  availableLanguages = this.ls.known;

  pick = this.ls.pick;
}
