import { comparePerformance } from '../_helpers'

function firstRepeatedCharacterWithObject(str) {
  let charArr = [...str],
      charMap = {}

  for (const char of charArr)
    charMap[char] = (charMap[char] || 0) + 1

  for (const char of charArr)
    if(charMap[char] > 1)
      return char

  return ''
}

function firstRepeatedCharacterWithMap(str) {
  let charArr = [...str],
      charMap = new Map()

  for (const char of charArr)
    charMap.set(char, (charMap.get(char) || 0) + 1 )

  for (const char of charArr)
    if(charMap.get(char) > 1)
      return char

  return ''
}

function firstNonRepeatedCharacterWithSet(str) {
  let theSet = new Set()

  for (const char of [...str]) {
    if(theSet.has(char)) return char
    theSet.add(char)
  }

  return ''
}

function firstNonRepeatedCharacterWithArray(str) {
  let theSet = []

  for (const char of [...str]) {
    if(theSet.includes(char)) return char
    theSet.push(char)
  }

  return ''
}

export function testRepeatedCharacter() {
  const str = String.random({ len: 100000, upper: true, numbers: true, symbols: '!@#$%&*()[]<>=_-?|' });

  // console.log("str", str)
  console.log("firstRepeatedCharacterWithObject >", firstRepeatedCharacterWithObject(str))
  console.log("firstRepeatedCharacterWithMap ===>", firstRepeatedCharacterWithMap(str))
  console.log("firstNonRepeatedCharacterWithArray", firstNonRepeatedCharacterWithArray(str))
  console.log("firstNonRepeatedCharacterWithSet >", firstNonRepeatedCharacterWithSet(str))


  console.log("\n--------------- testRepeatedCharacter Start ---------------------\n")
  comparePerformance(str, firstRepeatedCharacterWithObject, firstRepeatedCharacterWithMap)
  console.log("\n--------------- testRepeatedCharacter End -----------------------\n")

  console.log("\n--------------- testNonRepeatedCharacter Start ---------------------\n")
  comparePerformance(str, firstNonRepeatedCharacterWithSet, firstNonRepeatedCharacterWithArray)
  console.log("\n--------------- testNonRepeatedCharacter End -----------------------\n")
}
