import { Component, Directive, ElementRef, Input, inject } from '@angular/core';

@Component({
  selector: 'pretty-text',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    '[style.backgroundColor]': 'bg',
    '[style.color]': 'color',
  },
})
class PrettyText {
  @Input() color = 'white';
  @Input() bg = 'red'
}

@Directive({
  selector: 'pretty-text[reversed]',
  standalone: true,
})
class PrettyReversed {
  pt = inject(PrettyText);
  ngOnInit() {
    const tmp = this.pt.bg
    this.pt.bg = this.pt.color
    this.pt.color = tmp;
  }
}

@Component({
  selector: 'se-signal-input-musings',
  standalone: true,
  imports: [PrettyText, PrettyReversed],
  template: `<h3>Signal stuff</h3>
    <pretty-text>test</pretty-text>
    <pretty-text reversed>test</pretty-text> `,

  styleUrl: './signal-input-musings.component.css',
})
export class SignalInputMusingsComponent {}
