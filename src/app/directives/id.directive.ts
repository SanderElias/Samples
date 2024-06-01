import { Directive, ElementRef, Input, OnInit } from '@angular/core';

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
  #elm = this.elmRef.nativeElement;

  constructor(private elmRef: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    this.#elm.setAttribute('loading', 'lazy');
  }
}
