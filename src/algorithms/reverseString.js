import { comparePerformance } from './../_helpers'

function reverseForLoop(str) {
  let result = '',
      len = str.length
  for(let i = len-1; i >= 0; i--)
    result += str[i]
  return result
}

function reverseArrayFrom(str) {
  return Array.from(str).reverse().join('')
}

function reverseSplit(str) {
  return str.split('').reverse().join('')
}

function reverseSpread(str) {
  return [...str].reverse().join('')
}

function reverseReduce(str) {
  return [...str].reduce((result, char) => char + result, '')
}

export function testReverseString() {
  const str = 'abcdefghijklmnopqrstuvwxyz'.repeat(1000000)
  console.log("\n--------------- testReverseString Start ---------------------\n")
  comparePerformance(str, reverseSplit, reverseSpread, reverseForLoop, reverseArrayFrom, reverseReduce)
  console.log("\n--------------- testReverseString End -----------------------\n")
}
