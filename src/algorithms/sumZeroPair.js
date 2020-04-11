import { comparePerformance, genSortedIntList } from './../_helpers'

// function sumZeroPair which accept a sorted integer array
// to find the first pair where the sum is zero OR empty array if pair doesn't exist

function sumZeroPairNestedLoop(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++)
    for (let j = i+1; j < len; j++)
      if(arr[i] + arr[j] === 0)
        return [arr[i], arr[j]]
  return []
}

function sumZeroPairTwoPointers(arr) {
  let start = 0,
      end = arr.length-1,
      sum
  while(start < end) {
    sum = arr[start] + arr[end]
    if(sum === 0)
      return [arr[start], arr[end]]
    else if (sum > 0)
      end--
    else if (sum < 0)
      start++
  }
  return []
}

export function testSumZeroPair() {
  // console.log(sumZeroPairNestedLoop([-3,-2,-1,0,1,2,3]))
  // console.log(sumZeroPairNestedLoop([-3,-2,0,1,4,7,11]))

  // console.log(sumZeroPairTwoPointers([-3,-2,-1,0,1,2,3]))
  // const smallList = genSortedIntList(10)
  // console.log(smallList)
  // console.log(sumZeroPairTwoPointers(smallList))

  const bigList = genSortedIntList(20000000)
  console.log("\n--------------- testSumZeroPair Start ---------------------\n")
  comparePerformance(bigList, sumZeroPairNestedLoop, sumZeroPairTwoPointers)
  console.log("\n--------------- testSumZeroPair End -----------------------\n")
}
