// This problem was asked by WhatsApp.

// Given an array of integers out of order, determine the bounds of the smallest 
// window that must be sorted in order for the entire array to be sorted. 
// For example, given [3, 7, 5, 6, 9], you should return (1, 3).

function findSortBounds(arr){

    //plan
    // at each iteration check if the next number is smaller
    //  if it is, start to count the sort bounds, and go until no sorting is needed
    //  return the  number of bounds and the length of those bounds

}

console.log(findSortBounds([3,7,5,6,9]))