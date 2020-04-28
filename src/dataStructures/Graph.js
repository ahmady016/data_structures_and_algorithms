import { PriorityQueueHeap } from "./MaxBinaryHeap"
import { Stack } from "./Stack"

//#region SimpleGraph
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
//#endregion

//#region ComplexGraph
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
//#endregion

//#region DirectedGraph
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
//#endregion

//#region SimpleWeightedGraph
class ArrayPriorityQueue {
  constructor() {
    this.items = []
  }
  _sort() {
    this.items.sort((a, b) => a.priority - b.priority)
  }
  enqueue({ value, priority }) {
    this.items.push({ value, priority })
    this._sort()
  }
  dequeue() {
    return this.items.shift()
  }
}
export class SimpleWeightedGraph {

  constructor() {
    this.vertexList = new Map()
  }

  get count() {
    return this.vertexList.size
  }

  addVertex(vertexName) {
    this.vertexList.set(vertexName, [])
    return this.count
  }

  addEdge(fromName, toName, weight) {
    let fromNode = this.vertexList.get(fromName),
        toNode = this.vertexList.get(toName)

    if(!fromNode || !toNode) return false

    fromNode.push({ toNode: toName, weight })
    toNode.push({ toNode: fromName, weight })
    return true
  }

  shortestPathBetween(fromName, toName) {
    let nodes = new PriorityQueueHeap(), // ArrayPriorityQueue(),
        paths = new Map(),
        currentVertex,
        candidateDistance,
        currentPath,
        result = []

    // build initial state
    for (let vertex of this.vertexList.keys()) {
      if(vertex === fromName) {
        paths.set(vertex, { distance: 0, previous: null })
        nodes.enqueue({ value: vertex, priority: 0 })
      } else {
        paths.set(vertex, { distance: Infinity, previous: null })
        nodes.enqueue({ value: vertex, priority: Infinity })
      }
    }
    // loop as long as there is vertex to visit
    while(nodes.items.length) {
      currentVertex = nodes.dequeue().value
      if(currentVertex === toName) {
        // build up the shortest path and break
        while(paths.get(currentVertex).previous) {
          result.push(currentVertex)
          currentVertex = paths.get(currentVertex).previous
        }
        break
      }
      if(currentVertex || paths.get(currentVertex)?.distance !== Infinity) {
        for (let edge of this.vertexList.get(currentVertex)) {
          // calc new distance between currentVertex and edge.toNode
          candidateDistance = paths.get(currentVertex).distance + edge.weight
          currentPath = paths.get(edge.toNode)
          if(candidateDistance < currentPath.distance) {
            // updating distance to new smallest distance
            currentPath.distance = candidateDistance
            // updating previous [where we came from]
            currentPath.previous = currentVertex
            // enqueue with new priority
            nodes.enqueue({ value: edge.toNode, priority: candidateDistance })
          }
        }
      }
    }
    // return the result
    return result.concat(currentVertex).reverse()
  }

  toString() {
    let result = '\n'
    for (let [key, value] of this.vertexList)
      result += `${key} => ${ value.length ? value.map(item => `[${key} <=${item.weight}=> ${item.toNode}]`) : '[]'}\n`
    return result
  }

}
//#endregion

//#region ComplexWeightedGraph
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

  get empty() {
    return this.nodes.size === 0
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

  hasNode(name) {
    return this.nodes.has(name)
  }

  _buildFullPath(paths, destination) {
    let resultPath = [],
        stack = new Stack(destination),
        previous = paths.get(destination).previous

    while(previous) {
      stack.push(previous)
      previous = paths.get(previous).previous
    }

    while(!stack.empty)
      resultPath.push(stack.pop().name)

    return resultPath
  }

  getShortestPathBetween(fromName, toName) {
    let fromNode = this.nodes.get(fromName),
        toNode = this.nodes.get(toName)

    if(!fromNode)
      throw new Error('Invalid From Node')
    if(!toNode)
      throw new Error('Invalid To Node')

    let paths = new Map(),
        visited = new Set(),
        queue = new PriorityQueueHeap(),
        currentNode, newDistance, currentPath

    for (let node of this.nodes.values()) {
      (node.name === fromName)
        ? paths.set(node, { distance: 0, previous: null })
        : paths.set(node, { distance: Number.MAX_VALUE, previous: null })
    }

    queue.enqueue({ value: fromNode, priority: 0 })
    while(!queue.empty) {
      currentNode = queue.dequeue().value
      visited.add(currentNode)

      for (let edge of currentNode.edges) {
        if(visited.has(edge.to)) continue

        currentPath = paths.get(edge.to)
        newDistance = paths.get(currentNode).distance + edge.weight
        if(newDistance < currentPath.distance) {
          currentPath.distance = newDistance
          currentPath.previous = currentNode
          queue.enqueue({ value: edge.to, priority: newDistance })
        }
      }
    }

    return this._buildFullPath(paths, toNode)
  }

  _hasCycleHelper(currentNode, parentNode, visited) {
    visited.add(currentNode)

    for (let edge of currentNode.edges) {
      if (edge.to.name === parentNode?.name)
        continue
      if (visited.has(edge.to) ||
        this._hasCycleHelper(edge.to, currentNode, visited))
        return true
    }

    return false
  }

  hasCycle() {
    let visited = new Set()

    for (let node of this.nodes.values()) {
      if (!visited.has(node) &&
          this._hasCycleHelper(node, null, visited)
         )
        return true
    }

    return false
  }

  getMinSpanningTree() {
    let tree = new ComplexWeightedGraph()
    if(this.empty) return tree

    let startNode = this.nodes.values().next().value
    tree.addNode(startNode.name)
    if(!startNode.edges.size) return tree

    let edgesQueue = new PriorityQueueHeap(
      [...startNode.edges].map(edge => ({ value: edge, priority: edge.weight }))
    )

    let minEdge, currentNode, nextNode
    while(tree.nodesCount < this.nodesCount) {
      minEdge = edgesQueue.dequeue().value
      currentNode = minEdge.from
      nextNode = minEdge.to

      if(tree.hasNode(nextNode.name)) continue

      tree.addNode(nextNode.name)
      tree.addEdge(currentNode.name, nextNode.name, minEdge.weight)

      for (let edge of nextNode.edges)
        if(!tree.hasNode(edge.to.name))
          edgesQueue.enqueue({ value: edge, priority: edge.weight })
    }

    return tree
  }

  toString() {
    let result = '\n'
    for (let node of this.nodes.values())
      result += `${node.name} ==> ${ node.edges.size ? [...node.edges] : '[]'}\n`
    return result
  }

}
//#endregion
