import { Component, Input, OnInit } from '@angular/core';
import { BinNode } from "../BinNode";

@Component({
  selector: 'b-node',
  templateUrl: './b-node.component.html',
  styles: [
  ]
})
export class BNodeComponent implements OnInit {
  @Input() bnode:BinNode

  constructor() { }

  ngOnInit(): void {
    // console.log(this.bnode?.value)
  }

}
