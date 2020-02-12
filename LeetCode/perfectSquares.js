// https://leetcode.com/problems/perfect-squares/

// class Solution:
//     def numSquares(self, n: int) -> int:
//         #Lagrange's four-square theorem states that all natural numbers can be represented by the sum of at most 4 perfect squares. Therefore we only have to check for the cases 1-3, otherwise the answer is 4
//         #Create list of perfect squares
//         squares = []
//         for i in range(int(n**.5), 0, -1):
//             squares.append(i**2)
//         if int(n**.5) ** 2 == n:
//           return 1
//         for square in squares:
//           if n - square in squares:
//             return 2
//         for square1 in squares:
//           for square2 in squares:
//             if n - (square1 + square2) in squares:
//               return 3
//         return 4

var numSquares = n => {

    //returns if the number x is a valid square root (  can be represented as the square of an integer )
    let isSquare = x => Math.floor(Math.sqrt(x)) ** 2 === x

    if (isSquare(n)) return 1 // that would be the fact that its equal to itself

    // legendre's three square theorem: a natural number n can be represented as 
    // the sum of three squares of integers if and only id : n!= 4^x ( 8*m+7 )
    while (n % 4 === 0) n /= 4
    if (n % 8 === 7) return 4 // if n%8!==7 that means that my number can be written
    // as a sum of at most 3 squares
    // , otherwise the answer is definitely 4 because of Lagrange's theorem.
    // ok, we ruled out the possibility of result 4
    // there are only 2 results remaining, 2 and 3

    //manually checking for result 2
    for (let i = 0; i <= n; i++) {
        // if x=n-i*i   and x is a valid square then OBVIOUSLY
        // n=i^2 +sqrt(x)^2 , so n is a square of two numbers
        if (isSquare(n - i * i)) return 2
    }

    // otherwise
    return 3
}