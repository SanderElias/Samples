import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectMetaData } from './util/metaData.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
  imports: [RouterOutlet]
})
export class AppComponent {
  #meta = injectMetaData();

}



