import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../lang.service';

@Component({
  selector: 'se-pick-lang',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Pick a language</h1>
    <div>
      <button *ngFor="let lang of availableLanguages" (click)="pick(lang)">{{ lang }}</button>
    </div>
  `,
  styleUrls: ['./pick-lang.component.css'],
})
export class PickLangComponent {
  ls = inject(LangService);
  availableLanguages = this.ls.known;

  pick = this.ls.pick;
}
