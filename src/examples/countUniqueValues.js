import { comparePerformance, genIntList } from './../_helpers'

// function accepts a sorted array and count its unique values
function countUniqueValuesWithNewArr(arr) {
  if(arr.length < 2)
    return arr.length
  const result = []
  for(let value of arr)
    if(!result.includes(value))
      result.push(value)
  return result.length
}

function countUniqueValuesWithFilter(arr) {
  if(arr.length < 2)
    return arr.length
  return arr.filter( (value, index, self)  => index === self.indexOf(value) ).length
}

function countUniqueValuesWithTwoPointers(arr) {
  let len = arr.length
  if(len < 2)
    return len
  let i = 0
  for (let j = 1; j < len; j++)
    if(arr[j] > arr[i])
      i++
  return i+1
}

export function testCountUniqueValues() {
  // console.log(countUniqueValuesWithNewArr([1,2,3,1,5,9,5,9,1,2,3,3,4,2,5,9,11,2,1,3,3]))
  // console.log(countUniqueValuesWithFilter([1,2,3,1,5,9,5,9,1,2,3,3,4,2,5,9,11,2,1,3,3]))
  // console.log(countUniqueValuesWithTwoPointers([1,2,3,1,5,9,5,9,1,2,3,3,4,2,5,9,11,2,1,3,3]))

  const list = genIntList(250000)
  console.log("\n--------------- testCountUniqueValues Start ---------------------\n")
  comparePerformance(list, countUniqueValuesWithFilter, countUniqueValuesWithNewArr, countUniqueValuesWithTwoPointers)
  console.log("\n--------------- testCountUniqueValues End -----------------------\n")
}
