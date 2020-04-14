import { Stack } from "./Stack"

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// FIFO [First In First Out]
export class Queue {

  constructor(...values) {
    this.first = null
    this.last = null
    this.size = 0
    if(values) {
      for (let value of values)
        this.enqueue(value)
    }
  }

  get empty() {
    return this.size === 0
  }

  peek() {
    if(this.empty) return null
    return this.first
  }

  enqueue(value) {
    let newNode = new Node(value)

    if(this.empty)
      this.first = this.last = newNode
    else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }

  dequeue() {
    if(this.empty) return null

    let removedNode = this.first

    if(this.size === 1)
      this.first = this.last = null
    else
      this.first = removedNode.next

    this.size--
    return removedNode.value
  }

  toArray() {
    if(this.empty) return []

    let list = [],
        currentNode = this.first

    while(currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }

    return list
  }

}

export function reverseQueue(queue) {
  let queueCopy = queue,
      stack = new Stack(),
      reversedQueue = new Queue()

  while(!queueCopy.empty)
    stack.push(queueCopy.dequeue())

  while(!stack.empty)
    reversedQueue.enqueue(stack.pop())

  return reversedQueue
}

// Implement Queue using [Fixed_Size] [Circular] [Array]
export class ArrayQueue {

  constructor(size) {
    this.front = 0
    this.end = 0
    this.count = 0

    this.size = size
    this.items = Array.from({ length: size }, () => 0)
  }

  get empty() {
    return this.count === 0
  }

  get full() {
    return this.count === this.size
  }

  enqueue(value) {
    if(this.full)
      throw new Error("can't add!, queue is full")

    this.items[this.end] = value
    this.end = (this.end + 1) % this.size
    return ++this.count
  }

  dequeue() {
    if(this.empty) return null

    let value = this.items[this.front]
    this.items[this.front] = 0
    this.front = (this.front + 1) % this.size
    this.count--
    return value
  }

  toArray() {
    return this.items
  }

}

// Implement Queue using [2 stacks]
export class TwoStacksQueue {

  constructor(...values) {
    this.addStack = new Stack()
    this.removeStack = new Stack()

    if(values) {
      for (let value of values)
        this.enqueue(value)
    }
  }

  moveAllFromAddStackToRemoveStack() {
    while (!this.addStack.empty)
      this.removeStack.push(this.addStack.pop())
  }

  get empty() {
    return this.addStack.empty && this.removeStack.empty
  }

  get size() {
    return this.addStack.size + this.removeStack.size
  }

  enqueue(value) {
    this.addStack.push(value)
    return this.size
  }

  dequeue() {
    if(this.empty) return null

    if(this.removeStack.empty) this.moveAllFromAddStackToRemoveStack()

    return this.removeStack.pop()
  }

  peek() {
    if(this.empty) return null

    if(this.removeStack.empty) this.moveAllFromAddStackToRemoveStack()

    return this.removeStack.peek()
  }

  toArray() {
    return [...this.removeStack.toArray(), ...this.addStack.toArray().reverse()]
  }

}
