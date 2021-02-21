import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pannel-stuff',
  templateUrl: './pannel-stuff.component.html',
  styles: [
  ]
})
export class PannelStuffComponent implements OnInit {
  time$ = interval(1000).pipe(map(() => new Date()))

  constructor() { }

  ngOnInit(): void {
  }

  alert(s:string) {
    alert(s)
  }

}
