import { comparePerformance, genIntList } from '../_helpers'

// function takes unsorted integer array and may contains duplicates
// and return array contains missing numbers in sequence from [min to max]
function missingNumbers_1(arr) {
  let result = []
  arr.sort((a,b) => a - b)
  for (let i = arr[0]; i < arr[arr.length-1]; i++)
    if(!arr.includes(i))
      result.push(i)
  return result
}

function missingNumbers_2(arr) {
  let result = [],
      gapLen
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length - 1; i++) {
    gapLen = arr[i+1] - arr[i]
    if(gapLen > 1) {
      for (let j = 1; j < gapLen; j++)
        result.push(arr[i] + j)
    }
  }
  return result
}

export function testMissingNumbers() {
  // const numbers = genIntList(15, true)
  // console.log("numbers", numbers.sort((a,b) => a - b))
  // console.log("\n--------------- missingNumbers_1 ---------------------\n")
  // console.log(missingNumbers_1(numbers))
  // console.log("\n--------------- missingNumbers_2 ---------------------\n")
  // console.log(missingNumbers_2(numbers))

  const numbers = genIntList(200000, true)
  console.log("\n--------------- testMissingNumbers Start ---------------------\n")
  comparePerformance(numbers, missingNumbers_1, missingNumbers_2)
  console.log("\n--------------- testMissingNumbers End -----------------------\n")
}
