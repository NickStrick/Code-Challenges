// This problem was asked by Facebook.

// Given a circular array, compute its maximum subarray sum in O(n) time. 
// A subarray can be empty, and in this case the sum is 0.

// For example, given [8, -1, 3, 4], 
// return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

// Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.

function subarraySum(arr){
    //plan
    // walk through array add all the positives together
    //      keep track of the lowest negative number
    // if through array and no positives found, return lowest negative 

}

console.log(subarraySum([8,-1,3,4])) // 15
console.log(subarraySum([-4,5,1,0])) // 6