//https://justjavascript.com/

function commonElements(arr1, arr2) {
    let newArr = []
    for (let ele of arr2) {
        if (arr1.indexOf(ele) > -1) {
            newArr.push(ele)
        }
    }
    return newArr
}

function sumOfDigits(num) {
    num = num.toString().split('')
    return num.reduce((acc, el) => acc + Number(el), 0);
}