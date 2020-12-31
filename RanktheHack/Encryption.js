//https://www.hackerrank.com/challenges/encryption/problem


function encryption(s) {
    let result = '';
    let length = s.length;

    let cols = Math.ceil(Math.sqrt(length));

    for (let i = 0; i < cols; i++) {

        for (let j = i; j < length; j += cols) {
            result += s[j];
        }
        result += ' ';
    }

    return result;

}