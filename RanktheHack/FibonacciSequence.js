// The Fibonacci numbers are a sequence of numbers where each number after the first two is a sum of the
// prior two. As an illustration, here is an example sequence with n = 8: (0, 1, 1, 2, 3, 5, 8, 13).
// Given an integer n, calculate the first n numbers in the Fibonacci sequence. Return an array containing the
// n integers

// Function Description
// Complete the function fibonacci in the editor below. The function must return an array of n Fibonacci
// numbers starting with 0 as the first fibonacci number.
// fibonacci has the following parameter(s):
//  n: integer, the length of the Fibonacci series to return
// Constraints
// 1 ≤ n ≤ 10


function fibonacci(n){

    let fib = [0,1];

    let index = 2;

    while (fib.length < n) {
        fib.push(fib[index-1] + fib[index-2]);
        index++
    }
    return fib
    
}

console.log(fibonacci(8))
