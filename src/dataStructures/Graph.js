export class SimpleGraph {

  constructor() {
    this.vertexList = {}
  }

  get vertexCount() {
    return Object.keys(this.vertexList).length
  }

  addVertex(vertexName) {
    if(!this.vertexList[vertexName])
      this.vertexList[vertexName] = []
    return this.vertexCount
  }

  addEdge(vertexName1, vertexName2) {
    if(this.vertexList[vertexName1])
      this.vertexList[vertexName1].push(vertexName2)

    if(this.vertexList[vertexName2])
      this.vertexList[vertexName2].push(vertexName1)

    return true
  }

  removeEdge(vertexName1, vertexName2) {
    let vertex1 = this.vertexList[vertexName1]
    if(vertex1)
      this.vertexList[vertexName1] = vertex1.filter(v => v !== vertexName2)

    let vertex2 = this.vertexList[vertexName2]
    if(vertex2)
      this.vertexList[vertexName2] = vertex2.filter(v => v !== vertexName1)

    return true
  }

  removeVertex(vertexName) {
    for (let vertex of this.vertexList[vertexName])
      this.removeEdge(vertexName, vertex)

    delete this.vertexList[vertexName]
    return this.vertexCount
  }

}

class Node {
  constructor(name) {
    this.name = name
  }

  toString() {
    return this.name
  }
}

export class ComplexGraph {

  constructor() {
    this.nodes = new Map()
    this.relations = new Map()
  }

  get nodesCount() {
    return this.nodes.size
  }

  addNode(name) {
    let node = new Node(name)
    this.nodes.set(name, node)
    this.relations.set(node, [])
    return this.nodesCount
  }

  addEdge(name1, name2) {
    let node1 = this.nodes.get(name1),
        node2 = this.nodes.get(name2)
    if(!node1 || !node2) return false

    this.relations.get(node1).push(node2)
    this.relations.get(node2).push(node1)
    return true
  }

  removeEdge(name1, name2) {
    let node1 = this.nodes.get(name1),
        node2 = this.nodes.get(name2)
    if(!node1 || !node2) return false

    let node1Relations = this.relations.get(node1),
        node2Relations = this.relations.get(node2)

    this.relations.set(node1, node1Relations.filter(node => node.name !== name2) )
    this.relations.set(node2, node2Relations.filter(node => node.name !== name1) )
    return true
  }

  removeNode(name) {
    let nodeToRemove = this.nodes.get(name)
    if(!nodeToRemove) return false

    for (let [nodeName, _] of this.nodes)
      this.removeEdge(name, nodeName)

    this.nodes.delete(name)
    this.relations.delete(nodeToRemove)
    return true
  }

  toString() {
    let result = '\n'
    for (let [key, value] of this.relations)
      result += `${key.name} ==> ${ value.length ? value : '[]'}\n`
    return result
  }

}
