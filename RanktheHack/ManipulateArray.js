//Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.
// arrayManipulation has the following parameters:
// n - the number of elements in your array
// queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

// Complete the arrayManipulation function below.

function arrayManipulation(n, queries) {

    let res = new Array(n).fill(0);
    let biggest = 0
    console.log(n, queries, res)

    for (let i = 0; i < queries.length; i++) {
        let query = queries[i]
        for (let j = query[0] - 1; j < query[1]; j++) {
            res[j] += query[2]
            if (res[j] > biggest) {
                biggest = res[j]
            }
        }

    }
    return biggest

}

let arr1 = [ // 200
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]
let arr2 = [ // 10
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
]
let arr3 = [ // 31
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15]
]

console.log(arrayManipulation(5, arr1))
console.log(arrayManipulation(10, arr2))
console.log(arrayManipulation(10, arr3))