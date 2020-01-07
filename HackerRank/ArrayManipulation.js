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