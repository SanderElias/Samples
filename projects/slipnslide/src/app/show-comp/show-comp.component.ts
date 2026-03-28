import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'show-comp',
  template: ` <p>show-comp works! {{ component }}</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ShowCompComponent implements OnInit {
  @Input() component: string;

  constructor() {}

  ngOnInit(): void {}
}
