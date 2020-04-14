class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// LIFO [Last In First Out]
export class Stack {

  constructor(...values) {
    this.first = null
    this.last = null
    this.size = 0
    if(values) {
      for (let value of values)
        this.push(value)
    }
  }

  get empty() {
    return this.size === 0
  }

  push(value) {
    let newNode = new Node(value)

    if(this.empty)
      this.first = this.last = newNode
    else {
      newNode.next = this.first
      this.first = newNode
    }

    return ++this.size
  }

  pop() {
    if(this.empty) return null

    let removedNode = this.first

    if(this.size === 1)
      this.first = this.last = null
    else
      this.first = removedNode.next

    this.size--
    return removedNode.value
  }

  peek() {
    if(this.empty) return null
    return this.first
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

export function reverseString(str) {
  let stack = new Stack(),
      result = ''

  for (let char of [...str])
    stack.push(char)

  while(!stack.empty)
    result += stack.pop()

  return result
}

let openingChars = ['(', '[', '{', '<'],
    closingChars = [')', ']', '}', '>']
function matchingPair(opening, closing) {
  return openingChars.indexOf(opening) === closingChars.indexOf(closing)
}

export function isBalancedString(str) {
  let stack = new Stack()

  for (let char of [...str]) {
    if(openingChars.includes(char))
      stack.push(char)

    if(closingChars.includes(char)) {
      if(stack.empty) return false
      if(!matchingPair(stack.pop(), char)) return false
    }
  }

  return stack.empty
}
