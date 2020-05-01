import { comparePerformance, getCounter, genTwoStrings, getCounterMap } from './../_helpers'

// An anagram is the string formed by rearranging the characters of another
// function take two strings and determine if the second is an anagram of the first
// O(n)
function isAnagramByTwoMaps([first, second]) {
  if( !first || !first.trim() ||
      !second || !second.trim() ||
      (first.length !== second.length)
    )
    return false

  const lookup1 = getCounterMap(first.toLowerCase()),
        lookup2 = getCounterMap(second.toLowerCase())

  if(lookup1.size !== lookup2.size)
    return false

  for(let char in lookup1) {
    if(lookup1.get(char) !== lookup2.get(char) )
      return false
  }
  return true
}
// O(n)
function isAnagramByTwoObjects([first, second]) {
  if( !first || !first.trim() ||
      !second || !second.trim() ||
      (first.length !== second.length)
    )
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
// O(n)
function isAnagramByOneMap([first, second]) {
  if( !first || !first.trim() ||
      !second || !second.trim() ||
      (first.length !== second.length)
    )
    return false

  const lookup = getCounterMap(first.toLowerCase())
  let currentCount
  for(let char of second.toLowerCase()) {
    currentCount = lookup.get(char)
    if(currentCount)
      lookup.set(char, currentCount - 1)
    else
      return false
  }
  return true
}
// O(n)
function isAnagramByOneObject([first, second]) {
  if( !first || !first.trim() ||
      !second || !second.trim() ||
      (first.length !== second.length)
    )
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
// O(n)
function isAnagramByOneArray([first, second]) {
  if( !first || !first.trim() ||
      !second || !second.trim() ||
      (first.length !== second.length)
    )
    return false

  const ASCII_SIZE = 256
  let frequencies = Array.from({ length: ASCII_SIZE }, () => 0)

  first = first.trim().replace(/  +/g, ' ').toLowerCase()
  for (let i = 0; i < first.length; i++)
    frequencies[first[i].charCodeAt()]++

  second = second.trim().replace(/  +/g, ' ').toLowerCase()
  for (let i = 0; i < second.length; i++) {
    if(frequencies[second[i]] === 0)
      return false
    frequencies[second[i]]--
  }
  return true
}
// O(n log n)
function isAnagramBySplitAndSort([first, second]) {
  if( !first || !first.trim() ||
      !second || !second.trim() ||
      (first.length !== second.length)
    )
    return false

  const sortChar = str => str.toLowerCase().split('').sort().join('')

  return sortChar(first) === sortChar(second)
}

export function testAnagramString() {
  let twoStr = ['cinema', 'iceman']
  console.log('isAnagramByTwoMaps ------> ' + twoStr + ' =>', isAnagramByTwoMaps(twoStr)       )
  console.log('isAnagramByTwoObjects ---> ' + twoStr + ' =>', isAnagramByTwoObjects(twoStr)    )
  console.log('isAnagramByOneMap -------> ' + twoStr + ' =>', isAnagramByOneMap(twoStr)        )
  console.log('isAnagramByOneObject ----> ' + twoStr + ' =>', isAnagramByOneObject(twoStr)     )
  console.log('isAnagramByOneArray -----> ' + twoStr + ' =>', isAnagramByOneArray(twoStr)     )
  console.log('isAnagramBySplitAndSort -> ' + twoStr + ' =>', isAnagramBySplitAndSort(twoStr)  )

  console.log("\n--------------- testAnagramString Start ---------------------\n")
  comparePerformance(genTwoStrings(10000000),
		isAnagramByTwoObjects,
		isAnagramByTwoObjects,
		isAnagramByOneObject,
		isAnagramByOneArray,
		isAnagramByTwoMaps,
		isAnagramByOneMap,
		isAnagramBySplitAndSort
  )
  console.log("\n--------------- testAnagramString End -----------------------\n")
}
