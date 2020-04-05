import { comparePerformance, genTwoLists, getCounter } from './../_helpers'

// function called same which accepts two arrays and
// return true if each value in the first has it's corresponding squared value and same frequency in the second

function sameWithNestedLoops([list1, list2]) {
  if(list1.length !== list2.length)
    return false
  const _list2 = [...list2]
  for (let value of list1) {
    const index = _list2.indexOf(value**2)
    if(index === -1)
      return false
    _list2.splice(index, 1)
  }
  return true
}

function sameWithFQ([list1, list2]) {
  if(list1.length !== list2.length)
    return false
  const counter1 = getCounter(list1)
  const counter2 = getCounter(list2)
  for (let key in counter1)
    if( !counter2.hasOwnProperty(key**2) || (counter1[key] !== counter2[key**2]) )
      return false
  return true
}

function simpleTest() {
  const list1 = [2,5,3,8, 15]
  const list2 = [25,4,64,9]

  console.log(sameWithNestedLoops(list1, list2))
  console.log(sameWithFQ(list1, list2))

  const lists = genTwoLists(10)
  console.log("testSameLists -> lists", lists)
  console.log(sameWithNestedLoops(lists))
  console.log(sameWithFQ(lists))
}

export function testSameLists() {
  const smallLists = genTwoLists(300000)
  console.log("\n--------------- testSameLists Start ---------------------\n")
  comparePerformance(smallLists, sameWithNestedLoops, sameWithFQ)
  console.log("\n--------------- testSameLists End -----------------------\n")

  const bigLists = genTwoLists(10000000)
  console.log("\n--------------- testSameLists Start ---------------------\n")
  comparePerformance(bigLists, sameWithFQ)
  console.log("\n--------------- testSameLists End -----------------------\n")
}
