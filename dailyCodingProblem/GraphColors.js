// Given an undirected graph represented as an adjacency matrix and an integer k, 
// write a function to determine whether each vertex in the graph can be colored 
// such that no two adjacent vertices share the same color using at most k colors.

function GraphColors(graph, k){
    //plan
    // go through the  graph and set each point with a color as well as its adjacent nodes
    // check adjacent node to see if giving color possible, if not, try until no more colors
    // when a solution cant be found return false
    // if you get through the whole graph return true

}

let matrix = [
    [0,1,1],
    [1,1,0],
    [1,0,0],
]

console.log(GraphColors(matrix, 3)) // true