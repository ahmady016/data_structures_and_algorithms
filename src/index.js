import { testSumUpTo } from './algorithms/sumUpTo'
import { testMissingNumbers } from './algorithms/missingNumbers'
import { testReverseString } from './algorithms/reverseString'
import { testPalindromeString } from './algorithms/isPalindrome'
import { testCharCount } from './algorithms/charCount'

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

//#region Basic Patterns

// testSumUpTo()
// testMissingNumbers()
// testReverseString()
// testPalindromeString()
// testCharCount()

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
