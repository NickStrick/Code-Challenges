/*
Caesar Box
Caesar Box is a simple transposition cipher used in the Roman Empire, in which characters of the given message are broken into multiple lines that form a square when stacked up and then read the square column by column.
Given a message, encode it.
Example
For inputString = "a message", the output should be
caesarBoxCipherEncoding(inputString) = "aea sgmse".
The square will look as follows:
a m
ess
age
Thus, the encoded message will be aea sgmse.
Input/Output
[input] string inputString
A string of length n2 for some integer n.
Guaranteed constraints:
1 ≤ inputString.length ≤ 16.
[output] string
  
Test Cases:
1:
Input: inputString: "a message"
Expected Output: "aea sgmse"
2:
Input: inputString: "sixteenletters16"
Expected Output: "seerietsxnt1tle6"
*/


function caesarBoxCipherEncoding(inputString) {

    // square root of length
    // divide into strings based on length/
    // put together horizontally
    let rows = Math.sqrt(inputString.length)
    let startIndex = 0
    let splitInput = []

    for (let i = 0; i < rows; i++) {
        splitInput[i] = inputString.substring(startIndex, startIndex + rows)
        startIndex += rows
    }

    let result = ''
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < splitInput.length; j++) {
            result += splitInput[j][i]
        }
    }
    return result
}

caesarBoxCipherEncoding("a message") // aea sgmse

//=================================================
// Zoom meeting solutions
//=================================================

function caesarBoxCipherEncoding(inputString) {
    // const length = Math.sqrt(inputString.length)
    // const map = {}
    // for(let i = 0; i < inputString.length; i++){
    //     let x = i % length
    //     let y = Math.floor(i / length)
    //     map[`${x}, ${y}`] = inputString[i]   
    // }
    // let string = ""
    // for(let j = 0; j < length; j++){
    //     for(let k = 0; k < length; k++){
    //       string += map[`${j}, ${k}`]
    //     } 
    // }
    // return string

    const length = Math.sqrt(inputString.length)
    let string = ""
    for (let j = 0; j < length; j++) {
        for (let k = j; k < inputString.length; k += length) {
            string += inputString[k]
        }
    }
    return string
}
caesarBoxCipherEncoding("a message")