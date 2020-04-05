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

export function testSort() {
  // const smallList = genIntList(20)
  // console.log("testSort -> smallList", smallList)
  // console.log("testSort -> bubbleSort", bubbleSort(smallList))
  // console.log("testSort -> selectionSort", selectionSort(smallList))

  const bigList = genIntList(200000)
  console.log("\n--------------- testSort bigList Start ---------------------\n")
  comparePerformance(bigList, bubbleSort, selectionSort)
  console.log("\n--------------- testSort bigList End ---------------------\n")
}
