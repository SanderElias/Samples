# @se-ng/let

Helper structural directive to make it easier to use observables in your view when you don't have a condition.

```html
<!-- Before -->
<ng-container *ngIf="someObservable$ | async as some">...</ng-container>

<!-- After -->
<ng-container *seLet="someObservable$ as some">...</ng-container>
<!-- Or: -->
<ng-container *seLet="someObservable$ let some">...</ng-container>
<!-- Or: -->
<ng-container *seLet="let some observe someObservable$">...</ng-container>
<!-- Or: -->
<ng-container *seLet="let some on someObservable$">...</ng-container>
```

Accepts everything. If it gets a observable it will subscribe to it. (and unsubscribe
on destroy!), otherwise it will just assign.

## Installation

```bash
npm i @se-ng/let
```

then import in the module where you want to use it:

```typescript
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SomeComponent} from './some.component';
import {Routes, RouterModule} from '@angular/router';
import {SeLetModule} from '@se-ng/let';

const routes: Routes = [
  {path: '', component: SomeComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [SomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SeLetModule],
})
export class SampleModule {}
```

Then use it in your template as indicated above. Feel free to contact me on questions.
