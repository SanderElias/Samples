import { Component, OnInit } from '@angular/core';
import { get, set } from 'idb-keyval';
import { BinNode, dump } from './BinNode';

@Component({
  selector: 'app-bintree',
  templateUrl: './bintree.component.html',
  styles: [
  ]
})
export class BintreeComponent implements OnInit {
  root: BinNode
  data: BinNode[];

  constructor() { }

  async ngOnInit() {
    const [first, ...rest] = [0, 1, 2, 5, 4, 6, 7, 8, 9];//await getData()
    const root = this.root = addNode(undefined, first)
    rest.forEach(int => addNode(root, int))
    // while ((top.balance < -1 || top.balance > 1) && ++count < 1000) {
    //   top = balance(top)
    //   console.log('iter', top.value, top.balance, top.left?.balance, top.right?.balance)
    // }
    // this.data = flatBin(root)
  }

  rr() {
    this.root = this.root.rotateLeft()
  }

}

/** this is a playground to build a binary tree from scratch */
const randomInt = () => Math.floor(Math.random() * 100)
const randomArr = (count) => Array.from({ length: count }, () => randomInt())
async function getData(): Promise<number[]> {
  let data = await get('binTreeSampleData')
  if (!data) {
    data = randomArr(20);
    set('binTreeSampleData', data);
  }

  return data
}

function flatBin(node: BinNode | undefined, flat: BinNode[] = []) {
  if (node) {
    flat.push(node)
    flatBin(node.left, flat)
    flatBin(node.right, flat)
  }
  return flat
}

function addNode(startNode: BinNode, value: any) {
  if (!startNode) {
    return new BinNode(undefined, value)
  }
  if (value < startNode.value) {
    if (startNode.left === undefined) {
      startNode.left = new BinNode(startNode, value)
    } else {
      addNode(startNode.left, value)
    }
  }
  if (value > startNode.value) {
    if (startNode.right === undefined) {
      startNode.right = new BinNode(startNode, value)
    } else {
      addNode(startNode.right, value)
    }
  }

  return startNode
}


function rotateLeft(node: BinNode) {
  dump("", node)
  const tmpNode = node.left.clone();
  node.right = node.left.clone();
  dump("", tmpNode)
  return tmpNode
}

function rotateRight(node: BinNode) {
  const grandPartent = node.parent
  const left = node.left;
  node.left = node.right
  left.right = node
  node.parent = left;
  return left
}

function rotateRightLeft(node: BinNode) {
  node.right = rotateRight(node.right)
  return rotateLeft(node)
}

function rotateLeftRight(node: BinNode) {
  node.left = rotateLeft(node.left)
  return rotateRight(node)
}

function balance(node: BinNode) {
  if (node.balance < -1 && node.left.balance === -1) {
    return rotateRight(node)
  }
  if (node.balance > 1 && node.right.balance === 1) {
    return rotateLeft(node)
  }
  if (node.balance < -1 && node.left.balance === 1) {
    return rotateLeftRight(node)
  }
  if (node.balance > 1 && node.right.balance === -1) {
    return rotateRightLeft(node)
  }
  // if (node.balance < -2 ) {
  //   return balance(node.left)
  // }
  // if (node.balance > 2 ) {
  //   return balance(node.right)
  // }

  // case n.Bal() < -1 && n.Left.Bal() == 1:
  // return n.rotateLeftRight()
  // Right subtree is too high, and right child has a left child.
  // case n.Bal() > 1 && n.Right.Bal() == -1:
  // return n.rotateRightLeft()
  return node
}


