import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { LangService } from '../lang.service';

@Component({
  selector: 'se-lang',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` <a href="/">Pick a language</a>
    <router-outlet></router-outlet>`,
  styleUrls: ['./lang.component.css'],
})
export class LangComponent implements OnDestroy {
  ls = inject(LangService);
  langSub = inject(ActivatedRoute)
    .params.pipe(map(params => params.langId))
    .subscribe({
      next: (lang: string) => this.ls.pick(lang),
    });

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }
}
