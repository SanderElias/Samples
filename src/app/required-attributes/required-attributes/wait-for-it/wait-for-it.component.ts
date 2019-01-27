import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wait-for-it',
  templateUrl: './wait-for-it.component.html',
  styles: []
})
export class WaitForItComponent implements OnInit {
  @Input() set prop1(val) {
    if (val) {
      this.setIt('prop1', val);
    }
  }
  @Input() set prop2(val) {
    if (val) {
      this.setIt('prop2', val);
    }
  }
  @Input() set prop3(val) {
    if (val) {
      this.setIt('prop3', val);
    }
  }

  requiredProps = [];

  goodToGo$ = new Subject<any[]>();

  setIt(propName: string, value: string) {
    this.requiredProps.push({ propName, value });
    if (this.requiredProps.length === 3) {
      this.goodToGo$.next(this.requiredProps);
    }
  }

  constructor() {}

  ngOnInit() {}
}
