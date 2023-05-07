import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { balance, BinNode, getNode, height } from "../BinNode";
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'b-node',
    templateUrl: './b-node.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, BNodeComponent, AsyncPipe]
})
export class BNodeComponent {
  node$ = new ReplaySubject<BinNode>()
  left$ = this.node$.pipe(
    map(n => ({ ...getNode(n.left), time: Date.now() })),
  );
  right$ = this.node$.pipe(
    map(n => ({ ...getNode(n.right), time: Date.now() })),
  );

  @Input() set bNode(bNode: BinNode) {
    setTimeout(() => this.node$.next({ ...bNode, time: Date.now() }), 10)
  }
  height = height;
  balance = balance;

  constructor() { }

  title(node: BinNode) {
    return `Height: ${node.height} balance: ${balance(node)}`
  }

}
