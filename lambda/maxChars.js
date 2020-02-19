//  Object.keys(obj).includes(char) ? obj[char]++ : (obj[char] = 1);

function maxChar(str) {
    let obj = {}
    for (let char of str) {
        if (!obj[char]) {
            obj[char] = 1
        } else {
            obj[char] += 1
        }
    }
    return Object.keys(obj).reduce((a, b) => {
        return obj[a] > obj[b] ? a : b
    })
}