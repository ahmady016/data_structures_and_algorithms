import { comparePerformance, genSortedIntList } from '../_helpers'

// function to return the index of the given element in the given array OR -1 if not exist
function linearSearch([arr, value]) {
  for (let i = 0; i < arr.length; i++)
    if(arr[i] === value)
      return i
  return -1
}

function binarySearchIterative([arr, value]) {
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

function binarySearchIterative2([arr, value]) {
  let start = 0, end = arr.length - 1, middleIndex

  while(start <= end) {
    middleIndex = Math.floor((start + end) / 2)

    if(value === arr[middleIndex])
      return middleIndex

    if(value < arr[middleIndex])
      end = middleIndex - 1
    else
      start = middleIndex + 1
  }

  return -1
}

function binarySearchRecursive([arr, value], start = 0, end = arr.length - 1) {
  if(end < start) return -1

  let middleIndex = Math.floor((start + end) / 2)
  if(value === arr[middleIndex]) return middleIndex

  if(value < arr[middleIndex])
    return binarySearchRecursive([arr, value], start, middleIndex - 1)
  else
    return binarySearchRecursive([arr, value], middleIndex + 1, end)
}

function ternarySearch([arr, value], start = 0, end = arr.length - 1) {
  if(start > end) return -1

  let partitionSize = Math.floor((end - start) / 3),
      middle1 = start + partitionSize,
      middle2 = end - partitionSize

  if(value === arr[middle1]) return middle1

  if(value === arr[middle2]) return middle2

  if(value < arr[middle1])
    return ternarySearch([arr, value], start, middle1 - 1)

  if(value > arr[middle2])
    return ternarySearch([arr, value], middle2 + 1, end)

  return ternarySearch([arr, value], middle1 + 1, middle2 - 1)
}

function jumpSearch([arr, value]) {
  let len = arr.length,
      blockSize = Math.sqrt(len),
      currentStart = 0,
      nextStart = blockSize

  while(currentStart < len && arr[nextStart - 1] < value) {
    currentStart = nextStart
    nextStart += blockSize
    if(nextStart > len) nextStart = len
  }

  for(let i = currentStart; i < nextStart; i++)
    if(arr[i] === value)
      return i
  return -1
}

function exponentialSearch([arr, value]) {
  let len = arr.length

  let bound = 1
  while(bound < len && arr[bound] < value)
    bound *= 2

  let start = Math.floor(bound / 2),
      end = Math.min(bound, len - 1)
  return binarySearchRecursive([arr, value], start, end)
}

export function testSearch() {
  const list = genSortedIntList(16)
  console.log("testSearch -> list ------------------->", list)
  console.log("testSearch -> linearSearch ----------->", linearSearch([list, list[7]]))
  console.log("testSearch -> binarySearchIterative -->", binarySearchIterative([list, list[7]]))
  console.log("testSearch -> binarySearchIterative2 ->", binarySearchIterative2([list, list[7]]))
  console.log("testSearch -> binarySearchRecursive -->", binarySearchRecursive([list, list[7]]))
  console.log("testSearch -> ternarySearch ---------->", ternarySearch([list, list[7]]))
  console.log("testSearch -> jumpSearch ------------->", jumpSearch([list, list[7]]))
  console.log("testSearch -> exponentialSearch ------>", exponentialSearch([list, list[7]]))

  const bigList = genSortedIntList(70000000)
  console.log("\n--------------- testSearch bigList Start ---------------------\n")
  comparePerformance([bigList, bigList[70000000 - 1]],
		linearSearch,
		binarySearchIterative,
		binarySearchIterative2,
		binarySearchRecursive,
		ternarySearch,
    jumpSearch,
    exponentialSearch
  )
  console.log("\n--------------- testSearch bigList End ---------------------\n")
}
