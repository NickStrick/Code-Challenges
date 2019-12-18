// narssisti c function
function narcissistic(value) {
    // Code me to return true or false
    let strNum = value + '';
    let sum = 0;
    let exponent = strNum.length;
    for (let i = 0; i < strNum.length; i++) {
        sum += Math.pow(parseInt(strNum[i]), exponent);
        console.log(sum)
    }
    return sum === value
}