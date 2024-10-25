import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { balance, BinNode, getNode, height } from '../BinNode';

@Component({
    selector: 'b-node',
    templateUrl: './b-node.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BNodeComponent]
})
export class BNodeComponent {
  bNode = input<BinNode | undefined | null>(undefined);
  $left = computed(() => {
    const left = getNode(this.bNode()?.left);
    return left && { ...left, time: Date.now() };
  });
  $right = computed(() => {
    const right = getNode(this.bNode()?.right);
    return right && { ...right, time: Date.now() };
  });
  height = height;
  balance = balance;

  constructor() {}

  title(node: BinNode) {
    return `Height: ${node.height} balance: ${balance(node)}`;
  }
}
