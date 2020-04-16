export class ArrayHashTable {

  constructor(size = 100) {
    this.size = size
    this.count = 0
    this.items = []
  }

  _hash(key) {
    let total = 0,
        PRIME_NUMBER = 31,
        maxLen = Math.min(key.length, 100)

    for (let i = 0; i < maxLen; i++)
      total = (total * PRIME_NUMBER) + key[i].toLowerCase().charCodeAt(0)

    return total % this.size
  }

  set(key, value) {
    let index = this._hash(key)

    if(!this.items[index])
      this.items[index] = [[key, value]]
    else {
      for (let item of this.items[index]) {
        if(item[0] === key) {
          item[1] = value
          return this.count
        }
      }
      this.items[index].push([key, value])
    }
    return ++this.count
  }

  remove(key) {
    let index = this._hash(key),
        i = 0,
        len;

    if(this.items[index]) {
      len = this.items[index].length
      for (; i < len; i++)
        if(this.items[index][i][0] === key) break
    }

    if(i === len) return false
    this.items[index].splice(i, 1)
    this.count--
    return true
  }

  get(key) {
    let index = this._hash(key);
    if(this.items[index]) {
      for (let item of this.items[index])
        if(item[0] === key) return item[1]
    }
    return null
  }

  has(key) {
    return !!this.get(key)
  }

  get keys() {
    let keys = []

    for (let item of this.items) {
      if(item?.length)
        for (let [key, _] of item)
          keys.push(key)
    }

    return keys
  }

  get values() {
    let values = []

    for (let item of this.items) {
      if(item?.length)
        for (let [_, val] of item)
          if(!values.includes(val))
            values.push(val)
    }

    return values
  }

  toArray() {
    return this.items
  }

}
