//Given an integral number, determine if it's a square number:

var isSquare = function (n) {
    return Math.sqrt(n) == Math.floor(Math.sqrt(n))
}