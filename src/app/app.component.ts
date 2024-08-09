import { AfterContentInit, ChangeDetectorRef, Component, ElementRef, inject, NgZone, ɵNoopNgZone,ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ShowSourceComponent } from './show-source/show-source.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  standalone: true,
  imports: [RouterLinkActive, RouterLink, ShowSourceComponent, RouterOutlet],
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

  cdr = inject(ChangeDetectorRef);
  zone = inject(NgZone);
  r = inject(ActivatedRoute);
  elmRef = inject(ElementRef);
  constructor() {
    // window['ar'] = this.r;
    // // console.log('rs', r);
    // if (this.zone instanceof ɵNoopNgZone) {
    //   /**
    //    * This is a very crude way to get the app going.
    //    * As long as zoneLess isn't fully driven by signals,
    //    * we need something to tell Angular to update the view.
    //    */
    //   console.warn(`[appComponent] NoopZone detected, run CDR.detectChanges every 15Ms`);
    //   setTimeout(() => this.cdr.detectChanges(), 500);
    //   // setInterval(() => this.cdr.detectChanges(), 15); // cater for 60 fps.
    // }
  }
}
