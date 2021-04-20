// There are N prisoners standing in a circle, waiting to be executed. 
// The executions are carried out starting with the kth person, and removing every successive kth person 
// going clockwise until there is no one left.

// Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

// For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

// Bonus: Find an O(log N) solution if k = 2.

function lastPrisoner(n, k){
    //write your plan here

    // test inputs
    // n = 5, k=2
        //      - 2
        //2,3,4 - 4
        //4,5,1 - 1
        //1!1,5 - 5
        //5,4,3 - 3
}


let n = 5
let k = 2
console.log(lastPrisoner(n, k))