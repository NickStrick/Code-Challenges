// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
//https://codeshare.io/GqV3rX

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swapCount = 0;
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] != i + 1) {
            let temp = arr[i];
            [arr[i], arr[temp - 1]] = [arr[temp - 1], arr[i]];
            swapCount++;
        }
    }
    return swapCount;
}


// function minimumSwaps(arr) {
// 	let swapCount = 0;
//   for(let i = 1; i < arr.length; i++){
//   	while(arr[i] != i+1) {
//     	[arr[i], arr[arr[i]-1]] = [arr[arr[i]-1], arr[i]];
//         swapCount++;
//     }

//   }
// }