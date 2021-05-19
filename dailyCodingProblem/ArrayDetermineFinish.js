// You are given an array of nonnegative integers. 
// Let's say you start at the beginning of the array and are trying to advance to the end. 
// You can advance at most, the number of steps that you're currently on. 
// Determine whether you can get to the end of the array.

// For example, given the array [1, 3, 1, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return true.

// Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.

function canFinish(arr){


    //plan

    // go through array, at each interation
        // go the furthest you can, if not go one less
        // do this recursively, which lets each iteration determine if it can finish

}

console.log(canFinish([1,3,1,2,0,1]))//true
console.log(canFinish([1,2,1,0,0])) //false