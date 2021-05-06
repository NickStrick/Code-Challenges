// This problem was asked by Palantir.

// A typical American-style crossword puzzle grid is an N x N matrix with black and white squares, 
// which obeys the following rules:

// - Every white square must be part of an "across" word and a "down" word.
// - No word can be fewer than three letters long.
// - Every white square must be reachable from every other white square.
// - The grid is rotationally symmetric 
//   (for example, the colors of the top left and bottom right squares must match).

// Write a program to determine whether a given matrix qualifies as a crossword grid.

function crosswordCheck(matrix){
    // this function returns whether a matrix qualifies as a crossword grid.

    // plan
    // for each node in the grid, if the node is a white space,
    //      if node is a white space, 
                // test all the rules to determine if it passes
                // all the rules each time so you dont have to loop more then once
                // return false if any rule is not passed
    // return true

}

let matrix = [
    [0,1,1,0],
    [1,1,1,1],
    [1,1,1,1],
    [0,1,1,0]
]

let matrix2 = [
    [0,1,1,0],
    [1,1,1,0],
    [1,1,1,1],
    [0,1,1,1]
]
console.log(crosswordCheck(matrix)) // true
console.log(crosswordCheck(matrix2)) // false