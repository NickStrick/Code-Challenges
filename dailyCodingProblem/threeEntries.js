//  https://repl.it/@Nstricker/problem339#index.js

// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Given an array of numbers and a number k, determine if there are three entries in the array which add up to the specified number k. For example, given [20, 303, 3, 4, 25] and k = 49, return true as 20 + 4 + 25 = 49.


//  loop through array
// add current index to solution list
// loop through rest of list after index, 

// can we do this recursively?
// 

function threeEntries(arr, k) {
    let solutionSet = []
    let currSet = []


    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] < k) {
            currSet = [arr[i]]
        }

    }
    entryLoop()

    function entryLoop(total, index, currSet) {
        if (arr[index])
    }


    return solutionSet
}



input = [20, 303, 3, 4, 25]
console.log(threeEntries(input, 49)) // true