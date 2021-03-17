

// This problem was asked by Google.

// You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string. Determine whether the parentheses are balanced.

// For example, (()* and (*) are balanced. )*( is not balanced.


// function determineBalanced(string) {
//     // make a queue, of open parenthasee, when meet closing, remove from queue
//     //  if closing first, check if * is before it, if it is , remove, if not return false

//     let pairs = {
//         '(': ')',
//         '*': []
//     }
//     let que = []

//     for (let i = 0; i < string.length; i++) {
//         // * case
//         if (string[i] == '*') {
//             pairs['*'].push(i)
//         }
//     }
//     console.log(pairs)

//     return true
// }

function determineBalanced(string) {
    // starting parenth, look for matching, when found, go back and do the next one, if not found look at *'s


}

console.log(determineBalanced('(()*')) //true
console.log(determineBalanced('(*)'))  //true
console.log(determineBalanced(')*('))  //false
console.log(determineBalanced('(()*)*)'))