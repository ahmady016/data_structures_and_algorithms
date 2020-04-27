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

  recursiveDFT(start) {
    if(!start) return undefined

    let visited = new Set();

    const traverse = vertex => {
      if(!vertex) return undefined

      visited.add(vertex)

      for (const neighbor of this.vertexList[vertex])
        if(!visited.has(neighbor))
          traverse(neighbor)
    }
    traverse(start)

    return visited
  }

  iterativeDFT(start) {
    if(!start) return undefined

    let currentVertex,
        visited = new Set(),
        stack = [start]

    while(stack.length) {
      currentVertex = stack.pop()
      visited.add(currentVertex)

      for (const neighbor of this.vertexList[currentVertex])
        if(!visited.has(neighbor))
          stack.push(neighbor)
    }

    return visited
  }

  iterativeBFT(start) {
    if(!start) return undefined

    let currentVertex,
        visited = new Set(),
        queue = [start]

    while(queue.length) {
      currentVertex = queue.shift()
      visited.add(currentVertex)

      for (const neighbor of this.vertexList[currentVertex])
        if(!visited.has(neighbor))
          queue.push(neighbor)
    }

    return visited
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

  recursiveDFT(name, visited = new Set()) {
    let startNode = this.nodes.get(name)
    if(!startNode) return undefined

    visited.add(startNode.name)

    for (let neighbor of this.relations.get(startNode))
      if(!visited.has(neighbor.name))
        this.recursiveDFT(neighbor.name, visited)

    return visited
  }

  iterativeDFT(startName) {
    let startNode = this.nodes.get(startName)
    if(!startNode) return undefined

    let currentNode,
        visited = new Set(),
        stack = [startNode]

    while(stack.length) {
      currentNode = stack.pop()
      visited.add(currentNode.name)

      for (let neighbor of this.relations.get(currentNode))
        if(!visited.has(neighbor.name))
          stack.push(neighbor)
    }

    return visited
  }

  iterativeBFT(startName) {
    let startNode = this.nodes.get(startName)
    if(!startNode) return undefined

    let currentNode,
        visited = new Set(),
        queue = [startNode]

    while(queue.length) {
      currentNode = queue.shift()
      visited.add(currentNode.name)

      for (let neighbor of this.relations.get(currentNode))
        if(!visited.has(neighbor.name))
          queue.push(neighbor)
    }

    return visited
  }

  toString() {
    let result = '\n'
    for (let [key, value] of this.relations)
      result += `${key.name} ==> ${ value.length ? value : '[]'}\n`
    return result
  }

}

export class DirectedGraph {

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
    return true
  }

  removeEdge(name1, name2) {
    let node1 = this.nodes.get(name1),
        node2 = this.nodes.get(name2)
    if(!node1 || !node2) return false

    let node1Relations = this.relations.get(node1)
    this.relations.set(node1, node1Relations.filter(node => node.name !== name2) )
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

  _TopologySort(node, visited, stack) {
    if(visited.has(node)) return;

    visited.add(node)

    for (let neighbor of this.relations.get(node))
      this._TopologySort(neighbor, visited, stack)

    stack.push(node)
  }

  topologicalSort() {
    let visited = new Set(),
        stack = [],
        result = []

    for (let node of this.nodes.values())
      this._TopologySort(node, visited, stack)

    while(stack.length)
      result.push(stack.pop().name)

    return result
  }

  _hasCycleHelper(node, all, visiting, visited) {
    all.delete(node)
    visiting.add(node)

    for (let neighbor of this.relations.get(node)) {
      if(visited.has(neighbor))
        continue

      if(visiting.has(neighbor))
        return true

      if(this._hasCycleHelper(neighbor, all, visiting, visited))
        return true
    }

    visiting.delete(node)
    visited.add(node)
    return false
  }

  hasCycle() {
    let all = new Set(this.nodes.values()),
        visiting = new Set(),
        visited = new Set(),
        currentNode

    while(all.size) {
      currentNode = all.keys().next().value
      if(this._hasCycleHelper(currentNode, all, visiting, visited))
        return true
    }

    return false
  }

  toString() {
    let result = '\n'
    for (let [key, value] of this.relations)
      result += `${key.name} ==> ${ value.length ? value : '[]'}\n`
    return result
  }

}

class Edge {
  constructor(from, to, weight) {
    this.from = from
    this.to = to
    this.weight = weight
  }
  toString() {
    return `${this.from} <==${this.weight}==> ${this.to}`
  }
}
class GNode {

  constructor(name) {
    this.name = name
    this.edges = new Set()
  }

  addEdge(toNode, weight) {
    this.edges.add(new Edge(this, toNode, weight))
  }

  toString() {
    return this.name
  }

}
export class ComplexWeightedGraph {

  constructor() {
    this.nodes = new Map()
  }

  get nodesCount() {
    return this.nodes.size
  }

  addNode(name) {
    this.nodes.set(name, new GNode(name))
    return this.nodes.size
  }

  addEdge(fromName, toName, weight) {
    let fromNode = this.nodes.get(fromName),
        toNode = this.nodes.get(toName)
    if(!fromNode || !toNode) return false

    fromNode.addEdge(toNode, weight)
    toNode.addEdge(fromNode, weight)
    return true
  }

  toString() {
    let result = '\n'
    for (let node of this.nodes.values())
      result += `${node.name} ==> ${ node.edges.size ? [...node.edges] : '[]'}\n`
    return result
  }

}
