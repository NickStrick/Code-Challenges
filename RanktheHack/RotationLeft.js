// Left Rotation
'use strict';
rocess.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine(nums, d) {
    let left = nums.splice(0, d)
    nums = [...nums, ...left]
    console.log(nums.join(' '));
    return nums.join(' ')
}



function main() {
    const nd = inputString[0].split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine(inputString[1].split(' '), d).split(' ').map(aTemp => parseInt(aTemp, 10));
}