// This problem was asked by Triplebyte.

// You are given n numbers as well as n probabilities that sum up to 1. 
// Write a function to generate one of the numbers with its corresponding probability.

// For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], 
// your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.

// You can generate random numbers between 0 and 1 uniformly.

function probabilityGenerator(n, probabilities){
    //plan
    // generate a random int between 0 and 100
    // if int is probability[i] + all previous proababilies times 10
        // return n[i]

}

console.log(probabilityGenerator([1,2,3,4], [0.1,0.5,0.2,0.2]));

console.log(probabilityGenerator([5,6,7,8], [0.2,0.2,0.5,0.1]));
