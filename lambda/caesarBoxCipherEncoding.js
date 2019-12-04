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