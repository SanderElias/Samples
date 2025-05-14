import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { PannelCloseDirective, PannelComponent, PannelFooterDirective } from './pannel/pannel.component';

@Component({
  selector: 'app-pannel-stuff',
  templateUrl: './pannel-stuff.component.html',
  styles: [],
  imports: [PannelComponent, PannelCloseDirective, PannelFooterDirective, AsyncPipe, DatePipe]
})
export class PannelStuffComponent implements OnInit {
  time$ = interval(1000).pipe(map(() => new Date()));

  constructor() {}

  ngOnInit(): void {}

  alert(s: string) {
    alert(s);
  }
}
