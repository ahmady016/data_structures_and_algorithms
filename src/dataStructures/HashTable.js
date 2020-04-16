import { SingleLinkedList } from './SingleLinkedList'

class Entry {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
}

export class HashTable {

	constructor(size = 100) {
		this.size = size
		this.count = 0
		this.entries = new Array(size)
	}

	hash(key) {
		switch (typeof key) {
			case 'string':
				let total = 0,
					  PRIME_NUMBER = 31,
					  maxLen = Math.min(key.length, 100)
				for (let i = 0; i < maxLen; i++)
					total = total * PRIME_NUMBER + key[i].toLowerCase().charCodeAt(0)
				return total % this.size
			case 'number':
				return Math.abs(key) % this.size
			default:
				throw new Error('key must be either [number OR string]')
		}
	}

  getBucket(key) {
		return this.entries[this.hash(key)]
  }

	getOrCreateBucket(key) {
		let index = this.hash(key)

    if (!this.entries[index])
      this.entries[index] = new SingleLinkedList()

		return this.entries[index]
  }

	getEntry(key) {
    let bucket = this.getBucket(key)

		if (bucket) {
      for (let entry of bucket.toArray())
        if (entry.key === key) return entry
		}

		return null
  }

  getEntryIndex(bucket, key) {
    let i = 0

    for (let entry of bucket.toArray())
      if (entry.key === key) return i

		return -1
  }

	get empty() {
		return this.count === 0
	}

	get full() {
		return this.count === this.size
	}

	put(key, value) {
    // update existed entry
    let entry = this.getEntry(key)
		if (entry) {
      entry.value = value
			return this.count
		}
    // add new entry
    let bucket = this.getOrCreateBucket(key)
		bucket.push(new Entry(key, value))
		return ++this.count
	}

	remove(key) {
    if (this.empty) return false

		let bucket = this.getBucket(key)

		if (bucket) {
      let index = this.getEntryIndex(bucket, key)
      if(index !== -1) {
        bucket.remove(index)
        this.count--
        return true
      }
		}

		return false
	}

	get(key) {
		let entry = this.getEntry(key)
		return entry && entry.value
	}

	has(key) {
		return !!this.get(key)
  }

  get keys() {
    if (this.empty) return null

    let keys = []

    for (let bucked of this.entries) {
      if(bucked?.length)
        for (let { key } of bucked.toArray())
          keys.push(key)
    }

    return keys
  }

  get values() {
    if (this.empty) return null

    let values = []

    for (let bucked of this.entries) {
      if(bucked?.length)
        for (let { value } of bucked.toArray())
          if(!values.includes(value))
            values.push(value)
    }

    return values
  }

	toArray() {
		if (this.empty) return this.entries
		return this.entries.map(bucket => bucket.toArray())
  }

}
