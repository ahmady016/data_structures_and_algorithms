import { comparePerformance } from '../_helpers'

function charCountReduce(str) {
  return str
    .split('')
    .reduce((result, char) => {
      if(/[a-z0-9]/.test(char)) {
        char.toLowerCase()
        result[char] = (result[char] || 0) + 1
      }
      return result
    }, {})
}

function charCountForOfLoopWithRegexChecker(str) {
  let result = {}
  for (let char of str) {
    if(/[a-z0-9]/.test(char)) {
      char.toLowerCase()
      result[char] = (result[char] || 0) + 1
    }
  }
  return result
}

function charCountForOfLoopAfterRemoveSpecialCharactersWithRegex(str) {
  let result = {}
  str = str.replace(/[^a-z0-9]/ig, '')
  for (let char of str) {
    char.toLowerCase()
    result[char] = (result[char] || 0) + 1
  }
  return result
}

function isAlphaNumeric(charCode) {
  return (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  )
    ? true
    : false
}

function charCountForOfLoopWithCharCodeChecker(str) {
  let result = {}
  for (let char of str) {
    if(isAlphaNumeric(char.charCodeAt(0))) {
      char.toLowerCase()
      result[char] = (result[char] || 0) + 1
    }
  }
  return result
}

export function testCharCount() {
  const str = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&_*/+-=()'.repeat(5000000)
  console.log("\n--------------- testCharCount Start ---------------------\n")
  // comparePerformance(str, charCountReduce, charCountForOfLoopWithCharCodeChecker, charCountForOfLoopAfterRemoveSpecialCharactersWithRegex, charCountForOfLoopWithRegexChecker)
  comparePerformance(str, charCountForOfLoopWithCharCodeChecker, charCountForOfLoopAfterRemoveSpecialCharactersWithRegex, charCountForOfLoopWithRegexChecker)
  console.log("\n--------------- testCharCount End -----------------------\n")
}
