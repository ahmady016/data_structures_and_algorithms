import { comparePerformance } from './../_helpers'

// function to get the factorial of n [n!]
function factorialForLoop(n) {
  let total = 1
  for (let i = n; i >= 1; i--)
    total *= i
  return total
}

function factorialRecursive(n) {
  if(n === 1) return 1
  return n * factorialRecursive(n-1)
}

export function testFactorial() {
  // const n = 5
  // console.log("sumDownFromForLoop -> sumDownFromForLoop", factorialForLoop(n))
  // console.log("sumDownFromReduce -> sumDownFromReduce", factorialRecursive(n))

  const bigNum = 1000000000
  console.log("\n--------------- testFactorial bigNum Start ---------------------\n")
  comparePerformance(bigNum, factorialForLoop)
  console.log("\n--------------- testFactorial bigNum End ---------------------\n")

  const smallNum = 11000
  console.log("\n--------------- testFactorial smallNum Start ---------------------\n")
  comparePerformance(smallNum, factorialForLoop, factorialRecursive)
  console.log("\n--------------- testFactorial smallNum End ---------------------\n")
}
