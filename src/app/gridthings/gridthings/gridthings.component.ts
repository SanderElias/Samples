import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Arr } from 'messagepack';

import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-gridthings',
  templateUrl: './gridthings.component.html',
  styles: [],
  standalone: true,
  imports: [CellComponent, NgForOf],
})
export class GridthingsComponent implements OnInit {
  labels = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor() {}

  ngOnInit(): void {}
}
