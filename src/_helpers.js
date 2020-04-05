Array.prototype.shuffle = function() {
  if (this.length < 2) return this
  this.sort(() => Math.random() - 0.5)
  return this
}

String.random = function({ lower = true, upper = false, numbers = false, symbols = '', len = 10 }) {
  let _base = "",
      _allStrings = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789"
      },
      _currChar = "",
      _prevChar = "",
      _result = ""
  if(lower)
    _base += _allStrings.lower
  if(upper)
    _base += _allStrings.upper
  if(numbers)
    _base += _allStrings.numbers
  if(symbols)
    _base += symbols;
  for(var i=0;i<len;i++) {
    // get the current random character but not equal the previous one
    do {
        _currChar = _base.charAt(numberBetween(0,_base.length-1))
    } while (_prevChar === _currChar)
    // append it to the generated string
    _result += _currChar
    // put the current in the previous for the next character
    _prevChar = _currChar
  }
  return _result
}

// text performance of 2 [same functions with different implementation] by the given input
export function comparePerformance(input, ...rest) {
  rest.forEach(fn => {
    const t1 = Date.now()
    fn(input)
    const t2 = Date.now()
    console.log(`${fn.name} Time Elapsed: ${Number((t2-t1) / 1000).toFixed(15)} seconds`)
  })
}

export function getCounter(list) {
  let counter = {}
  for (let value of list)
    counter[value] = (counter[value] || 0) + 1
  return counter
}

export function numberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function genTwoLists(len) {
  const list1 = []
  const list2 = []
  let currentNumber
  for (let i = 0; i < len; i++) {
    currentNumber = numberBetween(1,100)
    list1.push(currentNumber)
    list2.push(currentNumber**2)
  }
  list2.shuffle()
  return [list1, list2]
}

export function genTwoStrings(len) {
  let str1, str2
  str1 = str2 = String.random({ len })
  str2 = str2.split('').shuffle().join('')
  return [str1, str2]
}

export function genIntList(len, zero = false) {
  const list = []
  for (let i = 0; i < len; i++)
    list.push(numberBetween( (zero? 0 : -len), len))
  return list
}

export function genSortedIntList(len, min = null) {
  const list = []
  for (let i = 0; i < len; i++)
    list.push(numberBetween(min || -len,len))
  list.sort((a,b) => a - b)
  return list
}
