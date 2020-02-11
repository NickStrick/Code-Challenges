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

function commonElements(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                newArray.push(arr1[i]);
            }
        }
    }
    return newArray;
}