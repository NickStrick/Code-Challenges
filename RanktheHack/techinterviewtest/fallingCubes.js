/*
given a matrix  consisting of the characters
* = block
# = brick
. = free space

return the number of bricks it takes to make the connected blocks touch the bottom

let matrix = [  ['*', '*', '*'],
                ['#', '*', '*'],
                ['.', '*', '#'],
                ['#', '.', '.']] // returns 2 (top left and bottom right bricks only need to be removed for block to touch bottom)

*/

/*
    i bassically have to move the solid blocks down, and remove bricks until, one of the solids touches the bottom of the matrix
    - so find a brick, remove it, if solid can move down only replacing free spaces, move, else, find and next brick and check again
        - do this until one of the solids reaches the final array in the matrix


TEST INPUTS - step by step
        - remove brick
        - add to counter
        - move solids if you can
    - until solids in bottom array

            ['*', '*', '*'],
            ['.', '*', '*'],
            ['.', '*', '#'],
            ['#', '.', '.']
            1

            ['*', '*', '*'],
            ['.', '*', '*'],
            ['.', '*', '.'],
            ['#', '.', '.']
            2

            ['', '', ''],
            ['*', '*', '*'],
            ['.', '*', '*'],
            ['#', '*', '.']

            return 2

*/

function fallingCubes(matrix){

}

let matrix1 = [  ['*', '*', '*'],
                ['#', '*', '*'],
                ['.', '*', '#'],
                ['#', '.', '.']]
console.log(fallingCubes(matrix1))