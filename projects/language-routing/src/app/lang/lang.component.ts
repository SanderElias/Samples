import { Component, OnDestroy, inject, input } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { LangService } from '../lang.service';

@Component({
  selector: 'se-lang',
  imports: [RouterOutlet],
  template: ` <a href="/">Pick a language</a>
    <router-outlet></router-outlet>`,
  styleUrls: ['./lang.component.css']
})
export class LangComponent {
  ls = inject(LangService);
  langId = input<string>();
  // langSub = inject(ActivatedRoute)
  //   .params.pipe(map(params => params.langId))
  //   .subscribe({
  //     next: (lang: string) => this.ls.pick(lang),
  //   });

  dymmy = effect(() => {
    console.log({ langId: this.langId });
    this.ls.pick(this.langId);
  });
}
