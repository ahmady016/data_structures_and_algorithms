import { comparePerformance, genIntList, genSortedIntList } from '../_helpers'

//#region 3 [Bubble - Selection - Insertion] Sort
// function takes integer array and return it after sorting
function bubbleSort(arr) {
  let swapped = false
  for (let i = arr.length - 1; i >= 0 ; i--) {
    swapped = false
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        swapped = true
      }
    }
    if(!swapped)
      break
  }
  return arr
}

function bubbleSort2(arr) {
  let sorted = true
  for (let i = 0; i < arr.length; i++) {
    sorted = true
    for (let j = 1; j < arr.length - i; j++) {
      if(arr[j-1] > arr[j]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        sorted = false
      }
    }
    if(sorted) break
  }
  return arr
}

function selectionSort(arr) {
  let len = arr.length,
      lowest = 0
  for (let i = 0; i < len; i++) {
    lowest = i
    for (let j = i + 1; j < len; j++) {
      if(arr[lowest] > arr[j])
        lowest = j
    }
    if(i !== lowest)
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
  }
  return arr
}

function selectionSort2(arr) {
  let len = arr.length,
      minIndex
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if(arr[j] < arr[minIndex])
        minIndex = j
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

function insertionSort(arr) {
  let len = arr.length,
      currentValue,
      j
  for (let i = 1; i < len; i++) {
    currentValue = arr[i]

    for (j = i - 1; arr[j] > currentValue && j >= 0; j--)
      arr[j+1] = arr[j]

    arr[j+1] = currentValue
  }
  return arr
}

function insertionSort2(arr) {
  let len = arr.length,
      current, j
  for (let i = 1; i < len; i++) {
    current = arr[i]

    j = i - 1
    while(j >= 0 && arr[j] > current) {
      arr[j+1] = arr[j]
      j--
    }

    arr[j+1] = current
  }
  return arr
}
//#endregion

//#region MergeSort
// function accept 2 sorted integer arrays and return the merged sorted result array
function merge(arr1, arr2) {
  let result = [],
      len1 = arr1.length,
      len2 = arr2.length,
      i = 0,
      j = 0

  while(i < len1 && j < len2) {
    (arr1[i] <= arr2[j])
      ? result.push(arr1[i++])
      : result.push(arr2[j++])
  }

  while(i < len1)
    result.push(arr1[i++])

  while(j < len2)
    result.push(arr2[j++])

  return result
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let middleIndex = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,middleIndex))
  let right = mergeSort(arr.slice(middleIndex))
  return merge(left, right)
}
//#endregion

//#region QuickSort
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start = 0, end = arr.length) {
  let pivotValue = arr[start],
      indexToSwap = start

  for (let i = start + 1; i < end; i++) {
    if(arr[i] <= pivotValue)
      swap(arr, ++indexToSwap, i)
  }

  swap(arr, start, indexToSwap)
  return indexToSwap
}

function quickSort(arr, start = 0, end = arr.length) {
  if(start < end) {
    let pivotIndex = pivot(arr, start, end)
    quickSort(arr, start, pivotIndex)
    quickSort(arr, pivotIndex+1, end)
  }
  return arr
}

function partition(arr, start, end) {
  let pivot = arr[end],
      boundary = start - 1

  for (let i = start; i <= end; i++) {
    if(arr[i] <= pivot)
      swap(arr, i, ++boundary)
  }

  return boundary
}

function quickSort2(arr, start = 0, end = arr.length - 1) {
  if(start >= end) return;

  let boundary = partition(arr, start, end)

  quickSort2(arr, start, boundary - 1)
  quickSort2(arr, boundary + 1, end)

  return arr
}
//#endregion

//#region CountingSort
function countSort(arr) {
  let counter = new Map()
  for (let value of arr)
    counter.set(value, (counter.get(value) || 0) + 1)

  let k = 0
  for (let [value, count] of counter) {
    for (let i = 0; i < count; i++)
      arr[k++] = value
  }
  return arr
}
//#endregion

//#region BucketSort
function _createBuckets(arr, numOfBuckets) {
  let buckets = []
  for (let i = 0; i < numOfBuckets; i++)
    buckets.push([])
  for (let value of arr)
    buckets[Math.floor(Math.abs(value) / numOfBuckets)].push(value)
  return buckets
}
function bucketSort(numOfBuckets) {
  return function bucketSortOf(arr) {
    let i = 0
    for (let bucket of _createBuckets(arr, numOfBuckets)) {
      for (let value of insertionSort(bucket))
        arr[i++] = value
    }
    return arr
  }
}
//#endregion

//#region RadixSort
function getDigitOf(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}
function digitsCountByMath(num) {
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
function digitsCountByString(num) {
  return Math.abs(num).toString().length
}
const maxDigitsOf = digitsCountFn => numbers => {
  let maxDigits = 0
  for (let value of numbers)
    maxDigits = Math.max(maxDigits, digitsCountFn(value))
  return maxDigits
}

function radixSort(numbers) {
  let maxDigits = maxDigitsOf(digitsCountByMath)(numbers)
  for (let pos = 0; pos < maxDigits; pos++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < numbers.length; i++)
      buckets[getDigitOf(numbers[i], pos)].push(numbers[i])
    numbers = [].concat(...buckets)
  }
  return numbers
}
//#endregion

//#region Test All Sort Algorithms
export function testSort() {
  const smallList = genIntList(20, true),
        _5bucketSort = bucketSort(5),
        _10bucketSort = bucketSort(10)

  console.log("testSort -> smallList ------>", smallList)
  console.log("testSort -> bubbleSort ----->", bubbleSort(smallList))
  console.log("testSort -> bubbleSort2 ---->", bubbleSort2(smallList))
  console.log("testSort -> selectionSort -->", selectionSort(smallList))
  console.log("testSort -> selectionSort2 ->", selectionSort(smallList))
  console.log("testSort -> insertionSort -->", insertionSort(smallList))
  console.log("testSort -> insertionSort2 ->", insertionSort2(smallList))
  console.log("testSort -> mergeSort ------>", mergeSort(smallList))
  console.log("testSort -> quickSort ------>", quickSort(smallList))
  console.log("testSort -> quickSort2 ----->", quickSort2(smallList))
  console.log("testSort -> countingSort --->", countSort(smallList))
  console.log("testSort -> bucketSort 5 --->", _5bucketSort(smallList))
  console.log("testSort -> bucketSort 10 -->", _10bucketSort(smallList))

  // const list1 = genSortedIntList(5)
  // const list2 = genSortedIntList(5)
  // console.log("testSort -> list1", list1)
  // console.log("testSort -> list2", list2)
  // console.log("testSort -> merge", merge(list1, list2))

  // const list3 = genIntList(12)
  // console.log("testSort -> list -", list3)
  // console.log("testSort -> mergeSort", mergeSort(list3))

  // const list4 = genIntList(15)
  // console.log("testSort -> list4 :", list4)
  // console.log("testSort -> pivot", pivot(list4))

  // const list5 = genIntList(10)
  // console.log("testSort -> list5 ==>", list5)
  // console.log("testSort -> quickSort", quickSort(list5))

  // const list6 = [1321,-654,98798449,98,15,1651,98,-12]
  // console.log("maxDigitsOf -> list5 ==>", list6)
  // console.log("maxDigitsOf -> digitsCountByMath=>", maxDigitsOf(digitsCountByMath)(list6) )
  // console.log("maxDigitsOf -> digitsCountByString", maxDigitsOf(digitsCountByString)(list6) )

  // const list7 = genIntList(70000000)
  // comparePerformance(list7, maxDigitsOf(digitsCountByMath), maxDigitsOf(digitsCountByString))

  // const list8 = genIntList(10, true)
  // console.log("testSort -> list8 ==>", list8)
  // console.log("testSort -> radixSort", radixSort(list8))

  // const bigList = genIntList(100000)
  // console.log("\n--------------- testSort bigList Start ---------------------\n")
  // comparePerformance(bigList, bubbleSort, selectionSort, insertionSort)
  // console.log("\n--------------- testSort bigList End ---------------------\n")

  // const midList = [...genSortedIntList(6700), ...genIntList(50)]
  // console.log("\n--------------- testSort midList Start ---------------------\n")
  // comparePerformance(midList, bubbleSort, bubbleSort, bubbleSort2, selectionSort, selectionSort2, insertionSort, insertionSort2, mergeSort, quickSort, quickSort2, countSort, radixSort)
  // console.log("\n--------------- testSort midList End ---------------------\n")

  const bigList = genIntList(100000, true)
  const _1000bucketSort = bucketSort(1000)
  console.log("\n--------------- testSort bigList Start ---------------------\n")
  comparePerformance(bigList, bubbleSort, bubbleSort, bubbleSort2, selectionSort, selectionSort2, insertionSort, insertionSort2, countSort, _1000bucketSort, radixSort)
  console.log("\n--------------- testSort bigList End ---------------------\n")
}
//#endregion
