import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-swapi',
  template: `
    <h1>Swapi module is in place</h1>
    <p>Inject the swapi service where you need it.</p>
  `,
  styles: [],
})
export class SwapiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
