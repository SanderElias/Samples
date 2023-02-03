import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-pannel',
    templateUrl: './pannel.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom,
    standalone: true
})
export class PannelComponent {
  shadowRoot = this.elmRef.nativeElement?.shadowRoot;
  constructor(private elmRef: ElementRef) {}
}

@Directive({
    selector: 'app-pannel[close]',
    standalone: true
})
export class PannelCloseDirective implements OnInit {
  private root = this.pannel.shadowRoot;
  @Output() close = new EventEmitter<void>();

  constructor(@Host() private pannel: PannelComponent) {}

  ngOnInit() {
    if (this.root) {
      const pannel = this.root.querySelector('.pannel');
      const main = this.root.querySelector('main');
      const closeButton = document.createElement('button');
      const closeIt = () => {
        pannel.style.display = 'none';
        this.close.emit();
        closeButton.removeEventListener('click', closeIt);
      };

      closeButton.id = 'closeButton';
      closeButton.addEventListener('click', closeIt);
      main.appendChild(closeButton);
    }
  }
}

@Directive({
    selector: 'app-pannel[footer]',
    standalone: true
})
export class PannelFooterDirective implements OnInit {
  private root = this.panel.shadowRoot;
  @Input('footer') set footerContent(x) {
    if (typeof x === 'string') {
      const footer = this.root.querySelector('footer') as HTMLDivElement;
      footer.innerText = x;
    }
  }
  @Output() footer = new EventEmitter<void>();

  constructor(@Host() private panel: PannelComponent) {}

  ngOnInit() {
    if (this.root) {
      const pannel = this.root.querySelector('.pannel') as HTMLDivElement;
      pannel.classList.add('footer');
    }
  }
}
