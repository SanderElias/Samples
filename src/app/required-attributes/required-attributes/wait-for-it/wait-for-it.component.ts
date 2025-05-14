// tslint:disable:no-unused-expression
import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wait-for-it',
  templateUrl: './wait-for-it.component.html',
  styles: [],
  imports: [AsyncPipe]
})
export class WaitForItComponent {
  someVar: string[] | undefined;
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

  requiredProps = [] as Record<string, string>[];

  goodToGo$ = new Subject<any[]>();

  setIt(propName: string, value: string) {
    this.requiredProps.push({ propName, value });
    if (this.requiredProps.length === 3) {
      this.goodToGo$.next(this.requiredProps);
    }
  }
}
