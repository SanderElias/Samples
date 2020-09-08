import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'view-slide',
  template: ` <scully-content><scully-content> </scully-content></scully-content> `,
  styleUrls: ['./vied-slide.component.css']
})
export class ViewSlideComponent implements OnInit {
  elm = this.elmRef.nativeElement;
  slides$ = this.sls.slides$.pipe(take(1));

  constructor(private elmRef: ElementRef, private sls: SlidesService, private router: Router) {}

  ngOnInit(): void {
    if (this.elm) {
      this.slides$.subscribe(slides => {
        let timer: any;
        document.addEventListener('keyup', ev => {
          if (!timer) {
            timer = setTimeout(() => {
              const cur = this.router.url.slice(1);
              const curIndex = slides.findIndex(slide => slide.filename.startsWith(cur));
              console.log(curIndex);
              if (ev.key === 'ArrowRight') {
                this.router.navigate([
                  '/' +
                    slides[Math.min(slides.length - 1, curIndex + 1)].filename.replace('.md', ''),
                ]);
              }
              if (ev.key === 'ArrowLeft') {
                this.router.navigate([
                  '/' + slides[Math.max(0, curIndex - 1)].filename.replace('.md', ''),
                ]);
              }
              timer = undefined;
            }, 100);
          }
        });
      });
    }
  }
}
