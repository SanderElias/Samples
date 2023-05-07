// tslint:disable:no-unused-expression
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-wait-for-it',
    templateUrl: './wait-for-it.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgForOf, AsyncPipe]
})
export class WaitForItComponent {
  someVar: string[];
  @Input('someVar') private set _someVar(newContent) {
    /** do some stuff */
    this.someVar = newContent;
  }

  @Input() set prop1(val) {
    val && this.setIt('prop1', val);
  }
  @Input() set prop2(val) {
    val && this.setIt('prop2', val);
  }
  @Input() set prop3(val) {
    val && this.setIt('prop3', val);
  }

  requiredProps = [];

  goodToGo$ = new Subject<any[]>();

  setIt(propName: string, value: string) {
    this.requiredProps.push({ propName, value });
    if (this.requiredProps.length === 3) {
      this.goodToGo$.next(this.requiredProps);
    }
  }
}
