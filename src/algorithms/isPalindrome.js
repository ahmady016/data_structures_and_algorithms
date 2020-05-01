import { comparePerformance } from './../_helpers'

// palindrome is a string reads the same both [forward and backward] like 'dad'
function isPalindromeBySplitAndReverse(str) {
  if(!str || !str.trim()) return false
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase()
}

function isPalindromeByTwoPointers_1(str) {
  if(!str || !str.trim()) return false

  let maxIndex = str.length -1,
      middleIndex = Math.floor(str.length / 2);

  for (let i = 0; i <= middleIndex; i++)
    if( str[i].toLowerCase() !== str[maxIndex - i].toLowerCase() )
      return false

  return true
}

function isPalindromeByTwoPointers_2(str) {
  if(!str || !str.trim()) return false

  let start = 0, end = str.length - 1
  while(start < end)
    if(str[start++] !== str[end--])
      return false

  return true
}

export function testPalindromeString() {
  const str1 = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('')
  console.log("str", str1)
  console.log("\n--------------- isPalindromeBySplitAndReverse ---------------------\n")
  console.log(isPalindromeBySplitAndReverse(str1))
  console.log("\n--------------- isPalindromeByTwoPointers_1 ------------------\n")
  console.log(isPalindromeByTwoPointers_1(str1))
  console.log("\n--------------- isPalindromeByTwoPointers_2 ------------------\n")
  console.log(isPalindromeByTwoPointers_2(str1))

  const str2 = 'abcdefghijklmnopqrstuvwxyz'.repeat(500000) + 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('').repeat(500000)
  console.log("\n--------------- testPalindromeString Start ---------------------\n")
  comparePerformance(str2, isPalindromeBySplitAndReverse, isPalindromeByTwoPointers_1, isPalindromeByTwoPointers_2)
  console.log("\n--------------- testPalindromeString End -----------------------\n")
}
