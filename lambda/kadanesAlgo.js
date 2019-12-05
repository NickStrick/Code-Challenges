//Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all the numbers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.
let intArray = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// 19
function kadanesAlgo(array) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        results.push(temp)
        for (j = i + 1; j < array.length; j++) {
            results.push(array[j] + temp);
            temp += array[j]
        }
    }
    //console.log(results)
    return Math.max(...results)
}
console.log(kadanesAlgo(intArray))


function kadanesAlgo(array) {
    let maxEndingHere = array[0]
    let maxSoFar = array[0]
    for (let i = 1; i < array.length; i++) {
        let currentNum = array[i]
        maxEndingHere = Math.max(currentNum, maxEndingHere + currentNum)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
    return maxSoFar
}