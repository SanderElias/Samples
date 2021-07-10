import { getSupportedCodeFixes } from 'typescript';
import { help } from 'yargs';

const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const createId = () => Date.now().toString(36) + '-' + randomChar() + randomChar() + randomChar();

export type BinNodeId = string;

export interface BinNode {
  id: BinNodeId;
  parentId: BinNodeId | undefined;
  value: number | string;
  left?: BinNodeId;
  right?: BinNodeId;
  height?: number;
  balance?: number;
  time?: number;
}

const nodes = new Map<BinNodeId, BinNode>();
let rootId: BinNodeId;

export const createNode = (value: number | string, parentId?: BinNodeId, left?: BinNodeId, right?: BinNodeId): BinNode => {
  const newNode = {
    id: createId(),
    parentId,
    value,
    left,
    right,
  }
  nodes.set(newNode.id, newNode);
  return newNode;
};

export const getNode = (id: BinNodeId): BinNode => nodes.get(id);
export const set = (node: BinNode): Map<BinNodeId, BinNode> => nodes.set(node.id, node);
export const getRoot = () => [...nodes.values()].find(n => n.parentId === undefined);
export const reset = () => { nodes.clear(); rootId = undefined; };

export function addNode(node: BinNode, parent = getRoot()) {
  if (parent === undefined) {
    rootId = node.id;
    return node;
  }
  if (node.value < parent.value) {
    if (parent.left === undefined) {
      parent.left = node.id;
      node.parentId = parent.id;
      return node;
    } else {
      return addNode(node, getNode(parent.left));
    }
  }
  if (node.value > parent.value) {
    if (parent.right === undefined) {
      parent.right = node.id;
      node.parentId = parent.id;
      return node;
    } else { return addNode(node, getNode(parent.right)); }
  }
  if (node.value === parent.value) {
    throw new Error('Duplicate value');
  }
}

export function dump() {
  console.table([...nodes.values()]
    .sort((a, b) => a.value < b.value ? -1 : 1)
    .map(n => ({ ...n, leftVal: getNode(n.left)?.value, cur: n.value, rightVal: getNode(n.right)?.value }))
  )
}

export function rotateLeft(node = getRoot()) {
  const grandParent = getNode(node.parentId);
  const replaceNode = getNode(node.right);
  /** when there is no right child, we are done */
  if (replaceNode === undefined) { return node; }
  replaceNode.parentId = grandParent?.id;
  if (grandParent !== undefined) {
    if (grandParent.left === node.id) {
      grandParent.left = replaceNode.id;
    } else {
      grandParent.right = replaceNode.id;
    }
  }
  const left = getNode(replaceNode.left);
  replaceNode.left = node.id;
  node.parentId = replaceNode.id;
  if (left !== undefined) {
    node.right = left.id;
    left.parentId = node.id;
  } else {
    node.right = undefined
  }
  // console.table([grandParent,newParent,node,left])

  return replaceNode
}

export const getSorted = () => [...nodes.values()].sort((a, b) => a.value < b.value ? -1 : 1);

export function rotateRight(node = getRoot()) {
  const grandParent = getNode(node.parentId);
  const replaceNode = getNode(node.left);
  /** when there is no left child, we are done */
  if (replaceNode === undefined) { return node; }
  replaceNode.parentId = grandParent?.id;
  if (grandParent !== undefined) {
    if (grandParent.left === node.id) {
      grandParent.left = replaceNode.id;
    } else {
      grandParent.right = replaceNode.id;
    }
  }
  const right = getNode(replaceNode.right);
  replaceNode.right = node.id;
  node.parentId = replaceNode.id;
  if (right !== undefined) {
    node.left = right.id;
    right.parentId = node.id;
  } else {
    node.left = undefined
  }
  // console.table([grandParent,newParent,node,right])
  return replaceNode
}

export function height(node: BinNode) {
  // return undefined;
  if (node === undefined) { return 0; }
  node.height = Math.max(height(getNode(node.left)), height(getNode(node.right))) + 1;
  return node.height;
}

export function balance(node: BinNode) {
  if (node === undefined) { return 0; }
  const getChildHeight = (childId: BinNodeId) => getNode(childId)?.height || 0;
  node.balance = getChildHeight(node.left) - getChildHeight(node.right);
  return node.balance;
}

export function reBalance() {
  balanceNode()
  while (true) {
    const n = [...nodes.values()].find(n => Math.abs(balance(n)) > 1)
    console.log(nodes.size,n);
    if (n === undefined) { break; }
    balanceNode(n);
  }
}

export function balanceNode(node = getRoot()) {
  if (node === undefined) { return; }
  const nodeBalance = balance(node);
  if (nodeBalance < -1) {
    const right = getNode(node.right);
    if (right && balance(right) > 0) {
      rotateRight(right);
    }
    const r = rotateLeft(node);
    height(getRoot());
    return balanceNode(r);
  }
  if (nodeBalance > 1) {
    const left = getNode(node.left);
    if (left && left.balance < 0) {
      rotateLeft(left);
    }
    const r = rotateRight(node);
    height(getRoot());
    return balanceNode(r);
  }
  const balanceIfNeeded = (n) => {
    const b = balance(n);
    if (Math.abs(n?.balance) > 1) { balanceNode(n); }
  }
  balanceIfNeeded(getNode(node.left));
  balanceIfNeeded(getNode(node.right));
}

