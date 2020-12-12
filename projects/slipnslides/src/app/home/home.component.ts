import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<a routerLink="/edit"><h1>Home</h1></a>`,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
