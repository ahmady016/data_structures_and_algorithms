import { comparePerformance } from '../_helpers'

// function to return the index of the given element in the given array OR -1 if not exist
function subStringSearchNestedForLoop([str, value]) {
  let count = 0,
      strLen = str.length,
      valueLen = value.length

  for (let i = 0; i < strLen; i++) {
    for (let j = 0; j < valueLen; j++) {
      if(value[j] !== str[j+i]) break
      if(j === valueLen - 1) count++
    }
  }

  return count
}

function subStringSearchForLoopWithSlice([str, value]) {
  let count = 0,
      strLen = str.length,
      valueLen = value.length,
      indexToStop = (strLen - valueLen)

  for (let i = 0; i < indexToStop; i++) {
    if(str.slice(i,(i+valueLen)) === value)
      count++
  }

  return count
}

export function testSubStringSearch() {
  const str = 'This is my first function in javascript because javascript in awesome language and javascript is beautiful'
  console.log("testSubStringSearch -> subStringSearchNestedForLoop", subStringSearchNestedForLoop([str, 'javascript']))
  console.log("testSubStringSearch -> subStringSearchForLoopWithSlice", subStringSearchForLoopWithSlice([str, 'javascript']))

  const bigString = 'This is my first function in javascript'.repeat(10000000)
  console.log("\n--------------- testSubStringSearch bigString Start ---------------------\n")
  comparePerformance([bigString, 'javascript'], subStringSearchNestedForLoop, subStringSearchForLoopWithSlice)
  console.log("\n--------------- testSubStringSearch bigString End ---------------------\n")
}
