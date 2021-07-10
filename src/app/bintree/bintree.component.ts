import { Component, OnInit } from '@angular/core';
import { get, set } from 'idb-keyval';
import { Subject } from 'rxjs';
import { addNode, BinNode, createNode, dump, getNode, getRoot, getSorted, reBalance, reset, rotateLeft, rotateRight } from './BinNode';

@Component({
  selector: 'app-bintree',
  templateUrl: './bintree.component.html',
  styles: [
  ]
})
export class BintreeComponent implements OnInit {
  root = new Subject<BinNode>();
  nodes = getSorted()
  dump = dump;

  constructor() { }

  ngOnInit() { this.reset() }
  async reset() {
    reset();
    const [first, ...rest] = [0, 1, 2, 4, 3, 5, 6];
    // const [first, ...rest] = await getData()
    const root = createNode(first);
    rest.forEach(int => addNode(createNode(int), root))
    setTimeout(() => this.root.next(root), 20)
    this.nodes=getSorted()
  }

  rl(node = getRoot()) {
    rotateLeft(node)
    setTimeout(() => {
      this.root.next({ ...getRoot() })

    }, 10);
  }
  rr(node = getRoot()) {
    rotateRight(node)
    setTimeout(() => {

      this.root.next({ ...getRoot() })
    }, 10);
  }
  rb() {
    // reBalance();
    this.reset()
    this.root.next({ ...getRoot() })
  }

}

/** this is a playground to build a binary tree from scratch */
const randomInt = () => Math.floor(Math.random() * 100)
const randomArr = (count) => [...new Set(Array.from({ length: count }, () => randomInt()))]
async function getData(): Promise<number[]> {
  let data = await get('binTreeSampleData')
  if (!data) {
    data = randomArr(20);
    set('binTreeSampleData', data);
  }

  return data
}


