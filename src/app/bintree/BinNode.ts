
export class BinNode {
  left: BinNode | undefined;
  right: BinNode | undefined;
  get height() {
    const r = this.right ? (this.right.height || 0) + 1 : 0;
    const l = this.left ? (this.left?.height || 0) + 1 : 0;
    return Math.max(r, l);
  }
  get balance() {
    const r = this.right?.height || 0;
    const l = this.left?.height || 0;
    return r - l;
  }
  constructor(public parent: BinNode | undefined, public value: any) { }
  clone() {
    const clone = new BinNode(this.parent, this.value);
    clone.left = this.left ? this.left.clone() : undefined;
    clone.right = this.right ? this.right.clone() : undefined;
    return clone;
  }

  rotateLeft() {
    const newLeft = new BinNode(this, this.value);
    if (this.left) {
      newLeft.left = this.left;
    }
    if (this.right.left) {
      newLeft.right = new BinNode(newLeft, this.right.left.value)
    }
    this.left = newLeft;

    this.value = this.right.value;
    this.right = this.right.right;
    dump('this', this)
    dump('left', this.left)
    dump('right', this.right)
    return this;
  }

}


export function dump(t:string,node: BinNode) {
  console.log(`${t} node ${node.value} L(${node.left?.value}) R(${node.right?.value})`)
}
