import { Component, OnInit } from '@angular/core';
import { Arr } from 'messagepack';

@Component({
  selector: 'app-gridthings',
  templateUrl: './gridthings.component.html',
  styles: [],
})
export class GridthingsComponent implements OnInit {
  labels = Array.from({ length: 10 }, (_, i) => i+1);

  constructor() {}

  ngOnInit(): void {}
}
