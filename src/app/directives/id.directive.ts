import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[id]',
  standalone: true,
})
export class IdDirective {
  @Input({ required: true }) id!: string;
}

@Directive({
  selector: 'img[src]',
})
export class lazyImagesLoadDirective implements OnInit {
  private elmRef = inject<ElementRef<HTMLImageElement>>(ElementRef<HTMLImageElement>);

  #elm = this.elmRef.nativeElement;

  ngOnInit() {
    this.#elm.setAttribute('loading', 'lazy');
  }
}
