/*
IsPower
Determine if the given number is a power of some non-negative integer.
Example
For n = 125, the output should be
isPower(n) = true;
For n = 72, the output should be
isPower(n) = false.
Input/Output
[input] integer n A positive integer.
Guaranteed constraints: 1 ≤ n ≤ 400.
[output] boolean
true if n can be represented in the form ab (a to the power of b) where a and b are some non-negative integers and b ≥ 2, false otherwise.
Test Cases:
1:
Input: integer: 125
Expected Output: True
2:
Input:  integer: 72
Expected Output: False
3:
Input: integer: 100
Expected Output: True
4:
Input:  integer: 11
Expected Output: False
5:
Input: integer: 324
Expected Output: True
*/


function isPower(n, base = 2, count = 2) {
    //If n is even, start at 2 for base and count
    //Else start at 3
    if (n % 2 !== 0) {
        var base = 3
        var count = 3
    }
    //While we are at a valid base
    //Because lets say n is 64, you wouldn't
    //check 9 because 9*9 > 64
    while (base * base <= n) {
        while (count <= n) {
            //If our count is == n, n is a power of base
            if (count == n) {
                return true
            }
            //Increment count up to next power of base
            count *= base
        }
        //Increment our base up
        base += 2
        //Reset our count to base^1
        count = base
        console.log(count, base)
    }
    return false
}
console.log(isPower(125))