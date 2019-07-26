import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-let',
  template: `
    <p>
      let works!
    </p>
  `,
  styles: []
})
export class LetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
