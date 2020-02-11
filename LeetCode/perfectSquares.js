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