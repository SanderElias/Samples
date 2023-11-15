# ObservableHooks

This library is created to create an easy way to have life-cycle hooks. It's currently in beta. Feel free to use it as is. There will be no changes in the API of them anymore. There will be tests added, and the documentation still needs a load of attention.
Once we hit stable ground this will move to its own repo, but for now it lives in Sanders Samples repo.

to use the library do:

```bash
yarn add @se-ng/observable-hooks
```

Then in a component use them by using by extending your component class like this:

```ts
import {
  /** only import the ones you need, but all of those are available */
  seAfterContentChecked,
  seAfterContentInit,
  seAfterViewChecked,
  seAfterViewInit,
  seDoCheck,
  seOnChanges
  seOnDestroy,
  seOnInit,
} from '@se-ng/observable-hooks';

@Component({
  selector: 'app-mixins',
  templateUrl: './mixins.component.html',
  styles: []
})
export class MixinsComponent extends seOnDestroy(seOnInit(seAfterContentChecked(class {}))) {
   /** in here , the life-cycle hooks are available as properties **/

   /** do something after init */
  demo = this.seOnInit$.pipe(...)
}
```

All the life-cycle-hooks from Angular are available as `seHookName`. Every hook is an observable, and all of them will be disposed properly on component destroy.
