import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-observable-utils',
  template: ` <p>observable-utils works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ObservableUtilsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
