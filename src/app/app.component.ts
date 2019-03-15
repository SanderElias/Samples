import {
  Component,
  ViewChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterContentInit {
  /** the 'input' element that toggles the menu */
  checked: HTMLInputElement;
  /** a setter function to hook up the above */
  @ViewChild('menuToggle') set _toggle(x: ElementRef) {
    if (x && !this.checked) {
      this.checked = x.nativeElement as HTMLInputElement;
    }
  }
  title = 'samples';
  constructor(private elmRef: ElementRef) {}

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
