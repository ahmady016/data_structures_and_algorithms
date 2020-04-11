import { comparePerformance } from './../_helpers'

function reverseForLoop(str) {
  let result = ''
  for(let len = str.length, i = len-1; i >= 0; i--)
    result += str[i]
  return result
}

function reverseArrayFrom(str) {
  return Array.from(str).reverse().join('')
}

function reverseSplit(str) {
  return str.split('').reverse().join('')
}

export function testReverseString() {
  const str = 'abcdefghijklmnopqrstuvwxyz'.repeat(1000000)
  console.log("\n--------------- testReverseString Start ---------------------\n")
  comparePerformance(str, reverseForLoop, reverseArrayFrom, reverseSplit)
  console.log("\n--------------- testReverseString End -----------------------\n")
}
