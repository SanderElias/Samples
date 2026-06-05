import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  inject,
  Service
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet]
})
export class AppComponent {
  aps = inject(AppService);

  _ = afterRenderEffect(() => {
    console.log('afterRenderEffect');
    console.log(this.aps.data()?.toString());
  });
}

@Service()
export class AppService {
  data = toSignal(inject(ActivatedRoute).url);

  effect() {
    console.log('effect');
    console.log(this.data()?.toString());
  }
}
