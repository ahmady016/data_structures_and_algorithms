import { comparePerformance, genIntList } from './../_helpers'

// function accepts integer array and n number
// to return the max sum of n adjacent elements in the array
function maxSliceSum2ForLoop([arr, num]) {
  let len = arr.length
  if(num > len)
    return null
  let maxSum = -Infinity,
      maxIndex = len - num,
      currentSum = 0
  for (let i = 0; i <= maxIndex; i++) {
    currentSum = 0
    for(let j = i; j < (i+num); j++)
      currentSum += arr[j]

    if(currentSum > maxSum)
      maxSum = currentSum
  }
  return maxSum
}

function maxSliceSumForLoopAndReduce([arr, num]) {
  let len = arr.length
  if(num > len)
    return null
  let maxSum = -Infinity,
      maxIndex = len - num,
      currentSum = 0
  for (let i = 0; i <= maxIndex; i++) {
    currentSum = arr.slice(i,(i+num)).reduce((total, value) => total + value, 0)
    if(currentSum > maxSum)
      maxSum = currentSum
  }
  return maxSum
}

function maxSliceSumSlidingWindow([arr, num]) {
  let len = arr.length
  if(num > len)
    return null

  let maxSum = 0,
      currentSum = 0

  for (let i = 0; i < num; i++)
    currentSum += arr[i]

  maxSum = currentSum
  for (let i = num; i < len; i++) {
    currentSum = (currentSum - arr[i-num]) + arr[i]
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
}

export function testMaxSliceSum() {
  // console.log(maxSliceSum2ForLoop([[2,6,9,2,1,8,5,6,3], 3]))
  // console.log(maxSliceSumForLoopAndReduce([[2,6,9,2,1,8,5,6,3], 3]))
  // console.log(maxSliceSumSlidingWindow([[2,6,9,2,1,8,5,6,3], 3]))

  // console.log(genIntList(1000))
  console.log("\n--------------- testMaxSliceSum Start ---------------------\n")
  comparePerformance([genIntList(70000000), 10], maxSliceSumForLoopAndReduce, maxSliceSum2ForLoop, maxSliceSumSlidingWindow)
  console.log("\n--------------- testMaxSliceSum End -----------------------\n")
}
