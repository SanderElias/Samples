import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-comp',
  template: `
    <p>
      show-comp works!
    </p>
  `,
  styles: [
  ]
})
export class ShowCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
