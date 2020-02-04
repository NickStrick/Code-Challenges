// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
    //SET ARR TO COUNT SUM OF INTERVALS FROM
    let arr = [];
    //FOR EACH INTERVAL, PUSH NUMBERS FROM INDEX 0 TO INDEX 1
    intervals.forEach((interval) => {
        //START COUNTING FROM THE NEXT NUMBER TO INDEX 0 BY ADDING + 1 TO INDEX
        for (let i = interval[0] + 1; i <= interval[1]; i++) {
            arr.push(i);
        }
    });
    //REMOVE DUPLICATES
    arr = arr.filter((v, i, a) => a.indexOf(v) === i);
    //COUNT
    return arr.length;
}

var test1 = [[1, 5]];
var test2 = [[1, 5], [6, 10]];
console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 8);