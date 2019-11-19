'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);

    let output = Number.POSITIVE_INFINITY;

    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i - 1] - arr[i])
        if (diff < output) {
            output = diff;
        }
    }


    return output;

}
// 3
// 3 -7 0
// 3

// 10
// -59 -36 -13 1 -53 -92 -2 -96 -54 75
//1

// 5
// 1 -3 71 68 17
//3