import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { balance, BinNode, BinNodeId, getNode, height, rotateLeft, rotateRight } from "../BinNode";
import { BintreeComponent } from '../bintree.component';

@Component({
  selector: 'b-node',
  templateUrl: './b-node.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BNodeComponent implements OnInit {
  node$ = new ReplaySubject<BinNode>()
  @Input() set bnode(bnode: BinNode|BinNodeId) {
    if (typeof bnode === 'string') {
      bnode = getNode(bnode);
    }
    this.node$.next({ ...bnode })
    // console.log(bnode?.value, get(bnode?.left)?.value, get(bnode?.right)?.value,)
  }
  height = height;
  balance = balance;

  constructor(public bt: BintreeComponent) { }

  ngOnInit(): void {
    // console.log(this.bnode?.value)
  }

  rl(n: BinNode) {
    setTimeout(() => { this.bt.rl(n)}, 10)
  }

  get(id: BinNodeId): BinNode {
    return getNode(id)
  }

}
