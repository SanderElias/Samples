import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { get, set } from 'idb-keyval';
import { Subject } from 'rxjs';
import { addNode, BinNode, createNode, dump, getRoot, getSorted, height, reBalance, reset, rotateLeft, rotateRight } from './BinNode';

@Component({
  selector: 'app-bintree',
  templateUrl: './bintree.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BintreeComponent implements OnInit {
  count = 31;
  root$ = new Subject<BinNode>();
  nodes = getSorted()
  dump = () => {
    dump();
    this.refresh();
  }

  constructor() { }

  ngOnInit() { this.reset() }
  async reset() {
    reset();
    // const [first, ...rest] = Array.from({length:this.count}, (_, i) => (this.count*2)-(i*2));
    // const [first, ...rest] = [4,3,1,2,5,6,7]
    const [first, ...rest] = await getData()
    const root = createNode(first);
    rest.forEach(int => addNode(createNode(int), root))
    height(root);
    setTimeout(() => this.root$.next(root), 20)
    this.nodes = getSorted()
  }

  deb: any = null;
  refresh() {
    if (this.deb) {
      clearTimeout(this.deb);
    }
    this.deb = setTimeout(() => {
      this.root$.next({ ...getRoot(), time: Date.now() })
    }, 0);
    height(getRoot())

  }

  rl(node = getRoot()) {
    rotateLeft(node)
    this.refresh();
  }
  rr(node = getRoot()) {
    rotateRight(node)
    this.refresh();
  }
  rb(node = getRoot()) {
    reBalance();
    // this.reset()
    this.refresh();
  }

}

/** this is a playground to build a binary tree from scratch */
const randomInt = () => Math.floor(Math.random() * 2000)
const randomArr = (count) => [...new Set(Array.from({ length: count }, () => randomInt()))]
async function getData(): Promise<number[]> {
  let data = undefined// await get('binTreeSampleData')
  if (!data) {
    data = randomArr(100);
    set('binTreeSampleData', data);
  }

  return data
}


