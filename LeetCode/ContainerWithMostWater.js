/*
 @param {number[]} height
 @return {number}
 */
// var maxArea = function(height) {
//     let maxWater = 0;
//     for (let i =0 ; i < height.length; i++){
//         for (let j = i+1; j < height.length; i++){
//             // get the minimum of your two heights, times the distance between them
//             let newArea = Math.min(height[i], height[j] * (j - i));
//             maxWater = Math.max(maxWater, newArea)

//         }
//     }
//     return maxWater

// };

var maxArea = function (height) {
    let maxWater = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        maxWater = Math.max(maxWater, (j - i) * Math.min(height[i], height[j]));
        height[i] < height[j] ? i++ : j--
    }
    return maxWater

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)