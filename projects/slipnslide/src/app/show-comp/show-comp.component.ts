import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'show-comp',
  template: `
    <p>
      show-comp works!  {{component}}
    </p>
  `,
  styles: [
  ]
})
export class ShowCompComponent implements OnInit {
  @Input() component:string

  constructor() { }

  ngOnInit(): void {
  }

}
