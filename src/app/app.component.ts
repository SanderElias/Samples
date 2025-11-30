import type { AfterContentInit} from '@angular/core';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ShowSourceComponent } from './show-source/show-source.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  imports: [RouterLinkActive, RouterLink, ShowSourceComponent, RouterOutlet]
})
export class AppComponent implements AfterContentInit {
  /** the 'input' element that toggles the menu */
  checked!: HTMLInputElement;
  /** a setter function to hook up the above */
  @ViewChild('menuToggle', { static: true }) set _toggle(x: ElementRef) {
    if (x && !this.checked) {
      this.checked = x.nativeElement as HTMLInputElement;
    }
  }
  title = 'samples';

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

  elmRef = inject(ElementRef);
}
