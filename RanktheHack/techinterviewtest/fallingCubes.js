/*
given a matrix  consisting of the characters
* = block
# = brick
. = free space

return the number of bricks it takes to make the connected blocks touch the bottom

let matrix = [  ['*', '*', '*'],
                ['#', '*', '*'],
                ['.', '*', '#'],
                ['#', '.', '.']] // returns 2 (top left and bottom right bricks only need to be removed)

*/