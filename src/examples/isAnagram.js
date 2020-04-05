import { comparePerformance, getCounter, genTwoStrings } from './../_helpers'

// An anagram is the string formed by rearranging the characters of another
// function take two strings and determine if the second is an anagram of the first

function isAnagram([first, second]) {
  if(first.length !== second.length)
    return false
  const lookup = getCounter(first)
  for(let char of second) {
    if(lookup[char])
      lookup[char] -= 1
    else
      return false
  }
  return true
}

export function testAnagramString() {
  // console.log(isAnagram(['cinema', 'iceman']))
  // console.log(isAnagram(genTwoStrings(10)))

  console.log("\n--------------- testAnagramString Start ---------------------\n")
  comparePerformance(genTwoStrings(10000000), isAnagram)
  console.log("\n--------------- testAnagramString End -----------------------\n")
}
