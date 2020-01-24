// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/train/javascript

function oddRow(n) {
    let arr = []
    if (n == 1) return [1]
    if (n == 2) return [3, 5]
    if (n.length % 2 == 1) {
        arr.push((n * n) - 1)
        arr.push((n * n) + 1)
    } else {
        arr.push(n * n)
    }
    while (arr.length < n) {
        arr.unshift((arr[0]) - 2)
        arr.push((arr[arr.length - 1]) + 2)
    }
    return arr
}