import { Component, OnInit } from '@angular/core';

import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-gridthings',
  templateUrl: './gridthings.component.html',
  styles: [],
  imports: [CellComponent]
})
export class GridthingsComponent implements OnInit {
  labels = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor() {}

  ngOnInit(): void {}
}
