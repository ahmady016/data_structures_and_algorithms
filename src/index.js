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

// testSearch()
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

//#region BinarySearchTree

let avlTree1 = new AVLTree()

console.log('-------------')
console.log('add 7 items to avlTree1')
console.log('-------------')
console.log(avlTree1.insert(7))
console.log(avlTree1.insert(4))
console.log(avlTree1.insert(9))
console.log(avlTree1.insert(1))
console.log(avlTree1.insert(6))
console.log(avlTree1.insert(8))
console.log(avlTree1.insert(10))

console.log('-------------')
console.log('log avlTree1 all values [LevelOrder]')
console.log('-------------')
console.log(avlTree1.toArray().map(node => node.value))

console.log('-------------')
console.log('log avlTree1 all nodes [LevelOrder]')
console.log('-------------')
console.log(avlTree1.toArray().map(({ value, height, balance }) => ({ value, height, balance })))

let avlTree2 = new AVLTree()

console.log('-------------')
console.log('add 4 items to avlTree1')
console.log('-------------')
console.log(avlTree2.insert(30))
console.log(avlTree2.insert(20))
console.log(avlTree2.insert(10))
console.log(avlTree2.insert(5))

console.log('-------------')
console.log('log avlTree2 all values [LevelOrder]')
console.log('-------------')
console.log(avlTree2.toArray())

console.log('-------------')
console.log('log avlTree2 all values [LevelOrder]')
console.log('-------------')
console.log(avlTree2.toArray().map(node => node.value))

console.log('-------------')
console.log('log avlTree2 all nodes [LevelOrder]')
console.log('-------------')
console.log(avlTree2.toArray().map(({ value, height, balance }) => ({ value, height, balance })))

//#endregion
