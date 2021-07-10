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
  const newParent = getNode(node.right);
  /** when there is no right child, we are done */
  if (newParent === undefined) { return node; }
  console.log(node.value, getNode(node.left)?.value, newParent.value);
  newParent.parentId = grandParent?.id;
  if (grandParent !== undefined) {
    grandParent.right = newParent.id;
  }
  const left = getNode(newParent.left);
  newParent.left = node.id;
  node.parentId = newParent.id;
  if (left !== undefined) {
    node.right = left.id;
    left.parentId = node.id;
  } else {
    node.right = undefined
  }
  console.log(newParent.value, getNode(newParent.left)?.value, getNode(newParent.right)?.value);
  return newParent
}

export const getSorted = () => [...nodes.values()].sort((a, b) => a.value < b.value ? -1 : 1);

export function rotateRight(node = getRoot()) {
  const grandParent = getNode(node.parentId);
  const newParent = getNode(node.left);
  if (newParent === undefined) { return node; }
  newParent.parentId = grandParent?.id;
  if (grandParent !== undefined) {
    grandParent.left = newParent.id;
  }
  const right = getNode(newParent.right);
  newParent.right = node.id;
  node.parentId = newParent.id;
  if (right !== undefined) {
    node.left = right.id;
    right.parentId = node.id;
  } else {
    node.left = undefined
  }
  return newParent
}

export function height(node: BinNode) {
  return undefined;
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

export function reBalance(node = getRoot()) {
  const nodeBalance = balance(node);
  console.log('balance', nodeBalance)
  if (nodeBalance < -1) {
    rotateLeft(node);
    height(getRoot());
    reBalance()
  }
  if (nodeBalance > 1) {
    rotateRight(node);
    height(getRoot());
    reBalance()
  }
}

