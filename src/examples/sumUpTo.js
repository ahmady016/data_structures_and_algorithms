import { comparePerformance } from './../_helpers'

function sumUpToForLoop(n) {
  let total = 0
  for(let i = 1; i <= n; i++)
      total += i
  return total
}

function sumUpToFormula(n) {
  return n * (n + 1) / 2
}

export function testSumUpTo() {
  const n = 10000000000
  console.log("\n--------------- testSumUpTo Start ---------------------\n")
  comparePerformance(n, sumUpToForLoop, sumUpToFormula)
  console.log("\n--------------- testSumUpTo End -----------------------\n")
}
