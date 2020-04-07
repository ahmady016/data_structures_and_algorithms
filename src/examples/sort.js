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
//#endregion

//#region Test All Sort Algorithms
export function testSort() {
  // const smallList = genIntList(15)
  // console.log("testSort -> smallList ---", smallList)
  // console.log("testSort -> bubbleSort --", bubbleSort(smallList))
  // console.log("testSort -> selectionSort", selectionSort(smallList))
  // console.log("testSort -> insertionSort", insertionSort(smallList))

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

  // const bigList = genIntList(100000)
  // console.log("\n--------------- testSort bigList Start ---------------------\n")
  // comparePerformance(bigList, bubbleSort, selectionSort, insertionSort)
  // console.log("\n--------------- testSort bigList End ---------------------\n")

  const midList = [...genSortedIntList(8000), ...genIntList(50)]
  // console.log("testSort -> midList ==>", midList)
  console.log("\n--------------- testSort midList Start ---------------------\n")
  comparePerformance(midList, bubbleSort, selectionSort, insertionSort, mergeSort, quickSort)
  console.log("\n--------------- testSort midList End ---------------------\n")
}
//#endregion
