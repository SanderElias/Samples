import { Input } from '@angular/core';
import { isArray } from 'util';
class SomeComponent {
  myCustomProperty: string[];
  @Input('myCustomProperty')
  private set _myCustomProperty(newVal) {
    if (newVal &&
      isArray(newVal) &&
      newVal.every(item => typeof item === 'string')) {
      this._myCustomProperty = newVal;
      return;
    }
    if (newVal !== undefined) {
      throw new Error('myCustomProperty of SomeComponent can only be a string assay');
    }
  }
}
