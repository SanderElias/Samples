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

// c2b33b83b550b5dc74e524f30311b4d58384bd84
