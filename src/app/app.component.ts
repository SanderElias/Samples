import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { ShowSourceComponent } from './show-source/show-source.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, ShowSourceComponent, RouterOutlet]
})
export class AppComponent implements AfterContentInit {
  /** the 'input' element that toggles the menu */
  checked: HTMLInputElement;
  /** a setter function to hook up the above */
  @ViewChild('menuToggle', { static: true }) set _toggle(x: ElementRef) {
    if (x && !this.checked) {
      this.checked = x.nativeElement as HTMLInputElement;
    }
  }
  title = 'samples';
  constructor(private elmRef: ElementRef, private r: ActivatedRoute) {
    window['ar'] = r;
    // console.log('rs', r);
  }

  ngAfterContentInit() {
    /**
     * I want the menu to close when a view is selected
     * Q&D: add click-handler to every link.
     */
    const host = this.elmRef.nativeElement as HTMLElement;
    if (host) {
      host.querySelectorAll('#menu a').forEach(a =>
        a.addEventListener('click', () => {
          this.checked.checked = false;
        })
      );
    }
  }
}
