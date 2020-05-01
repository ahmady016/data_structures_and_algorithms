export class StringUtils {

  static countVowels(str) {
    let count = 0
    if(!str || !str.trim())
      return count

    let vowels = 'aeiou'
    for (let char of [...str])
      if(vowels.includes(char.toLowerCase()))
        count++

    return count
  }

  static reverse(str) {
    let result = ''
    if(!str || !str.trim())
      return result

    let len = str.length
    for(let i = len-1; i >= 0; i--)
      result += str[i]

    return result
  }

  static reverseWords(str) {
    if(!str || !str.trim()) return ''
    return str.trim().split(' ').reverse().join(' ')
  }

  static isRotation(str1, str2) {
    if(!str1 || !str1.trim() || !str2 || !str2.trim())
      return false

    return str1.length === str2.length && (str1 + str1).includes(str2)
  }

  static removeDuplicates(str) {
    if(!str || !str.trim()) return ''
    return [...new Set(str)].join('')
  }

  static getMaxRepeatedCharByMap(str) {
    if(!str || !str.trim()) return undefined

    let charMap = new Map()
    for (let char of [...str.split(' ').join('')])
      charMap.set(char, (charMap.get(char) || 0) + 1)

    // less code
    // let max = Math.max(...charMap.values())
    // return [...charMap].find( ([_, value]) => value === max )[0]

    // more preforming
    let maxValue = 0, maxKey
    for (let [key, value] of charMap)
      if(value > maxValue) {
        maxValue = value
        maxKey = key
      }
    return maxKey
  }

  static getMaxRepeatedCharByArray(str) {
    if(!str || !str.trim()) return undefined

    const ASCII_SIZE = 256
    let frequencies = Array.from({ length: ASCII_SIZE }, () => 0)

    for (let char of [...str.trim().split(' ').join('')])
      frequencies[char.charCodeAt()]++

    // less code
    // let max = Math.max(...frequencies)
    // return String.fromCharCode(frequencies.findIndex(value => value === max))

    // more preforming
    let maxValue = 0, maxIndex
    for (let i = 0; i < frequencies.length; i++)
      if(frequencies[i] > maxValue) {
        maxValue = frequencies[i]
        maxIndex = i
      }
    return String.fromCharCode(maxIndex)
  }

  static titleCase(str) {
    if(!str || !str.trim()) return undefined

    // less and clean code but consume more space
    // return str
    //   .trim()
    //   .replace(/  +/g, ' ')
    //   .split(' ')
    //   .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase() )
    //   .join(' ')

    // Ugly code but doesn't consume additional space
    let wordsArr = str.trim().replace(/  +/g, ' ').split(' ')
    for(let i = 0; i < wordsArr.length; i++)
      wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substring(1).toLowerCase()
    return wordsArr.join(' ')
  }

}
