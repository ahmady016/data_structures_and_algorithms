import { comparePerformance, genSortedIntList } from '../_helpers'

// function to return the index of the given element in the given array OR -1 if not exist
function linearSearch([arr, value]) {
  for (let i = 0; i < arr.length; i++)
    if(arr[i] === value)
      return i
  return -1
}

function binarySearch([arr, value]) {
  let start = 0,
      end = arr.length-1,
      middle = Math.floor((start + end) / 2)

  while(arr[middle] !== value && start <= end) {
    if(value < arr[middle])
      end = middle - 1
    else
      start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === value ? middle : -1
}

export function testSearch() {
  // const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  // console.log("testSearch -> linearSearch", linearSearch([list, 101]))
  // console.log("testSearch -> binarySearch", binarySearch([list, 25]))

  const bigList = genSortedIntList(70000000)
  console.log("\n--------------- testSearch bigList Start ---------------------\n")
  comparePerformance([bigList, bigList[70000000-1]], linearSearch, binarySearch)
  console.log("\n--------------- testSearch bigList End ---------------------\n")
}
