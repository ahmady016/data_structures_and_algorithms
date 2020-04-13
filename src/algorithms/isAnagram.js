import { comparePerformance, getCounter, genTwoStrings } from './../_helpers'

// An anagram is the string formed by rearranging the characters of another
// function take two strings and determine if the second is an anagram of the first
function isAnagram_1([first, second]) {
  if(first.length !== second.length)
    return false

  const lookup1 = getCounter(first.toLowerCase()),
        lookup2 = getCounter(second.toLowerCase())

  if(Object.keys(lookup1).length !== Object.keys(lookup2).length)
    return false

  for(let char in lookup1) {
    if(lookup1[char] !== lookup2[char] )
      return false
  }
  return true
}

function isAnagram_2([first, second]) {
  if(first.length !== second.length)
    return false

  const lookup = getCounter(first.toLowerCase())

  for(let char of second.toLowerCase()) {
    if(lookup[char])
      lookup[char] -= 1
    else
      return false
  }

  return true
}

const sortChar = str => str.toLowerCase().split('').sort().join('')
function isAnagram_3([first, second]) {
  if(first.length !== second.length)
    return false

  return sortChar(first) === sortChar(second)
}

export function testAnagramString() {
  // console.log(isAnagram_1(['cinema', 'iceman']))
  // console.log(isAnagram_2(['cinema', 'iceman']))
  // console.log(isAnagram_3(['cinema', 'iceman']))

  console.log("\n--------------- testAnagramString Start ---------------------\n")
  comparePerformance(genTwoStrings(10000000), isAnagram_1, isAnagram_2, isAnagram_3)
  console.log("\n--------------- testAnagramString End -----------------------\n")
}
