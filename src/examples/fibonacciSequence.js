import { comparePerformance } from "../_helpers";

// function to return n of the given nth in fibonacci sequence
function fibonacciForLoop(nth) {
  if(nth < 3)
    return 1
  let fibs = [1,1]
  for (var i = 2; i < nth; i++)
    fibs[i] = fibs[i-1] + fibs[i-2]
  return fibs.pop()
}

function fibonacciWhileLoop(nth) {
  if(nth < 3)
    return 1

  let i = nth,
      base = 1,
      result = 0,
      temp

  while (i > 0){
    temp = base;
    base = base + result;
    result = temp;
    i--;
  }

  return result;
}

function fibonacciRecursive(nth) {
  return (nth < 3)
    ? 1
    : fibonacciRecursive(nth-1) + fibonacciRecursive(nth-2)
}

let cached = {},
    currentValue
function fibonacciRecursiveWithMemo(nth) {
  if(cached[nth])
    return cached[nth]

  if(nth < 3)
    currentValue = 1
  else
    currentValue = fibonacciRecursiveWithMemo(nth-1) + fibonacciRecursiveWithMemo(nth-2)

  return cached[nth] = currentValue
}

export function testFibonacciNumbers() {
  // const nth = 10
  // console.log("testFibonacciNumbers -> fibonacciForLoop", fibonacciForLoop(nth))
  // console.log("testFibonacciNumbers -> fibonacciWhileLoop", fibonacciWhileLoop(nth))
  // console.log("testFibonacciNumbers -> fibonacciRecursive", fibonacciRecursive(nth))
  // console.log("testFibonacciNumbers -> fibonacciRecursiveWithMemo", fibonacciRecursiveWithMemo(nth))

  const bigNth = 1000000
  console.log('bigNth: ', fibonacciWhileLoop(bigNth))
  console.log("\n--------------- testFibonacciNumbers bigNth Start ---------------------\n")
  comparePerformance(bigNth, fibonacciWhileLoop, fibonacciForLoop)
  console.log("\n--------------- testFibonacciNumbers bigNth End ---------------------\n")

  const midNth = 11000
  console.log('midNth: ', fibonacciWhileLoop(midNth))
  console.log("\n--------------- testFibonacciNumbers smallNth Start ---------------------\n")
  comparePerformance(midNth, fibonacciRecursiveWithMemo)
  console.log("\n--------------- testFibonacciNumbers smallNth End ---------------------\n")

  const smallNth = 44
  console.log('smallNth: ', fibonacciWhileLoop(smallNth))
  console.log("\n--------------- testFibonacciNumbers smallNth Start ---------------------\n")
  comparePerformance(smallNth, fibonacciRecursive)
  console.log("\n--------------- testFibonacciNumbers smallNth End ---------------------\n")
}
