
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class SingleLinkedList {

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // return the LinkedList empty status
  get isEmpty() {
    return this.length === 0
  }

  // add to end and return the LinkedList
  push(value) {
    let newNode = new Node(value)

    if(this.isEmpty)
      this.head = this.tail = newNode

    else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  // add to start and return LinkedList
  unShift(value) {
    let newNode = new Node(value)

    if(this.isEmpty)
      this.head = this.tail = newNode

    else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  // remove from start and return it
  shift() {
    if(this.isEmpty)
      return null

    let currentHead = this.head

    if(this.length === 1)
      this.tail = null

    this.head = currentHead.next
    this.length--

    return currentHead
  }

  // remove from end and return it
  pop() {
    if(this.isEmpty)
      return null

    let currentNode = this.head,
        newTail = this.head

    if(this.length === 1)
      this.head = this.tail = null

    else {
      while(currentNode.next) {
        newTail = currentNode
        currentNode = currentNode.next
      }
      this.tail = newTail
      this.tail.next = null
    }

    this.length--
    return currentNode
  }

  // get a node by index
  get(index) {
    if(index < 0 || index >= this.length)
      return null

    if(index === 0)
      return this.head
    if(index === this.length-1)
      return this.tail
    if(index === 1)
      return this.head.next

    let currentNode = this.head.next,
        counter = 1
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
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

  // add a node at index
  insert(index, value) {
    if(index < 0 || index >= this.length)
      return false

    if(index === 0) {
      this.unShift(value)
      return true
    }

    if(index === this.length) {
      this.push(value)
      return true
    }

    let newNode = new Node(value),
        prevNode = this.get(index-1)

    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
    return true
  }

  // remove a node from index
  remove(index) {
    if(index < 0 || index >= this.length)
      return false

    if(index === 0) return this.shift()

    if(index === this.length-1) return this.pop()

    let prevNode = this.get(index-1),
        removedNode = prevNode.next
    prevNode.next = removedNode.next

    this.length--
    return removedNode
  }

  // get the index of a node by value
  indexOf(value) {
    if(this.isEmpty)
      return -1

    if(this.head.value === value)
      return 0
    if(this.tail.value === value)
      return this.length-1

    let currentNode = this.head.next,
        index = 1
    while(currentNode) {
      if(currentNode.value === value) return index
      currentNode = currentNode.next
      index++
    }

    return -1
  }

  // get a node by value
  findNode(value) {
    if(this.isEmpty)
      return null

    if(this.head.value === value)
      return this.head

    if(this.tail.value === value)
      return this.tail

    let currentNode = this.head.next
    while(currentNode && currentNode.value !== value)
      currentNode = currentNode.next

    return currentNode
  }

  // return true/false if node value exists
  contains(value) {
    return !!this.findNode(value)
  }

  // reverse LinkedList order [all links directions reversed]
  reverse() {
    let previous = this.head,
        current = this.head.next,
        next

    while(current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.tail = this.head
    this.tail.next = null
    this.head = previous
    return this
  }

  // find nth node from the end [count 1 from end to start]
  findNthNodeFromEnd(nth) {
    if(this.isEmpty) return null

    if(nth === 1) return this.tail

    if(nth === this.length) return this.head

    let p1 = this.head,
        p2 = this.head

    for(let i = 0; i < nth - 1; i++)
      p2 = p2.next

    while(p2 !== this.tail) {
      p1 = p1.next
      p2 = p2.next
    }

    return p1
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
