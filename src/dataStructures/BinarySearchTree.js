class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  toString() {
    return `value = ${this.value}`
  }
}

export class BinarySearchTree {

  constructor() {
    this.root = null
    this.count = 0
  }

  static equals(first, second) {
    if(!first && !second) return true

    if(first && second)
      return (
        first.value === second.value
        && BinarySearchTree.equals(first.left, second.left)
        && BinarySearchTree.equals(first.right, second.right)
      )

    return false
  }

  get empty() {
    return this.root === null
  }

  insert(value) {
    let newNode = new Node(value)

    if(this.empty) {
      this.root = newNode
      return ++this.count
    }

    let currentNode = this.root
    while(true) {
      if(value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode
          return ++this.count
        }
        currentNode = currentNode.left
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode
          return ++this.count
        }
        currentNode = currentNode.right
      }
    }

  }

  find(value) {
    if(this.empty) return null

    let currentNode = this.root
    while(currentNode) {
      if(value < currentNode.value)
        currentNode = currentNode.left
      else if (value > currentNode.value)
        currentNode = currentNode.right
      else
        return currentNode
    }

    return null
  }

  has(value) {
    if(this.empty) return false

    let currentNode = this.root
    while(currentNode) {
      if(value < currentNode.value)
        currentNode = currentNode.left
      else if (value > currentNode.value)
        currentNode = currentNode.right
      else
        return true
    }

    return false
  }

  isLeaf(node) {
    return !node.left && !node.right
  }

  height(node) {
    if(this.empty || !node) return -1
    if(this.isLeaf(node)) return 0
    return 1 + Math.max(this.height(node.left), this.height(node.right))
  }
  // if BinaryTree Not (Binary Search Tree) O(n)
  minValue(node = this.root) {
    if(this.empty) return undefined

    if(this.isLeaf(node)) return node.value

    let left = this.minValue(node.left)
    let right = this.minValue(node.right)

    return Math.min(Math.min(left, right), node.value)
  }
  // if BinaryTree Not (Binary Search Tree) O(n)
  maxValue(node = this.root) {
    if(this.empty) return undefined

    if(this.isLeaf(node)) return node.value

    let left = this.maxValue(node.left)
    let right = this.maxValue(node.right)

    return Math.max(Math.max(left, right), node.value)
  }
  // For (Binary Search Tree) O(log n)
  min() {
    if(this.empty) return undefined

    let current = this.root,
        last = this.root
    while(current) {
      last = current
      current = current.left
    }

    return last.value
  }
  // For (Binary Search Tree) O(log n)
  max() {
    if(this.empty) return undefined

    let current = this.root,
        last = this.root
    while(current) {
      last = current
      current = current.right
    }

    return last.value
  }
  // validating BinarySearchTree
  isValidBST(node, min, max) {
    if(this.empty) return true
    if(!node) return true
    if(node.value < min || node.value > max) return false
    return (
      this.isValidBST(node.left, min, node.value - 1)
      && this.isValidBST(node.right, node.value + 1, max)
    )
  }
  // get all nodes at nth distance from root
  getNodesAtDistance(distance) {
    if(this.empty) return []

    let result = []

    const addNodeAtDistance = (node, distance) => {
      if(!node) return undefined
      if(distance === 0) return result.push(node.value)

      addNodeAtDistance(node.left, distance - 1)
      addNodeAtDistance(node.right, distance - 1)
    }
    addNodeAtDistance(this.root ,distance)

    return result
  }

  //#region Tree Traversing
  LevelOrderTraverse() {
    if(this.empty) return []

    let result = [],
        maxLen = this.height(this.root)

    for (let i = 0; i <= maxLen; i++)
      result.push(...this.getNodesAtDistance(i))

    return result
  }

  BFT() {
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

  DFTInOrder() {
    let result = []

    const traverse = node => {
      if(!node) return undefined
      traverse(node.left)
      result.push(node)
      traverse(node.right)
    }
    traverse(this.root)

    return result
  }

  DFTPreOrder() {
    let result = []

    const traverse = node => {
      if(!node) return undefined
      result.push(node)
      traverse(node.left)
      traverse(node.right)
    }
    traverse(this.root)

    return result
  }

  DFTPostOrder() {
    let result = []

    const traverse = node => {
      if(!node) return undefined
      traverse(node.left)
      traverse(node.right)
      result.push(node)
    }
    traverse(this.root)

    return result
  }
  //#endregion

  toArray(type = 'BFT') {
    switch (type) {
      case 'BFT':
        return this.BFT().map(node => node.value)
      case 'DFTInOrder':
        return this.DFTInOrder().map(node => node.value)
      case 'DFTPreOrder':
        return this.DFTPreOrder().map(node => node.value)
      case 'DFTPostOrder':
        return this.DFTPostOrder().map(node => node.value)
      default:
        return []
    }
  }

}
