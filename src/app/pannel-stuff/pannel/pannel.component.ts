import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PannelComponent {
  private elmRef = inject(ElementRef);

  shadowRoot = this.elmRef.nativeElement?.shadowRoot;
}

@Directive({
  selector: 'app-pannel[close]'
})
export class PannelCloseDirective implements OnInit {
  private pannel = inject(PannelComponent, { host: true });

  private root = this.pannel.shadowRoot;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    if (typeof document === 'undefined') return;

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
  selector: 'app-pannel[footer]'
})
export class PannelFooterDirective implements OnInit {
  private panel = inject(PannelComponent, { host: true });

  private root = this.panel.shadowRoot;
  @Input('footer') set footerContent(x) {
    if (typeof x === 'string') {
      if (typeof document === 'undefined') return;
      const footer = this.root.querySelector('footer') as HTMLDivElement;
      footer.innerText = x;
    }
  }
  @Output() footer = new EventEmitter<void>();

  ngOnInit() {
    if (typeof document === 'undefined') return;
    if (this.root) {
      const pannel = this.root.querySelector('.pannel') as HTMLDivElement;
      pannel.classList.add('footer');
    }
  }
}
