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



//c# version


    // Complete the minimumSwaps function below.
    // static int minimumSwaps(int[] arr) 
    // {
    //     int swaps = 0;
    //     for(int i = 0; i < arr.Length; i++) {
    //         while(arr[i] != i + 1) {
    //             SwapInts(arr, i, arr[i] - 1);
    //             swaps++;
    //         }
    //     }
    //     return swaps;
    // }
    // static void SwapInts(int[] array, int position1, int position2)
    // {
    //     //
    //     // Swaps elements in an array.
    //     //
    //     int temp = array[position1]; // Copy the first position's element
    //     array[position1] = array[position2]; // Assign to the second element
    //     array[position2] = temp; // Assign to the first element
    // }