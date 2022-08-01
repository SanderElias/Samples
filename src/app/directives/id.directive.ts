import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[id]',
})
export class IdDirective {
  @Input() id: string;
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

