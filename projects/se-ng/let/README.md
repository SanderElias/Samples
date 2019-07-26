# @se-ng/let

Helper structural directive to make it easier to use observables in your view when you don't have a condition.

```html
<!-- Before -->
<ng-container *ngIf="someObservable$ | async as some">...</ng-container>


<ng-container *seLet="let some observe someObservable$">...</ng-container>

```

Accepts everything. If it gets a observable it will subscribe to it. (and unsubscribe on destroy!), otherwise it will just assign.




