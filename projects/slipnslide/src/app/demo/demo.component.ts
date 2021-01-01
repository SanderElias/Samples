import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <p>
      demo works!
    </p>
  `,
  styles: [`
  :host {
    display:block;
    background-color:#bada55;
  }
  `
  ]
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
