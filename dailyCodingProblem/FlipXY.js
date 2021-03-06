// This problem was asked by LinkedIn.

// You are given a string consisting of the letters x and y, such as xyxxxyxyy. In addition, you have an operation called flip,
//  which changes a single x to y or vice versa.

// Determine how many times you would need to apply this operation to ensure that all x's come before all y's. 
// In the preceding example, it suffices to flip the second and sixth characters, so you should return 2.

function flipIt(xy){

    // make sure all x's come before all y's
    // if y in x section, flip y
    // if x in y section, flip x
    // count flips, return amount

    // determine if y section if more then one y in a row, when it flips , reverse the function
}

console.log(flipIt('xyxxxyxyy')) // returns 2 // 2 slips, index 1 & 5