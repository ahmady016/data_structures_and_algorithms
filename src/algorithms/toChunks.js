import { comparePerformance, genIntList } from '../_helpers'

// splits an array (first argument) into groups of size (second argument) and returns them as a two-dimensional array
function chunks_1([arr, size]) {
  let len = arr.length,
      result = [];
  for (let i = 0; i < len; i += size)
    result.push(arr.slice(i, i + size))
  return result
}

function chunks_2([arr, size]) {
  let len = arr.length,
      current = [arr[0]],
      result = [current]

  for (let i = 1; i < len; i++) {
    if(current.length !== size)
      current.push(arr[i])
    else {
      current = [arr[i]]
      result.push(current)
    }
  }

  return result
}

export function testChunks() {
  // const numbers = genIntList(20, true)
  // console.log("numbers", numbers)
  // console.log("\n--------------- chunks_1 ---------------------\n")
  // console.log(chunks_1([numbers, 5]))
  // console.log("\n--------------- chunks_2 ---------------------\n")
  // console.log(chunks_2([numbers, 5]))

  const numbers = genIntList(10000000, true)
  console.log("\n--------------- testChunks Start ---------------------\n")
  comparePerformance([numbers, 10], chunks_1, chunks_2)
  console.log("\n--------------- testChunks End -----------------------\n")
}
