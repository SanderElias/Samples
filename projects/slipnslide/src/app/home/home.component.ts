import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<a routerLink="/edit"><h1>Home</h1></a>`,
  styles: [],
  imports: [RouterLink]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
