import { CommonModule } from '@angular/common';
import { afterNextRender,Component, DestroyRef, ElementRef, inject } from '@angular/core';

@Component({
    selector: 'se-resizable-panel',
    imports: [CommonModule],
    template: `<ng-content></ng-content>`,
    styleUrls: ['./resizable-panel.component.css']
})
export class ResizablePanelComponent {
  elm = inject(ElementRef).nativeElement as HTMLElement;
  des = inject(DestroyRef);
  name = path(this.elm);
  resHandler = (e: ResizeObserverEntry[]) => {
    const [
      {
        borderBoxSize: [{ inlineSize, blockSize }],
      },
    ] = e;
    // console.dir(this.name);
    this.elm.style.setProperty('--_panel-width', `${inlineSize}px`);
    this.elm.style.setProperty('--_panel-height', `${blockSize}px`);
  };
  resObs!: ResizeObserver;

  constructor() {
    afterNextRender(() => {
      this.resObs = new ResizeObserver(debounce(this.resHandler, 250));
      this.resObs.observe(this.elm);
      this.des.onDestroy(() => this.resObs.unobserve(this.elm));
    });
  }
}

function debounce(fn: Function, wait: number) {
  let timeout: any;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

function path(elm) {
  let a: string[] = [];
  while (elm.parentNode) {
    let d = [
      elm.tagName.toLowerCase(),
      elm.hasAttribute('class') ? elm.getAttribute('class') : '',
      elm.hasAttribute('id') ? elm.getAttribute('id') : '',
      elm.hasAttribute('name') ? elm.getAttribute('name') : '',
      elm.hasAttribute('type') ? elm.getAttribute('type') : '',
      0, // nth-child
    ];

    // Trim
    for (let i = 0; i < d.length; i++) d[i] = typeof d[i] == 'string' ? d[i].trim() : d[i];

    if (d[1] != '') d[1] = '.' + d[1].split(' ').join('.');
    if (d[2] != '') d[2] = '#' + d[2];
    if (d[3] != '') d[3] = '[name="' + d[3] + '"]';
    if (d[4] != '') d[4] = '[type="' + d[4] + '"]';
    // Get child index...
    let s = elm;
    while (s) {
      d[5]++;
      s = s.previousElementSibling;
    }
    d[5] = d[5] != '' ? ':nth-child(' + d[5] + ')' : ':only-child';
    // Build the String
    s = '';
    for (let i = 0; i < d.length; i++) s += d[i];
    a.unshift(s);

    // Go to Parent
    elm = elm.parentNode;
  }
  return a.join('>');
}
