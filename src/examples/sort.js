import { comparePerformance, genIntList } from '../_helpers'

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

export function testSort() {
  // const smallList = genIntList(15)
  // console.log("testSort -> smallList ---", smallList)
  // console.log("testSort -> bubbleSort --", bubbleSort(smallList))
  // console.log("testSort -> selectionSort", selectionSort(smallList))
  // console.log("testSort -> insertionSort", insertionSort(smallList))

  const bigList = genIntList(100000)
  console.log("\n--------------- testSort bigList Start ---------------------\n")
  comparePerformance(bigList, bubbleSort, selectionSort, insertionSort)
  console.log("\n--------------- testSort bigList End ---------------------\n")
}
