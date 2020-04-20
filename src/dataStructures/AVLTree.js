class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 0
    this.balance = 0
  }
  toString() {
    return `value: ${this.value}, height: ${this.height}`
  }
}

export class AVLTree {

  constructor() {
    this.root = null
    this.count = 0
  }

  get empty() {
    return this.root === null
  }

  getHeightOf(node) {
    return node ? node.height : -1
  }

  calcHeightOf(node) {
    return Math.max(this.getHeightOf(node.left), this.getHeightOf(node.right)) + 1
  }

  calcBalanceFactorOf(node) {
    return node ? this.getHeightOf(node.left) - this.getHeightOf(node.right) : 0
  }

  isLeftHeavy(node) {
    return node.balance > 1
  }

  isRightHeavy(node) {
    return node.balance < -1
  }

  rotateLeft(node) {
    let newRoot = node.right

    node.right = newRoot.left
    newRoot.left = node

    newRoot.height = this.calcHeightOf(newRoot)
    node.height = this.calcHeightOf(node)

    newRoot.balance = this.calcBalanceFactorOf(newRoot)
    node.balance = this.calcBalanceFactorOf(node)

    return newRoot
  }

  rotateRight(node) {
    let newRoot = node.left

    node.left = newRoot.right
    newRoot.right = node

    newRoot.height = this.calcHeightOf(newRoot)
    node.height = this.calcHeightOf(node)

    newRoot.balance = this.calcBalanceFactorOf(newRoot)
    node.balance = this.calcBalanceFactorOf(node)

    return newRoot
  }

  doBalance(node) {
    if(this.isLeftHeavy(node)) {
      if(node.left.balance < 0)
        node.left = this.rotateLeft(node.left)
      return this.rotateRight(node)
    }
    else if(this.isRightHeavy(node)) {
      if(node.right.balance > 0)
        node.right = this.rotateRight(node.right)
      return this.rotateLeft(node)
    }
    return node
  }

  insert(value) {
    const insertHelper = (node, value) => {
      if(!node) return new Node(value)

      if(value < node.value)
        node.left = insertHelper(node.left, value)
      else
        node.right = insertHelper(node.right, value)

      node.height = this.calcHeightOf(node)
      node.balance = this.calcBalanceFactorOf(node)

      return this.doBalance(node)
    }
    this.root = insertHelper(this.root, value)

    return ++this.count
  }

  toArray() {
    let node = this.root,
        result = [],
        queue = [this.root]

    while(queue.length) {
      node = queue.shift()
      result.push(node)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }

    return result
  }

}
