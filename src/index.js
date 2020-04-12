import { testSumUpTo } from './algorithms/sumUpTo'
import { testReverseString } from './algorithms/reverseString'
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

//#region Basic Patterns

// testSumUpTo()
// testReverseString()
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

let theList = new SingleLinkedList()

console.log('\nlog all nodes')
console.log('-------------')
console.log(theList.toArray())

console.log('\npush 4 nodes')
console.log('-------------')
theList.push(11)
theList.push(15)
theList.push(19)
theList.push(24)

console.log('\nlog all nodes')
console.log('-------------')
console.log(theList.toArray())

console.log('\nreverse all nodes')
console.log('-------------')
console.log(theList.reverse())

console.log('\nlog all nodes')
console.log('-------------')
console.log(theList.toArray())

console.log('\nget by index')
console.log('-------------')
console.log('0 => ', theList.get(0).value)
console.log('1 => ', theList.get(1).value)
console.log('2 => ', theList.get(2).value)
console.log('3 => ', theList.get(3).value)
console.log('4 => ', theList.get(4))

console.log('\nset 100 on index 1')
console.log('-------------')
console.log(theList.set(100, 1))

console.log('\ninsert 122 on index 2')
console.log('-------------')
console.log(theList.insert(2, 122))

console.log('\nlog all nodes')
console.log('-------------')
console.log(theList.toArray())

console.log('\nfindNthNodeFromEnd 4')
console.log('----------------------')
console.log(theList.findNthNodeFromEnd(4))

console.log('\nfindNthNodeFromEnd 3')
console.log('----------------------')
console.log(theList.findNthNodeFromEnd(3))

console.log('\nindexOf 30')
console.log('-------------')
console.log(theList.indexOf(30))

console.log('\nindexOf 122')
console.log('-------------')
console.log(theList.indexOf(122))

console.log('\nremove at index 3')
console.log('-------------')
console.log(theList.remove(3))

console.log('\nlog all nodes')
console.log('-------------')
console.log(theList.toArray())

console.log('\nfind 2 nodes [15 - 100]')
console.log('------------------------')
console.log(theList.findNode(15))
console.log(theList.findNode(100))

console.log('\ncontains 2 nodes [15 - 100]')
console.log('------------------------')
console.log(theList.contains(15))
console.log(theList.contains(100))

console.log('\nremove last node')
console.log('-------------')
console.log(theList.pop())

console.log('\nremove first node')
console.log('-------------')
console.log(theList.shift())

console.log('\nlog all nodes')
console.log('-------------')
console.log(theList.toArray())

console.log('\nremove last node')
console.log('-------------')
console.log(theList.pop())

console.log('\nremove first node')
console.log('-------------')
console.log(theList.shift())

console.log('\nlog all nodes when List is Empty')
console.log('-------------')
console.log(theList.toArray())

console.log('\nremove last node when List is Empty')
console.log('-------------')
console.log(theList.pop())

console.log('\nremove first node when List is Empty')
console.log('-------------')
console.log(theList.shift())

console.log('\nunShift add to the start 2 times')
console.log('-------------')
theList.unShift(44)
theList.unShift(27)

console.log('\nlog all nodes when List is Empty')
console.log('-------------')
console.log(theList.toArray())

//#endregion
