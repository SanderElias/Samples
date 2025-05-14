import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  router = inject(Router);

  known = ['nl', 'fr'] as const;

  current = '';

  pick = (lang: any) => {
    if (!this.known.includes(lang)) {
      // go select a language
      this.router.navigateByUrl('/');
    }
    this.current = lang;
    this.router.navigateByUrl(`/${lang}/home`);
  };
}
