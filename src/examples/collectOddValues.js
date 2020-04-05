import { comparePerformance, genIntList } from './../_helpers'

// function to collect odd values of the given integer array
function collectOddsForLoop(arr) {
  const result = []
  for(let value of arr)
    if(value % 2 !== 0)
      result.push(value)
  return result
}

function collectOddsFilter(arr) {
  return arr.filter(value => value % 2 !== 0)
}

function collectOddsRecursiveHelper(arr) {
  let len = arr.length,
      result = []

  function getOdds(index) {
    if(index === len)
      return

    if(arr[index] % 2 !== 0)
      result.push(arr[index])

    getOdds(index+1)
  }

  getOdds(0)
  return result
}

function collectOddsRecursivePure(arr) {
  let result = []

  if(arr.length === 0)
    return result

  if(arr[0] % 2 !== 0)
    result.push(arr[0])

  result = result.concat(collectOddsRecursivePure(arr.slice(1)))
  return result
}

export function testCollectOdds() {
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  // console.log("testCollectOdds -> collectOddsForLoop", collectOddsForLoop(list))
  // console.log("testCollectOdds -> collectOddsFilter", collectOddsFilter(list))
  // console.log("testCollectOdds -> collectOddsRecursiveHelper", collectOddsRecursiveHelper(list))
  // console.log("testCollectOdds -> collectOddsRecursivePure", collectOddsRecursivePure(list))

  // const bigList = genIntList(75000000, true)
  // console.log("\n--------------- testCollectOdds bigList Start ---------------------\n")
  // comparePerformance(bigList, collectOddsForLoop, collectOddsFilter)
  // console.log("\n--------------- testCollectOdds bigList End ---------------------\n")

  const smallList = genIntList(11000, true)
  console.log("\n--------------- testCollectOdds smallList Start ---------------------\n")
  comparePerformance(smallList, collectOddsFilter, collectOddsForLoop, collectOddsRecursiveHelper, collectOddsRecursivePure)
  console.log("\n--------------- testCollectOdds smallList End ---------------------\n")
}
