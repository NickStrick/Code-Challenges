/*
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:
*/

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    console.log(arr, arr.length - 2)
    // let totals = []
    let max = 0

    for (let i = 1; i <= arr.length - 2; i++) {
        for (let j = 1; j <= arr.length - 2; j++) {
            let sum = arr[i][j] +
                arr[i - 1][j - 1] +
                arr[i - 1][j] +
                arr[i - 1][j + 1] +
                arr[i + 1][j - 1] +
                arr[i + 1][j] +
                arr[i + 1][j + 1];
            // totals.push(sum)
            if (sum > max) {
                max = sum
            }

        }
    }
    return max

}
