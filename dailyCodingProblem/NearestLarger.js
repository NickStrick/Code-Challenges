// This problem was asked by Google.

// Given an array of numbers and an index i, 
// return the index of the nearest larger number of the number at index i, 
// where distance is measured in array indices.

// For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

// If two distances to larger numbers are the equal, then return any one of them. 
// If the array at i doesn't have a nearest larger integer, then return null.

// Follow-up: If you can preprocess the array, can you do this in constant time?\

function nearestLarger(arr, startIndex){

    // indicy sort function
    function sortWithIndeces(toSort) {
        // store value and indicy as a tuple in array
        for (var i = 0; i < toSort.length; i++) {
          toSort[i] = [toSort[i], i];
        }
        //sort the array by value
        toSort.sort(function(left, right) {
          return left[0] < right[0] ? -1 : 1;
        });
        // turn array in to sorted indicies
        
        for (var j = 0; j < toSort.length; j++) {
          toSort[j] = toSort[j][1];
        }
        return toSort;
      }
      
      var test = ['b', 'c', 'd', 'a'];
      console.log(sortWithIndeces(test));

}


let arr = [4, 1, 3, 5, 6];
console.log(nearestLarger(arr, 0)) // returns 3

let arr2 = [3,6,2,1,5,4,1,4,1,9] // return 8