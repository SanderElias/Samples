

interface linkedListNode<T> {
  value: T;
  next?: linkedListNode<T>;
  prev?: linkedListNode<T>;
  [Symbol.iterator]: any
}

class LinkedList<T> {
  head?: linkedListNode<T>;
  tail?: linkedListNode<T>;
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }
  add(value: T) {
    const node = { value } as linkedListNode<T>;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { done: false, value };
        }
        return { done: true, value: undefined };
      }
    };
  }
}

function createNode<T>(value: T): linkedListNode<T> {
  const node = { value } as linkedListNode<T>
  node[Symbol.iterator] = function* () {
    yield node.value
    if (node.next) { yield* node.next }
  }
  return node
}

const list = createNode(1)
list.next = createNode(2)
list.next.next = createNode(3)

console.log([...list])
