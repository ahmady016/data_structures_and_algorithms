
export class MaxBinaryHeap {

  constructor() {
    this.items = []
  }

  get empty() {
    return this.items.length === 0
  }

  _getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  _bubbleUp() {
    let childIndex = this.items.length - 1,
        childItem, parentIndex, parentItem

    while(childIndex > 0) {
      parentIndex = this._getParentIndex(childIndex)
      childItem = this.items[childIndex],
      parentItem = this.items[parentIndex]

      if(childItem <= parentItem) break

      this.items[parentIndex] = childItem
      this.items[childIndex] = parentItem
      childIndex = parentIndex
    }
  }

  insert(value) {
    this.items.push(value)
    this._bubbleUp()
    return this.items.length
  }

  _leftChildIndex(index) {
    return index * 2 + 1
  }

  _rightChildIndex(index) {
    return index * 2 + 2
  }

  _leftChildItem(index) {
    let leftIndex = this._leftChildIndex(index)

    return (leftIndex < this.items.length)
      ? this.items[leftIndex]
      : undefined
  }

  _rightChildItem(index) {
    let rightIndex = this._rightChildIndex(index)

    return (rightIndex < this.items.length)
      ? this.items[rightIndex]
      : undefined
  }

  _isValidParent(index) {
    let leftItem = this._leftChildItem(index),
        rightItem = this._rightChildItem(index)

    if(!leftItem) return true

    if(!rightItem) return this.items[index] >= leftItem

    return this.items[index] >= leftItem && this.items[index] >= rightItem
  }

  _largeChildIndex(index) {
    let leftItem = this._leftChildItem(index),
        rightItem = this._rightChildItem(index)

    if(!leftItem) return index

    if(!rightItem) return this._leftChildIndex(index)

    return (leftItem > rightItem)
      ? this._leftChildIndex(index)
      : this._rightChildIndex(index)
  }

  _swap(firstIndex, secondIndex) {
    let temp = this.items[firstIndex]
    this.items[firstIndex] = this.items[secondIndex]
    this.items[secondIndex] = temp
  }

  _sinkDown() {
    let index = 0, largeChildIndex = 0
    while(index < this.items.length && !this._isValidParent(index)) {
      largeChildIndex = this._largeChildIndex(index)
      this._swap(index, largeChildIndex)
      index = largeChildIndex
    }
  }

  _sinkDown2() {
    let index = 0, indexToSwap, leftIndex, rightIndex,
        currentItem, leftItem, rightItem

    while(true) {
      leftIndex = this._leftChildIndex(index)
      rightIndex = this._rightChildIndex(index)
      indexToSwap = -1
      currentItem = this.items[index]
      leftItem = this._leftChildItem(index)
      rightItem = this._rightChildItem(index)

      if(leftItem > currentItem)
        indexToSwap = leftIndex

      if(rightItem > currentItem && rightItem > leftItem)
        indexToSwap = rightIndex

      if(indexToSwap === -1) break

      this.items[index] = this.items[indexToSwap]
      this.items[indexToSwap] = currentItem
      index = indexToSwap
    }
  }

  remove() {
    if(this.empty) return undefined

    const root = this.items[0],
          last = this.items.pop()

    if(!this.empty) {
      this.items[0] = last
      // this.sinkDown()
      this._sinkDown2()
    }

    return root
  }

  toArray() {
    return this.items
  }

}

// MaxBinaryHeap Application Sort array
export function sort(arr, dir = 'descending') {
  let heap = new MaxBinaryHeap()
  for (let value of arr)
    heap.insert(value)

  switch (dir) {
    case 'descending':
      for (let i = 0; i < arr.length; i++)
        arr[i] = heap.remove()
      break
    case 'ascending':
      for (let i = arr.length-1; i >= 0; i--)
        arr[i] = heap.remove()
      break
    default:
      break
  }

  return arr
}

// Heapify an array => transform it to MaxBinaryHeap
export function heapify(arr) {
  const _doHeapify = (arr, index) => {
    let largeIndex = index,
        leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2,
        len = arr.length,
        currentItem = arr[index]

    if(leftIndex < len && arr[leftIndex] > arr[largeIndex])
      largeIndex = leftIndex

    if(rightIndex < len && arr[rightIndex] > arr[largeIndex])
      largeIndex = rightIndex

    if(index === largeIndex) return;

    arr[index] = arr[largeIndex]
    arr[largeIndex] = currentItem

    _doHeapify(arr, largeIndex)
  }

  let lastParentIndex = Math.floor(arr.length / 2) - 1
  for (let i = lastParentIndex; i >= 0; i--)
    _doHeapify(arr, i)

  return arr
}

// get (kth, nth) largest value in array
export function getNthLargest(arr, nth) {
  if(nth < 1 || nth > arr.length) return undefined

  let heap = new MaxBinaryHeap()
  for (let value of arr)
    heap.insert(value)

  for (let i = 0; i < nth - 1; i++)
    heap.remove()

  return heap.remove()
}

// Implement a PriorityQueue using MinBinaryHeap [More efficient on insert]
class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

export class PriorityQueueHeap {

  constructor() {
    this.items = []
  }

  get empty() {
    return this.items.length === 0
  }

  _getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  _bubbleUp() {
    let childIndex = this.items.length - 1, parentIndex, childItem, parentItem

    while(childIndex > 0) {
      parentIndex = this._getParentIndex(childIndex)
      childItem = this.items[childIndex],
      parentItem = this.items[parentIndex]

      if(childItem.priority >= parentItem.priority) break

      this.items[parentIndex] = childItem
      this.items[childIndex] = parentItem
      childIndex = parentIndex
    }
  }

  enqueue({ value, priority }) {
    this.items.push(new Node(value, priority))
    this._bubbleUp()
    return this.items.length
  }

  _leftChildIndex(index) {
    return index * 2 + 1
  }

  _rightChildIndex(index) {
    return index * 2 + 2
  }

  _leftChildItem(index) {
    let leftIndex = this._leftChildIndex(index)

    return (leftIndex < this.items.length)
      ? this.items[leftIndex]
      : undefined
  }

  _rightChildItem(index) {
    let rightIndex = this._rightChildIndex(index)

    return (rightIndex < this.items.length)
      ? this.items[rightIndex]
      : undefined
  }

  _sinkDown() {
    let index = 0, indexToSwap, leftIndex, rightIndex,
        currentItem, leftItem, rightItem

    while(true) {
      leftIndex = this._leftChildIndex(index)
      rightIndex = this._rightChildIndex(index)
      indexToSwap = -1
      currentItem = this.items[index]
      leftItem = this._leftChildItem(index)
      rightItem = this._rightChildItem(index)

      if(leftItem?.priority < currentItem?.priority)
        indexToSwap = leftIndex

      if( rightItem?.priority < currentItem?.priority &&
          rightItem?.priority < leftItem?.priority
        )
        indexToSwap = rightIndex

      if(indexToSwap === -1) break

      this.items[index] = this.items[indexToSwap]
      this.items[indexToSwap] = currentItem
      index = indexToSwap
    }
  }

  dequeue() {
    if(this.empty) return undefined

    const root = this.items[0],
          last = this.items.pop()

    if(!this.empty) {
      this.items[0] = last
      this._sinkDown()
    }

    return root
  }

  toArray() {
    return this.items
  }

}
