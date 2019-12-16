//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

//solution 1
function narcissistic(value) {
    let arr = value.toString()
    arr = arr.split('')
    let pow = arr.length
    let total = 0
    arr.forEach(num => total += Math.pow(num, pow))
    return total === value
}