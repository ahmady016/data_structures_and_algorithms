import { testSumUpTo } from './algorithms/sumUpTo'
import { testMissingNumbers } from './algorithms/missingNumbers'
import { testChunks } from './algorithms/toChunks'
import { testReverseString } from './algorithms/reverseString'
import { testPalindromeString } from './algorithms/isPalindrome'
import { testCharCount } from './algorithms/charCount'
import { testRepeatedCharacter } from './algorithms/firstRepeatedOrNonRepeatedCharacter'

import { testSameLists } from './algorithms/sameLists'
import { testAnagramString } from './algorithms/isAnagram'

import { testSumZeroPair } from './algorithms/sumZeroPair'
import { testCountUniqueValues } from './algorithms/countUniqueValues'

import { testMaxSliceSum } from './algorithms/maxSliceSum'

import { testSumDownFrom } from './algorithms/sumDownFrom'
import { testFactorial } from './algorithms/factorial'
import { testFibonacciNumbers } from './algorithms/fibonacciSequence'
import { testCollectOdds } from './algorithms/collectOddValues'

import { testSearch } from './algorithms/search'
import { testSubStringSearch } from './algorithms/subStringSearch'

import { testSort } from './algorithms/sort'

import { SingleLinkedList } from './dataStructures/SingleLinkedList'
import { DoubleLinkedList } from './dataStructures/DoubleLinkedList'

import { Stack, reverseString, isBalancedString } from './dataStructures/Stack'

import {
	Queue,
	ArrayQueue,
	TwoStacksQueue,
	PriorityQueue,
	ArrayPriorityQueue,
	reverseQueue,
} from './dataStructures/Queue'

import { ArrayHashTable } from './dataStructures/ArrayHashTable'
import { HashTable } from './dataStructures/HashTable'

import { BinarySearchTree } from './dataStructures/BinarySearchTree'
import { AVLTree } from './dataStructures/AVLTree'

import {
	MaxBinaryHeap,
	sort,
	PriorityQueueHeap,
	heapify,
	getNthLargest,
} from './dataStructures/MaxBinaryHeap'

import { Trie } from './dataStructures/Trie'

import {
	SimpleGraph,
	ComplexGraph,
	DirectedGraph,
	ComplexWeightedGraph,
	SimpleWeightedGraph
} from './dataStructures/Graph'

//#region Basic Patterns

// testSumUpTo()
// testMissingNumbers()
// testChunks()
// testReverseString()
// testPalindromeString()
// testCharCount()
// testRepeatedCharacter()

//#endregion

//#region Frequency Counter Pattern

// testSameLists()
// testAnagramString()

//#endregion

//#region Multiple Pointer [to avoid using nested loops]

// testSumZeroPair()
// testCountUniqueValues()

//#endregion

//#region Sliding Window

// testMaxSliceSum()

//#endregion

//#region Recursion

// testSumDownFrom()
// testFactorial()
// testFibonacciNumbers()
// testCollectOdds()

//#endregion

//#region Searching

testSearch()
// testSubStringSearch()

//#endregion

//#region Searching

// testSort()

//#endregion

//#region SingleLinkedList

// let theList = new SingleLinkedList()

// console.log('\nlog all nodes')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\npush 4 nodes')
// console.log('-------------')
// theList.push(11)
// theList.push(15)
// theList.push(19)
// theList.push(24)

// console.log('\nlog all nodes')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\nreverse all nodes')
// console.log('-------------')
// console.log(theList.reverse())

// console.log('\nlog all nodes')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\nget by index')
// console.log('-------------')
// console.log('0 => ', theList.get(0).value)
// console.log('1 => ', theList.get(1).value)
// console.log('2 => ', theList.get(2).value)
// console.log('3 => ', theList.get(3).value)
// console.log('4 => ', theList.get(4))

// console.log('\nset 100 on index 1')
// console.log('-------------')
// console.log(theList.set(100, 1))

// console.log('\ninsert 122 on index 2')
// console.log('-------------')
// console.log(theList.insert(2, 122))

// console.log('\nlog all nodes')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\nfindNthNodeFromEnd 4')
// console.log('----------------------')
// console.log(theList.findNthNodeFromEnd(4))

// console.log('\nfindNthNodeFromEnd 3')
// console.log('----------------------')
// console.log(theList.findNthNodeFromEnd(3))

// console.log('\nindexOf 30')
// console.log('-------------')
// console.log(theList.indexOf(30))

// console.log('\nindexOf 122')
// console.log('-------------')
// console.log(theList.indexOf(122))

// console.log('\nremove at index 3')
// console.log('-------------')
// console.log(theList.remove(3))

// console.log('\nlog all nodes')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\nfind 2 nodes [15 - 100]')
// console.log('------------------------')
// console.log(theList.findNode(15))
// console.log(theList.findNode(100))

// console.log('\ncontains 2 nodes [15 - 100]')
// console.log('------------------------')
// console.log(theList.contains(15))
// console.log(theList.contains(100))

// console.log('\nremove last node')
// console.log('-------------')
// console.log(theList.pop())

// console.log('\nremove first node')
// console.log('-------------')
// console.log(theList.shift())

// console.log('\nlog all nodes')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\nremove last node')
// console.log('-------------')
// console.log(theList.pop())

// console.log('\nremove first node')
// console.log('-------------')
// console.log(theList.shift())

// console.log('\nlog all nodes when List is Empty')
// console.log('-------------')
// console.log(theList.toArray())

// console.log('\nremove last node when List is Empty')
// console.log('-------------')
// console.log(theList.pop())

// console.log('\nremove first node when List is Empty')
// console.log('-------------')
// console.log(theList.shift())

// console.log('\nunShift add to the start 2 times')
// console.log('-------------')
// theList.unShift(44)
// theList.unShift(27)

// console.log('\nlog all nodes when List is Empty')
// console.log('-------------')
// console.log(theList.toArray())

//#endregion

//#region DoubleLinkedList

// let dList = new DoubleLinkedList()

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('push 5 nodes')
// console.log('-------------')
// dList.push(11)
// dList.push(14)
// dList.push(17)
// dList.push(19)
// console.log(dList.push(22))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('remove last node 6 times')
// console.log('-------------')
// console.log(dList.pop())
// console.log(dList.pop())
// console.log(dList.pop())
// console.log(dList.pop())
// console.log(dList.pop())
// console.log(dList.pop())

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('add to start 5 times')
// console.log('-------------')
// dList.unShift(12)
// dList.unShift(14)
// dList.unShift(16)
// dList.unShift(18)
// console.log(dList.unShift(19))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('get at indexes [3,5]')
// console.log('-------------')
// console.log(dList.get(3))
// console.log(dList.get(5))

// console.log('-------------')
// console.log('set at indexes [3,5]')
// console.log('-------------')
// console.log(dList.set(27, 3))
// console.log(dList.set(33, 5))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('insert at indexes [3,5]')
// console.log('-------------')
// console.log(dList.insert(3, 49))
// console.log(dList.insert(5, 77))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('remove at indexes [2,4]')
// console.log('-------------')
// console.log(dList.remove(2))
// console.log(dList.remove(4))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

// console.log('-------------')
// console.log('get indexOf [2,27]')
// console.log('-------------')
// console.log(dList.indexOf(2))
// console.log(dList.indexOf(27))

// console.log('-------------')
// console.log('check contains [19,10]')
// console.log('-------------')
// console.log(dList.contains(19))
// console.log(dList.contains(10))

// console.log('-------------')
// console.log('find nodes [19,10]')
// console.log('-------------')
// console.log(dList.findNode(19))
// console.log(dList.findNode(10))

// console.log('-------------')
// console.log('reverse all nodes')
// console.log('-------------')
// console.log(dList.reverse())

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(dList.toArray())

//#endregion

//#region Stack
// let stack = new Stack()

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(stack.toArray())

// console.log('-------------')
// console.log('push 5 nodes')
// console.log('-------------')
// console.log(stack.push(11))
// console.log(stack.push(12))
// console.log(stack.push(14))
// console.log(stack.push(16))
// console.log(stack.push(19))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(stack.toArray())

// console.log('-------------')
// console.log('pop 6 times')
// console.log('-------------')
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(stack.toArray())

// console.log('-------------')
// console.log('reverse string')
// console.log('-------------')
// let str1 = 'Ahmed Hamdy Ali Khaled'
// console.log('The String ======>', str1)
// console.log('reversed String =>', reverseString(str1))

// console.log('-------------')
// console.log('isBalancedString')
// console.log('-------------')
// let str2 = '(Ahmed) [Hamdy] {Ali} <Khaled>'
// console.log('The String ======>', str2)
// console.log('Balanced String =>', isBalancedString(str2))

// let str3 = '(<Ahmed [Hamdy] {Ali} <Khaled>)'
// console.log('The String ======>', str3)
// console.log('Balanced String =>', isBalancedString(str3))
//#endregion

//#region Queue
// let queue = new Queue()

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(queue.toArray())

// console.log('-------------')
// console.log('enqueue 5 nodes')
// console.log('-------------')
// console.log(queue.enqueue(11))
// console.log(queue.enqueue(12))
// console.log(queue.enqueue(14))
// console.log(queue.enqueue(16))
// console.log(queue.enqueue(19))

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(queue.toArray())

// console.log('-------------')
// console.log('dequeue 6 times')
// console.log('-------------')
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())

// console.log('-------------')
// console.log('log all nodes')
// console.log('-------------')
// console.log(queue.toArray())

// console.log('-------------')
// console.log('reverse Queue')
// console.log('-------------')
// let queue2 = new Queue(11,16,19,21,24)
// console.log('The Queue ======>', queue2.toArray())
// console.log('reversed Queue =>', reverseQueue(queue2).toArray())

// let arrayQueue = new ArrayQueue(10)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(arrayQueue.enqueue(11))
// console.log(arrayQueue.enqueue(12))
// console.log(arrayQueue.enqueue(14))
// console.log(arrayQueue.enqueue(16))
// console.log(arrayQueue.enqueue(19))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue.toArray())

// console.log('-------------')
// console.log('poll 6 times')
// console.log('-------------')
// console.log(arrayQueue.dequeue())
// console.log(arrayQueue.dequeue())
// console.log(arrayQueue.dequeue())
// console.log(arrayQueue.dequeue())
// console.log(arrayQueue.dequeue())
// console.log(arrayQueue.dequeue())

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue.toArray())

// let arrayQueue2 = new ArrayQueue(5)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue2.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(arrayQueue2.enqueue(11))
// console.log(arrayQueue2.enqueue(22))
// console.log(arrayQueue2.enqueue(33))
// console.log(arrayQueue2.enqueue(44))
// console.log(arrayQueue2.enqueue(55))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue2.toArray())

// console.log('-------------')
// console.log('poll 2 items')
// console.log('-------------')
// console.log(arrayQueue2.dequeue())
// console.log(arrayQueue2.dequeue())

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue2.toArray())

// console.log('-------------')
// console.log('add 2 items')
// console.log('-------------')
// console.log(arrayQueue2.enqueue(66))
// console.log(arrayQueue2.enqueue(77))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayQueue2.toArray())

// try {
//   console.log('-------------')
//   console.log('add 1 items')
//   console.log('-------------')
//   console.log(arrayQueue2.enqueue(88))
// } catch(error) {
//   console.log(error.message)
// }

// let twoStacksQueue = new TwoStacksQueue(1,1,2,3,5)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(twoStacksQueue.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(twoStacksQueue.enqueue(8))
// console.log(twoStacksQueue.enqueue(13))
// console.log(twoStacksQueue.enqueue(21))
// console.log(twoStacksQueue.enqueue(34))
// console.log(twoStacksQueue.enqueue(55))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(twoStacksQueue.toArray())

// console.log('-------------')
// console.log('poll 2 items')
// console.log('-------------')
// console.log(twoStacksQueue.dequeue())
// console.log(twoStacksQueue.dequeue())

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(twoStacksQueue.toArray())

// console.log('-------------')
// console.log('add 2 items')
// console.log('-------------')
// console.log(twoStacksQueue.enqueue(66))
// console.log(twoStacksQueue.enqueue(77))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(twoStacksQueue.toArray())

// let priorityQueue = new PriorityQueue(22,27,5,19,7)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(priorityQueue.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(priorityQueue.enqueue(88))
// console.log(priorityQueue.enqueue(13))
// console.log(priorityQueue.enqueue(33))
// console.log(priorityQueue.enqueue(24))
// console.log(priorityQueue.enqueue(55))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(priorityQueue.toArray())

// console.log('-------------')
// console.log('poll 2 items')
// console.log('-------------')
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(priorityQueue.toArray())

// console.log('-------------')
// console.log('add 2 items')
// console.log('-------------')
// console.log(priorityQueue.enqueue(66))
// console.log(priorityQueue.enqueue(49))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(priorityQueue.toArray())

// let arrayPriorityQueue = new ArrayPriorityQueue(22,27,5,19,7)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayPriorityQueue.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(arrayPriorityQueue.enqueue(88))
// console.log(arrayPriorityQueue.enqueue(13))
// console.log(arrayPriorityQueue.enqueue(33))
// console.log(arrayPriorityQueue.enqueue(24))
// console.log(arrayPriorityQueue.enqueue(55))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayPriorityQueue.toArray())

// console.log('-------------')
// console.log('poll 2 items')
// console.log('-------------')
// console.log(arrayPriorityQueue.dequeue())
// console.log(arrayPriorityQueue.dequeue())

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayPriorityQueue.toArray())

// console.log('-------------')
// console.log('add 2 items')
// console.log('-------------')
// console.log(arrayPriorityQueue.enqueue(29))
// console.log(arrayPriorityQueue.enqueue(31))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayPriorityQueue.toArray())

//#endregion

//#region HashTable

// let arrayHashTable = new ArrayHashTable(50)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayHashTable.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(arrayHashTable.set('Black' ,'#000000'))
// console.log(arrayHashTable.set('Maroon' ,'#800000'))
// console.log(arrayHashTable.set('Green' ,'#008000'))
// console.log(arrayHashTable.set('Gray' ,'#808080'))
// console.log(arrayHashTable.set('Yellow' ,'#FFFF00'))
// console.log(arrayHashTable.set('Yellow' ,'#FFFF00'))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(arrayHashTable.toArray())

// console.log('-------------')
// console.log('get 2 items')
// console.log('-------------')
// console.log('Green ==>', arrayHashTable.get('Green'))
// console.log('Yellow =>', arrayHashTable.get('Yellow'))

// console.log('-------------')
// console.log('has 2 items')
// console.log('-------------')
// console.log('Green ==>', arrayHashTable.has('Maroon'))
// console.log('Yellow =>', arrayHashTable.has('Gray'))

// console.log('-------------')
// console.log('remove 2 items')
// console.log('-------------')
// console.log('Maroon ==>', arrayHashTable.remove('Maroon'))
// console.log('Gray =>', arrayHashTable.remove('Gray'))

// console.log('-------------')
// console.group('log all items')
// console.log('-------------')
// console.log(arrayHashTable.toArray())
// console.groupEnd('log all items')

// console.log('-------------')
// console.group('log all keys')
// console.log('-------------')
// arrayHashTable.keys.forEach(console.log)
// console.groupEnd('log all keys')

// console.log('-------------')
// console.group('log all values')
// console.log('-------------')
// arrayHashTable.values.forEach(console.log)
// console.groupEnd('log all values')

// let hashTable = new HashTable(50)

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(hashTable.toArray())

// console.log('-------------')
// console.log('add 5 items')
// console.log('-------------')
// console.log(hashTable.put('Black' ,'#000000'))
// console.log(hashTable.put('Maroon' ,'#800000'))
// console.log(hashTable.put('Green' ,'#008000'))
// console.log(hashTable.put('Gray' ,'#808080'))
// console.log(hashTable.put('Yellow' ,'#FFFF00'))
// console.log(hashTable.put('Yellow' ,'#FFFF00'))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(hashTable.toArray())

// console.log('-------------')
// console.log('get 2 items')
// console.log('-------------')
// console.log('Green ==>', hashTable.get('Green'))
// console.log('Yellow =>', hashTable.get('Yellow'))

// console.log('-------------')
// console.log('has 2 items')
// console.log('-------------')
// console.log('Green ==>', hashTable.has('Maroon'))
// console.log('Yellow =>', hashTable.has('Gray'))

// console.log('-------------')
// console.log('remove 2 items')
// console.log('-------------')
// console.log('Maroon ==>', hashTable.remove('Maroon'))
// console.log('Gray ====>', hashTable.remove('Gray'))

// console.log('-------------')
// console.log('log all items')
// console.log('-------------')
// console.log(hashTable.toArray())

// console.log('-------------')
// console.group('log all keys')
// console.log('-------------')
// hashTable.keys.forEach(console.log)

// console.log('-------------')
// console.group('log all values')
// console.log('-------------')
// hashTable.values.forEach(console.log)

//#endregion

//#region BinarySearchTree

// let tree1 = new BinarySearchTree()

// console.log('-------------')
// console.log('add 7 items to tree1')
// console.log('-------------')
// console.log(tree1.insert(7))
// console.log(tree1.insert(4))
// console.log(tree1.insert(9))
// console.log(tree1.insert(1))
// console.log(tree1.insert(6))
// console.log(tree1.insert(8))
// console.log(tree1.insert(10))

// console.log('-------------')
// console.log('log has [10, 11]')
// console.log('-------------')
// console.log(tree1.has(10))
// console.log(tree1.has(11))

// console.log('-------------')
// console.log('log find [7, 11]')
// console.log('-------------')
// console.log(tree1.find(7))
// console.log(tree1.find(11))

// console.log('-------------')
// console.log('log tree1 all items BFT')
// console.log('-------------')
// console.log(tree1.toArray('BFT'))

// console.log('-------------')
// console.log('log tree1 all items DFTInOrder ')
// console.log('-------------')
// console.log(tree1.toArray('DFTInOrder'))

// console.log('-------------')
// console.log('log tree1 all items DFTPreOrder')
// console.log('-------------')
// console.log(tree1.toArray('DFTPreOrder'))

// console.log('-------------')
// console.log('log tree1 all items DFTPostOrder')
// console.log('-------------')
// console.log(tree1.toArray('DFTPostOrder'))

// console.log('-------------')
// console.log('log height of [7, 9, 10]')
// console.log('-------------')
// console.log(tree1.height(tree1.root))
// console.log(tree1.height(tree1.find(9)))
// console.log(tree1.height(tree1.find(10)))

// console.log('-------------')
// console.log('log minValue of tree')
// console.log('-------------')
// console.log(tree1.minValue())

// console.log('-------------')
// console.log('log maxValue of tree')
// console.log('-------------')
// console.log(tree1.maxValue())

// console.log('-------------')
// console.log('log (min, max) of tree')
// console.log('-------------')
// console.log(tree1.min())
// console.log(tree1.max())

// let tree2 = new BinarySearchTree()

// console.log('-------------')
// console.log('add 7 items to tree2')
// console.log('-------------')
// console.log(tree2.insert(7))
// console.log(tree2.insert(4))
// console.log(tree2.insert(9))
// console.log(tree2.insert(1))
// console.log(tree2.insert(6))
// console.log(tree2.insert(8))
// console.log(tree2.insert(10))

// console.log('-------------')
// console.log('log tree2 all items DFTInOrder ')
// console.log('-------------')
// console.log(tree2.toArray('DFTInOrder'))

// console.log('-------------------------')
// console.log('log equality of (tree1, tree2)')
// console.log('-------------------------')
// console.log(BinarySearchTree.equals(tree1.root, tree2.root))

// let tree3 = new BinarySearchTree()

// console.log('-------------')
// console.log('add 7 items to tree3')
// console.log('-------------')
// console.log(tree3.insert(10))
// console.log(tree3.insert(7))
// console.log(tree3.insert(5))
// console.log(tree3.insert(9))
// console.log(tree3.insert(17))
// console.log(tree3.insert(12))
// console.log(tree3.insert(19))

// console.log('-------------')
// console.log('log tree3 all items DFTInOrder ')
// console.log('-------------')
// console.log(tree3.toArray('DFTInOrder'))

// console.log('-------------------------')
// console.log('log equality of (tree2, tree3)')
// console.log('-------------------------')
// console.log(BinarySearchTree.equals(tree2.root, tree3.root))

// // swap the left, right to make it not valid BST
// let temp = tree3.root.left
// tree3.root.left = tree3.root.right
// tree3.root.right = temp

// console.log('-------------------------')
// console.log('log isValidBST of (tree1, tree2, tree3)')
// console.log('-------------------------')
// console.log(tree1.isValidBST(tree1.root, Number.MIN_VALUE, Number.MAX_VALUE))
// console.log(tree2.isValidBST(tree2.root, Number.MIN_VALUE, Number.MAX_VALUE))
// console.log(tree3.isValidBST(tree3.root, Number.MIN_VALUE, Number.MAX_VALUE))

// console.log('-------------')
// console.log('log nodesAtDistance(0)')
// console.log('-------------')
// console.log(tree1.getNodesAtDistance(0))

// console.log('-------------')
// console.log('log nodesAtDistance(1)')
// console.log('-------------')
// console.log(tree1.getNodesAtDistance(1))

// console.log('-------------')
// console.log('log nodesAtDistance(2)')
// console.log('-------------')
// console.log(tree1.getNodesAtDistance(2))

// console.log('-------------')
// console.log('log nodesAtDistance(3)')
// console.log('-------------')
// console.log(tree1.getNodesAtDistance(3))


// console.log('-------------')
// console.log('log levelOrderTraverse')
// console.log('-------------')
// console.log(tree1.LevelOrderTraverse())

//#endregion

//#region AVLTree

// let avlTree1 = new AVLTree()

// console.log('-------------')
// console.log('add 7 items to avlTree1')
// console.log('-------------')
// console.log(avlTree1.insert(7))
// console.log(avlTree1.insert(4))
// console.log(avlTree1.insert(9))
// console.log(avlTree1.insert(1))
// console.log(avlTree1.insert(6))
// console.log(avlTree1.insert(8))
// console.log(avlTree1.insert(10))

// console.log('-------------')
// console.log('log avlTree1 all values [LevelOrder]')
// console.log('-------------')
// console.log(avlTree1.toArray().map(node => node.value))

// console.log('-------------')
// console.log('log avlTree1 all nodes [LevelOrder]')
// console.log('-------------')
// console.log(avlTree1.toArray().map(({ value, height, balance }) => ({ value, height, balance })))

// let avlTree2 = new AVLTree()

// console.log('-------------')
// console.log('add 4 items to avlTree1')
// console.log('-------------')
// console.log(avlTree2.insert(30))
// console.log(avlTree2.insert(20))
// console.log(avlTree2.insert(10))
// console.log(avlTree2.insert(5))

// console.log('-------------')
// console.log('log avlTree2 all values [LevelOrder]')
// console.log('-------------')
// console.log(avlTree2.toArray())

// console.log('-------------')
// console.log('log avlTree2 all values [LevelOrder]')
// console.log('-------------')
// console.log(avlTree2.toArray().map(node => node.value))

// console.log('-------------')
// console.log('log avlTree2 all nodes [LevelOrder]')
// console.log('-------------')
// console.log(avlTree2.toArray().map(({ value, height, balance }) => ({ value, height, balance })))

//#endregion

//#region BinaryHeap

//#region MaxBinaryHeap

// let maxHeap1 = new MaxBinaryHeap()

// console.log('-------------')
// console.log('add 7 items to maxHeap')
// console.log('-------------')
// console.log(maxHeap1.insert(10))
// console.log(maxHeap1.insert(5))
// console.log(maxHeap1.insert(17))
// console.log(maxHeap1.insert(4))
// console.log(maxHeap1.insert(22))
// console.log(maxHeap1.insert(11))
// console.log(maxHeap1.insert(29))

// console.log('-------------')
// console.log('log maxHeap1 values')
// console.log('-------------')
// console.log(maxHeap1.toArray())

// console.log('-------------')
// console.log('remove first item')
// console.log('-------------')
// console.log(maxHeap1.remove())

// console.log('-------------')
// console.log('log maxHeap1 values')
// console.log('-------------')
// console.log(maxHeap1.toArray())

// console.log('-------------')
// console.log('test sort an array')
// console.log('-------------')
// console.log('arr ==========>', [22,11,43,19,7,64,33])
// console.log('ascending ====>', sort([22,11,43,19,7,64,33], 'ascending'))
// console.log('descending ===>', sort([22,11,43,19,7,64,33], 'descending'))

// console.log('-------------')
// console.log('test heapify an array')
// console.log('-------------')
// console.log('arr ==========>', [5,11,22,19,7,43,79])
// console.log('heapified ====>', heapify([5,11,22,19,7,43,79]))

// console.log('-------------')
// console.log('test getNthLargest of an array')
// console.log('-------------')
// let arr = [5, 11, 22, 19, 7, 43, 79, 99, 87, 3]
// console.log('arr ==========>', arr)
// console.log('nth = 0 ====>', getNthLargest(arr, 0))
// console.log('nth = 1 ====>', getNthLargest(arr, 1))
// console.log('nth = 3 ====>', getNthLargest(arr, 3))
// console.log('nth = 5 ====>', getNthLargest(arr, 5))
// console.log('nth = 7 ====>', getNthLargest(arr, 7))
// console.log('nth = 9 ====>', getNthLargest(arr, 9))
// console.log('nth = 11 ====>', getNthLargest(arr, 11))

//#endregion

//#region PriorityQueue using MinBinaryHeap

// let emergencyQueue = new PriorityQueueHeap()

// console.log('-------------')
// console.log('add 7 items to emergencyQueue')
// console.log('-------------')
// console.log(emergencyQueue.enqueue({ value: 'common cold', priority: 7 }))
// console.log(emergencyQueue.enqueue({ value: 'high fever', priority: 5 }))
// console.log(emergencyQueue.enqueue({ value: 'glass wound', priority: 6 }))
// console.log(emergencyQueue.enqueue({ value: 'gunshot wound', priority: 1 }))
// console.log(emergencyQueue.enqueue({ value: 'Knife wound', priority: 3 }))
// console.log(emergencyQueue.enqueue({ value: 'broken arm', priority: 4 }))
// console.log(emergencyQueue.enqueue({ value: 'car accident', priority: 2 }))

// console.log('-------------')
// console.log('log emergencyQueue values')
// console.log('-------------')
// console.log(emergencyQueue.toArray())

// console.log('-------------------------')
// console.log('get items by its priority')
// console.log('-------------------------')
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())
// console.log(emergencyQueue.dequeue())

//#endregion

//#endregion

//#region Trie

// let trie = new Trie()

// console.log('-------------')
// console.log('add 9 words to trie')
// console.log('-------------')
// console.log('cat ======>', trie.insert('cat')			)
// console.log('can ======>', trie.insert('can')			)
// console.log('car ======>', trie.insert('car')			)
// console.log('carpet ===>', trie.insert('carpet')	)
// console.log('cannon ===>', trie.insert('cannon')	)
// console.log('canyon ===>', trie.insert('canyon')	)
// console.log('catch ====>', trie.insert('catch')		)
// console.log('captain ==>', trie.insert('captain')	)
// console.log('cable ====>', trie.insert('cable')		)

// console.log('-------------')
// console.log('log contains 4 words')
// console.log('-------------')
// console.log('cat ======>', trie.contains('cat')			)
// console.log('cascade ==>', trie.contains('cascade')	)
// console.log('can ======>', trie.contains('can')			)
// console.log('cabab ====>', trie.contains('cabab')		)

// console.log('-------------')
// console.log('log contains 2 words')
// console.log('-------------')
// console.log('carpet ====>', trie.contains('carpet')	)
// console.log('canyon ====>', trie.contains('canyon')	)
// console.log('charCount =>', trie.charCount					)

// console.log('-------------')
// console.log('test findAllWordsOf 5 prefix')
// console.log('-------------')
// console.log('ca =====>', trie.findAllWordsOf('ca')		)
// console.log('can ====>', trie.findAllWordsOf('can')		)
// console.log('car ====>', trie.findAllWordsOf('car')		)
// console.log('cat ====>', trie.findAllWordsOf('cat')		)
// console.log('card ===>', trie.findAllWordsOf('card')	)
// console.log('null ===>', trie.findAllWordsOf()				)

// console.log('-------------')
// console.log('test remove 2 words')
// console.log('-------------')
// console.log('carpet ==>', trie.remove('carpet')	)
// console.log('canyon ==>', trie.remove('canyon')	)

// console.log('-------------')
// console.log('log contains 2 words')
// console.log('-------------')
// console.log('carpet ====>', trie.contains('carpet')	)
// console.log('canyon ====>', trie.contains('canyon')	)
// console.log('car =======>', trie.contains('car')		)
// console.log('can =======>', trie.contains('can')		)
// console.log('charCount =>', trie.charCount					)

// console.log('-------------')
// console.log('test trie traverse')
// console.log('-------------')
// console.log('preOrder ===>', trie.traverse('preOrder')	)
// console.log('postOrder ==>', trie.traverse('postOrder')	)

//#endregion

//#region Graph

// let graph1 = new SimpleGraph()

// console.log('-------------')
// console.log('add 5 cities to graph')
// console.log('-------------')
// console.log('Cairo ==>', graph1.addVertex('Cairo')	)
// console.log('Alex ===>', graph1.addVertex('Alex')	)
// console.log('Asyut ==>', graph1.addVertex('Asyut')	)
// console.log('Giza ===>', graph1.addVertex('Giza')	)
// console.log('Aswan ==>', graph1.addVertex('Aswan')	)

// console.log('-------------')
// console.log('log graph vertexes')
// console.log('-------------')
// console.log('graphVertex =>', graph1)
// console.log('vertexCount =>', graph1.vertexCount)

// console.log('-------------')
// console.log('add 6 edges to graph')
// console.log('-------------')
// console.log('Cairo => Alex ====>', graph1.addEdge('Cairo', 'Alex')		)
// console.log('Cairo => Asyut ===>', graph1.addEdge('Cairo', 'Asyut')	)
// console.log('Aswan => Cairo ===>', graph1.addEdge('Aswan', 'Cairo')	)
// console.log('Aswan => Alex ====>', graph1.addEdge('Aswan', 'Alex')		)
// console.log('Giza ==> Aswan ===>', graph1.addEdge('Giza', 'Aswan')		)
// console.log('Giza ==> Asyut ===>', graph1.addEdge('Giza', 'Asyut')		)

// console.log('-------------')
// console.log('log graph vertexes')
// console.log('-------------')
// console.log('graphVertex =>', graph1)
// console.log('vertexCount =>', graph1.vertexCount)

// console.log('-------------')
// console.log('log graph [Depth First Traverse]')
// console.log('-------------')
// console.log('start from Cairo [recursiveDFT] =>', graph1.recursiveDFT('Cairo'))
// console.log('start from Giza [recursiveDFT] ==>', graph1.recursiveDFT('Giza')	)

// console.log('start from Cairo [iterativeDFT] =>', graph1.iterativeDFT('Cairo'))
// console.log('start from Giza [iterativeDFT] ==>', graph1.iterativeDFT('Giza')	)

// console.log('-------------')
// console.log('log graph [Breadth First Traverse]')
// console.log('-------------')
// console.log('start from Cairo [iterativeBFT] =>', graph1.iterativeBFT('Cairo'))
// console.log('start from Giza [iterativeBFT] ==>', graph1.iterativeBFT('Giza'))

// console.log('-------------')
// console.log('remove vertex from graph')
// console.log('-------------')
// console.log('Aswan ==>', graph1.removeVertex('Aswan'))

// console.log('-------------')
// console.log('log graph vertexes')
// console.log('-------------')
// console.log('graphVertex =>', graph1)
// console.log('vertexCount =>', graph1.vertexCount)

// let graph2 = new ComplexGraph()

// console.log('-------------')
// console.log('add 5 cities (nodes) to graph')
// console.log('-------------')
// console.log('Cairo ==>', graph2.addNode('Cairo')	)
// console.log('Alex ===>', graph2.addNode('Alex')	)
// console.log('Asyut ==>', graph2.addNode('Asyut')	)
// console.log('Giza ===>', graph2.addNode('Giza')	)
// console.log('Aswan ==>', graph2.addNode('Aswan')	)

// console.log('-------------')
// console.log('log graph nodes')
// console.log('-------------')
// console.log('graphNods =>', graph2.toString())
// console.log('nodesCount =>', graph2.nodesCount)

// console.log('-------------')
// console.log('add 6 edges to graph')
// console.log('-------------')
// console.log('Cairo => Alex ====>', graph2.addEdge('Cairo', 'Alex')		)
// console.log('Cairo => Asyut ===>', graph2.addEdge('Cairo', 'Asyut')	)
// console.log('Aswan => Cairo ===>', graph2.addEdge('Aswan', 'Cairo')	)
// console.log('Aswan => Alex ====>', graph2.addEdge('Aswan', 'Alex')		)
// console.log('Giza ==> Aswan ===>', graph2.addEdge('Giza', 'Aswan')		)
// console.log('Giza ==> Asyut ===>', graph2.addEdge('Giza', 'Asyut')		)

// console.log('-------------')
// console.log('log graph nodes')
// console.log('-------------')
// console.log('graphNods =>', graph2.toString())
// console.log('nodesCount =>', graph2.nodesCount)

// console.log('-------------')
// console.log('log graph [Depth First Traverse]')
// console.log('-------------')
// console.log('start from Cairo [recursiveDFT] =>', graph2.recursiveDFT('Cairo'))
// console.log('start from Cairo [iterativeDFT] =>', graph2.iterativeDFT('Cairo'))

// console.log('start from Giza [recursiveDFT] ==>', graph2.recursiveDFT('Giza')	)
// console.log('start from Giza [iterativeDFT] ==>', graph2.iterativeDFT('Giza')	)

// console.log('-------------')
// console.log('log graph [Breadth First Traverse]')
// console.log('-------------')
// console.log('start from Cairo [iterativeBFT] =>', graph2.iterativeBFT('Cairo'))
// console.log('start from Giza [iterativeBFT] ==>', graph2.iterativeBFT('Giza'))

// console.log('-------------')
// console.log('remove node from graph')
// console.log('-------------')
// console.log('Aswan ==>', graph2.removeNode('Aswan'))

// console.log('-------------')
// console.log('log graph nodes')
// console.log('-------------')
// console.log('graphNods =>', graph2.toString())
// console.log('nodesCount =>', graph2.nodesCount)

// let graph3 = new DirectedGraph()

// console.log('-------------')
// console.log('add 5 nodes to graph')
// console.log('-------------')
// console.log('X ==>', graph3.addNode('X'))
// console.log('A ==>', graph3.addNode('A'))
// console.log('B ==>', graph3.addNode('B'))
// console.log('P ==>', graph3.addNode('P'))

// console.log('-------------')
// console.log('add 4 edges to graph')
// console.log('-------------')
// console.log('X => A', graph3.addEdge('X', 'A'))
// console.log('X => B', graph3.addEdge('X', 'B'))
// console.log('A => P', graph3.addEdge('A', 'P'))
// console.log('B => P', graph3.addEdge('B', 'P'))

// console.log('-------------')
// console.log('test topologicalSort on graph')
// console.log('-------------')
// console.log(graph3.topologicalSort())

// let graph4 = new DirectedGraph()

// console.log('-------------')
// console.log('add 3 nodes to graph')
// console.log('-------------')
// console.log('A ==>', graph4.addNode('A'))
// console.log('B ==>', graph4.addNode('B'))
// console.log('C ==>', graph4.addNode('C'))

// console.log('-------------')
// console.log('add 3 edges to graph')
// console.log('-------------')
// console.log('A => B', graph4.addEdge('A', 'B'))
// console.log('B => C', graph4.addEdge('B', 'C'))
// console.log('A => C', graph4.addEdge('A', 'C'))

// console.log('-------------')
// console.log('hasCycle =>', graph4.hasCycle())
// console.log('-------------')

// console.log('-------------')
// console.log('add (cycle) edge to graph')
// console.log('-------------')
// console.log('C => A', graph4.addEdge('C', 'A'))

// console.log('-------------')
// console.log('hasCycle =>', graph4.hasCycle())
// console.log('-------------')

// let simpleWeightedGraph = new SimpleWeightedGraph()

// console.log('--------------------')
// console.log('add 6 vertexes to graph')
// console.log('--------------------')
// console.log('A =>', simpleWeightedGraph.addVertex('A'))
// console.log('B =>', simpleWeightedGraph.addVertex('B'))
// console.log('C =>', simpleWeightedGraph.addVertex('C'))
// console.log('D =>', simpleWeightedGraph.addVertex('D'))
// console.log('E =>', simpleWeightedGraph.addVertex('E'))
// console.log('F =>', simpleWeightedGraph.addVertex('F'))

// console.log('-------------')
// console.log('add 8 edges to graph')
// console.log('-------------')
// console.log('A <==> B', simpleWeightedGraph.addEdge('A', 'B', 4))
// console.log('A <==> C', simpleWeightedGraph.addEdge('A', 'C', 2))
// console.log('B <==> E', simpleWeightedGraph.addEdge('B', 'E', 3))
// console.log('C <==> D', simpleWeightedGraph.addEdge('C', 'D', 2))
// console.log('C <==> F', simpleWeightedGraph.addEdge('C', 'F', 4))
// console.log('D <==> E', simpleWeightedGraph.addEdge('D', 'E', 3))
// console.log('D <==> F', simpleWeightedGraph.addEdge('D', 'F', 1))
// console.log('E <==> F', simpleWeightedGraph.addEdge('E', 'F', 1))

// console.log('--------------------------')
// console.log('log graph nodes')
// console.log('--------------------------')
// console.log('graphNods ==>', simpleWeightedGraph.toString())
// console.log('nodesCount =>', simpleWeightedGraph.count)

// console.log('--------------------------')
// console.log('test shortest Path')
// console.log('--------------------------')
// console.log('A => E', simpleWeightedGraph.shortestPathBetween('A','E'))
// console.log('A => F', simpleWeightedGraph.shortestPathBetween('A','F'))
// console.log('A => D', simpleWeightedGraph.shortestPathBetween('A','D'))

// let complexWeightedGraph = new ComplexWeightedGraph()

// console.log('-------------')
// console.log('add 3 nodes to graph')
// console.log('-------------')
// console.log('Cairo ====>', complexWeightedGraph.addNode('Cairo')		)
// console.log('Giza =====>', complexWeightedGraph.addNode('Giza')		)
// console.log('Benisuef =>', complexWeightedGraph.addNode('Benisuef'))

// console.log('-------------')
// console.log('add 2 edges to graph')
// console.log('-------------')
// console.log('Cairo => Giza =====>', complexWeightedGraph.addEdge('Cairo', 'Giza', 90)			)
// console.log('Cairo => Benisuef =>', complexWeightedGraph.addEdge('Cairo', 'Benisuef', 140)	)

// console.log('--------------------------')
// console.log('log graph nodes')
// console.log('--------------------------')
// console.log('graphNods ==>', complexWeightedGraph.toString())
// console.log('nodesCount =>', complexWeightedGraph.nodesCount)

// let complexWeightedGraph2 = new ComplexWeightedGraph()

// console.log('--------------------')
// console.log('add 6 vertexes to graph')
// console.log('--------------------')
// console.log('A =>', complexWeightedGraph2.addNode('A'))
// console.log('B =>', complexWeightedGraph2.addNode('B'))
// console.log('C =>', complexWeightedGraph2.addNode('C'))
// console.log('D =>', complexWeightedGraph2.addNode('D'))
// console.log('E =>', complexWeightedGraph2.addNode('E'))
// console.log('F =>', complexWeightedGraph2.addNode('F'))

// console.log('-------------')
// console.log('add 8 edges to graph')
// console.log('-------------')
// console.log('A <==> B', complexWeightedGraph2.addEdge('A', 'B', 4))
// console.log('A <==> C', complexWeightedGraph2.addEdge('A', 'C', 2))
// console.log('B <==> E', complexWeightedGraph2.addEdge('B', 'E', 3))
// console.log('C <==> D', complexWeightedGraph2.addEdge('C', 'D', 2))
// console.log('C <==> F', complexWeightedGraph2.addEdge('C', 'F', 4))
// console.log('D <==> E', complexWeightedGraph2.addEdge('D', 'E', 3))
// console.log('D <==> F', complexWeightedGraph2.addEdge('D', 'F', 1))
// console.log('E <==> F', complexWeightedGraph2.addEdge('E', 'F', 1))

// console.log('--------------------------')
// console.log('log graph nodes')
// console.log('--------------------------')
// console.log('graphNods ==>', complexWeightedGraph2.toString())
// console.log('nodesCount =>', complexWeightedGraph2.nodesCount)

// console.log('--------------------------')
// console.log('test shortest Path')
// console.log('--------------------------')
// try {
// 	console.log('A => E', complexWeightedGraph2.getShortestPathBetween('A','E'))
// 	console.log('A => F', complexWeightedGraph2.getShortestPathBetween('A','F'))
// 	console.log('A => D', complexWeightedGraph2.getShortestPathBetween('A','D'))

// 	console.log('A => H', complexWeightedGraph2.getShortestPathBetween('X','E'))
// 	console.log('F => P', complexWeightedGraph2.getShortestPathBetween('F','P'))
// } catch (error) {
//   console.log("error =>", error.message)
// }

// let complexWeightedGraph3 = new ComplexWeightedGraph()

// console.log('-------------')
// console.log('add 3 nodes to graph')
// console.log('-------------')
// console.log('A ==>', complexWeightedGraph3.addNode('A'))
// console.log('B ==>', complexWeightedGraph3.addNode('B'))
// console.log('C ==>', complexWeightedGraph3.addNode('C'))

// console.log('-------------')
// console.log('add 2 edges to graph')
// console.log('-------------')
// console.log('A => B', complexWeightedGraph3.addEdge('A', 'B'))
// console.log('B => C', complexWeightedGraph3.addEdge('B', 'C'))

// console.log('-------------')
// console.log('hasCycle =>', complexWeightedGraph3.hasCycle())
// console.log('-------------')

// console.log('-------------')
// console.log('add (cycle) edge to graph')
// console.log('-------------')
// console.log('C => A', complexWeightedGraph3.addEdge('C', 'A'))

// console.log('-------------')
// console.log('hasCycle =>', complexWeightedGraph3.hasCycle())
// console.log('-------------')

// let complexWeightedGraph4 = new ComplexWeightedGraph()

// console.log('-------------')
// console.log('add 4 nodes to graph')
// console.log('-------------')
// console.log('A ==>', complexWeightedGraph4.addNode('A'))
// console.log('B ==>', complexWeightedGraph4.addNode('B'))
// console.log('C ==>', complexWeightedGraph4.addNode('C'))
// console.log('D ==>', complexWeightedGraph4.addNode('D'))

// console.log('-------------')
// console.log('add 5 edges to graph')
// console.log('-------------')
// console.log('A => B', complexWeightedGraph4.addEdge('A', 'B', 3))
// console.log('B => D', complexWeightedGraph4.addEdge('B', 'D', 4))
// console.log('C => D', complexWeightedGraph4.addEdge('C', 'D', 5))
// console.log('A => C', complexWeightedGraph4.addEdge('A', 'C', 1))
// console.log('B => C', complexWeightedGraph4.addEdge('B', 'C', 2))

// console.log('--------------------------')
// console.log('log graph nodes')
// console.log('--------------------------')
// console.log('graphNods ==>', complexWeightedGraph4.toString())
// console.log('nodesCount =>', complexWeightedGraph4.nodesCount)

// console.log('--------------------------')
// console.log('log MinSpanningTree nodes')
// console.log('--------------------------')
// let tree = complexWeightedGraph4.getMinSpanningTree()
// console.log('graphNods ==>', tree.toString())
// console.log('nodesCount =>', tree.nodesCount)

//#endregion
