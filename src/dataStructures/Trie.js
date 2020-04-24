class Node {

  constructor(value) {
    this.value = value
    this.endOfWord = false
    this.children = new Map()
  }

  hasChild(char) {
    return this.children.has(char)
  }

  getChild(char) {
    return this.children.get(char)
  }

  addChild(char) {
    this.children.set(char, new Node(char))
  }

  removeChild(char) {
    return this.children.delete(char)
  }

  hasChildren() {
    return this.children.size
  }

  get childrenArray() {
    return [...this.children.values()]
  }

}

export class Trie {

  constructor() {
    this.root = new Node(' ')
    this.charCount = 0
  }

  insert(word) {
    if(!word) return undefined

    let current = this.root
    for (let char of [...word]) {
      if(!current.hasChild(char)) {
        current.addChild(char)
        this.charCount++
      }
      current = current.getChild(char)
    }
    current.endOfWord = true

    return this.charCount
  }

  contains(word) {
    if(!word) return false

    let current = this.root
    for (let char of [...word]) {
      if(!current.hasChild(char)) return false
      current = current.getChild(char)
    }
    return current.endOfWord
  }

  remove(word) {
    const _doRemove = (node, word, index) => {
      if(index === word.length) {
        node.endOfWord = false
        return true
      }

      let char = word[index],
          childNode = node.getChild(char)

      if(!childNode) return

      _doRemove(childNode, word, index+1)

      if(!childNode.hasChildren() && !childNode.endOfWord) {
        node.removeChild(char)
        this.charCount--
      }

      return true
    }

    if(!word) return false

    return _doRemove(this.root, word, 0)
  }

  _getLastNodeOf(prefix) {
    let current = this.root
    for (let char of [...prefix]) {
      if(!current.hasChild(char)) return undefined
      current = current.getChild(char)
    }
    return current
  }

  _fillWords(node, words, prefix) {
    if(!node) return undefined

    if(node.endOfWord) words.push(prefix)

    for (let childNode of node.childrenArray)
      this._fillWords(childNode, words, prefix + childNode.value)
  }

  findAllWordsOf(prefix) {
    if(!prefix) return []

    let words = [],
        lastNode = this._getLastNodeOf(prefix)
    this._fillWords(lastNode, words, prefix)

    return words
  }

  traverse(type = 'preOrder') {
    const _doTraverse = node => {
      if(type === 'preOrder') console.log(node.value)

      for (let childNode of node.childrenArray)
        _doTraverse(childNode)

      if(type === 'postOrder') console.log(node.value)
    }
    _doTraverse(this.root)
  }

}
