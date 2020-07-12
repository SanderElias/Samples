import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-drop',
  templateUrl: './back-drop.component.html',
  styles: [],
})
export class BackDropComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('backdrop is activated');
  }
}
