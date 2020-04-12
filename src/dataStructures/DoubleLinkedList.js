
class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

export class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // return the LinkedList empty status
  get isEmpty() {
    return this.length === 0
  }

  // add the node to end and return the LinkedList
  push(value) {
    let newNode = new Node(value)

    if(this.isEmpty)
      this.head = this.tail = newNode
    else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  // add the node to start and return the LinkedList
  unShift(value) {
    let newNode = new Node(value)

    if(this.isEmpty)
      this.head = this.tail = newNode
    else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  // remove last node and return it
  pop() {
    if(this.isEmpty) return null

    let removedNode = this.tail

    if(this.length === 1)
      this.head = this.tail = null
    else {
      this.tail = removedNode.prev
      this.tail.next = null
      removedNode.prev = null
    }

    this.length--
    return removedNode
  }

  // remove first node and return it
  shift() {
    if(this.isEmpty)
      return null

    let removedNode = this.head

    if(this.length === 1)
      this.head = this.tail = null
    else {
      this.head = removedNode.next
      this.head.prev = null
      removedNode.next = null
    }

    this.length--
    return removedNode
  }

  // get a node by index
  get(index) {
    if(index < 0 || index >= this.length) return null

    if(index === 0) return this.head
    if(index === 1) return this.head.next
    if(index === this.length-1) return this.tail
    if(index === this.length-2) return this.tail.prev

    let middleIndex = Math.ceil(this.length / 2),
        currentNode,
        counter

    if(index <= middleIndex) {
      currentNode = this.head.next
      counter = 1
      while(counter !== index) {
        currentNode = currentNode.next
        counter++
      }
    } else {
      currentNode = this.tail.prev
      counter = this.length-2
      while(counter !== index) {
        currentNode = currentNode.prev
        counter--
      }
    }

    return currentNode
  }

  // set a node value by index
  set(value, index) {
    let foundNode = this.get(index)

    if(foundNode) {
      foundNode.value = value
      return true
    }

    return false
  }

  // add a node at index and return true/false
  insert(index, value) {
    if(index < 0 || index >= this.length) return false

    if(index === 0) !!this.unShift(value)

    if(index === this.length) !!this.push(value)

    let newNode = new Node(value),
        beforeNode = this.get(index-1),
        afterNode = beforeNode.next;

    beforeNode.next = afterNode.prev = newNode
    newNode.prev = beforeNode, newNode.next = afterNode;

    this.length++
    return true
  }

  // remove a node at index and return it/null
  remove(index) {
    if(index < 0 || index >= this.length) return null

    if(index === 0) this.shift(value)

    if(index === this.length-1) this.pop(value)

    let removedNode = this.get(index),
        beforeNode = removedNode.prev,
        afterNode = removedNode.next;

    beforeNode.next = afterNode, afterNode.prev = beforeNode;
    removedNode.next = removedNode.prev = null

    this.length--
    return removedNode
  }

  // get the index of a node by value
  indexOf(value) {
    if(this.isEmpty) return -1

    if(this.head.value === value) return 0
    if(this.head.next.value === value) return 1
    if(this.tail.value === value) return this.length-1
    if(this.tail.prev.value === value) return this.length-2

    let currentNode = this.head.next.next,
        index = 2;
    while(currentNode) {
      if(currentNode.value === value) return index
      currentNode = currentNode.next
      index++
    }

    return -1
  }

  // return true/false if node value exists
  contains(value) {
    return this.indexOf(value) !== -1
  }

  // get a node by value
  findNode(value) {
    if(this.isEmpty) return null

    if(this.head.value === value) return this.head
    if(this.head.next.value === value) return this.head.next
    if(this.tail.value === value) return this.tail
    if(this.tail.prev.value === value) return this.tail.prev

    let currentNode = this.head.next.next
    while(currentNode && currentNode.value !== value)
      currentNode = currentNode.next

    return currentNode
  }

  // reverse LinkedList order [all links directions reversed]
  reverse() {
    let previous = this.head,
        current = this.head.next,
        next

    while(current) {
      next = current.next
      current.prev = next
      current.next = previous
      previous = current
      current = next
    }

    this.tail = this.head
    this.tail.next = null
    this.head = previous
    this.head.prev = null
    return this
  }

  // convert the LinkedList to array
  toArray() {
    if(this.isEmpty)
      return []

    let list = [],
        currentNode = this.head

    while(currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }

    return list
  }

}
