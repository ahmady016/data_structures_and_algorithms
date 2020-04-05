import { comparePerformance } from './../_helpers'

// function to sum range from the given n down to 1
function sumDownFromForLoop(n) {
  let total = 0
  for (let i = n; i >= 1; i--)
    total += i
  return total
}

function sumDownFromReduce(n) {
  return Array(n)
  .fill(n)
  .reduce((total, value, i) => total + (value - i), 0)
}

function sumDownFromRecursive(n) {
  if(n === 1) return 1
  return n + sumDownFromRecursive(n-1)
}

let cached = {},
    currentValue
function sumDownFromRecursiveWithMemo(n) {
  if(cached[n])
    return cached[n]

  if(n === 1)
    currentValue = 1
  else
    currentValue = n + sumDownFromRecursive(n-1)

  cached[n] = currentValue
  return currentValue
}

export function testSumDownFrom() {
  // const n = 10
  // console.log("sumDownFromForLoop -> sumDownFromForLoop", sumDownFromForLoop(n))
  // console.log("sumDownFromReduce -> sumDownFromReduce", sumDownFromReduce(n))
  // console.log("sumDownFromRecursive -> sumDownFromRecursive", sumDownFromRecursive(n))

  const bigNum = 100000000
  console.log("\n--------------- testSumDownFrom bigNum Start ---------------------\n")
  comparePerformance(bigNum, sumDownFromForLoop, sumDownFromReduce)
  console.log("\n--------------- testSumDownFrom bigNum End ---------------------\n")

  const smallNum = 10000
  console.log("\n--------------- testSumDownFrom smallNum Start ---------------------\n")
  comparePerformance(smallNum, sumDownFromRecursiveWithMemo, sumDownFromRecursive)
  console.log("\n--------------- testSumDownFrom smallNum End ---------------------\n")
}
