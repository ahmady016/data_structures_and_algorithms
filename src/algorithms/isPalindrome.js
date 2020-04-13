import { comparePerformance } from './../_helpers'

// palindrome is a string reads the same both [forward and backward] like 'dad'
function isPalindromeWithReverse(str) {
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase()
}

function isPalindromeWithoutReverse(str) {
  let maxIndex = str.length -1,
      middleIndex = Math.floor(str.length / 2);

  for (let i = 0; i <= middleIndex; i++)
    if( str[i].toLowerCase() !== str[maxIndex - i].toLowerCase() )
      return false

  return true
}

export function testPalindromeString() {
  // const str = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('')
  // console.log("str", str)
  // console.log("\n--------------- isPalindromeWithReverse ---------------------\n")
  // console.log(isPalindromeWithReverse(str))
  // console.log("\n--------------- isPalindromeWithoutReverse ------------------\n")
  // console.log(isPalindromeWithoutReverse(str))

  const str = 'abcdefghijklmnopqrstuvwxyz'.repeat(500000) + 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('').repeat(500000)
  console.log("\n--------------- testPalindromeString Start ---------------------\n")
  comparePerformance(str, isPalindromeWithReverse, isPalindromeWithoutReverse)
  console.log("\n--------------- testPalindromeString End -----------------------\n")
}
