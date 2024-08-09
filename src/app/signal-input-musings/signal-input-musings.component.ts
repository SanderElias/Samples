import { Component, Directive, inject, Input } from '@angular/core';

@Component({
  selector: 'pretty-text',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    '[style.backgroundColor]': 'bg',
    '[style.color]': 'color',
  },
})
class PrettyTextComponent {
  @Input() color = 'white';
  @Input() bg = 'red';
}

@Directive({
  selector: 'pretty-text[reversed]',
  standalone: true,
})
class PrettyReversedComponent {
  pt = inject(PrettyTextComponent);
  ngOnInit() {
    const tmp = this.pt.bg;
    this.pt.bg = this.pt.color;
    this.pt.color = tmp;
  }
}

@Component({
  selector: 'se-signal-input-musings',
  standalone: true,
  imports: [PrettyTextComponent, PrettyReversedComponent],
  template: `<h3>Signal stuff</h3>
    <pretty-text>test</pretty-text>
    <pretty-text reversed>test</pretty-text> `,

  styleUrl: './signal-input-musings.component.css',
})
export class SignalInputMusingsComponent {}
