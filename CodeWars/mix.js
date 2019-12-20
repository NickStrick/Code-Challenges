//create an object for each string to tally the chars
//keep track of length so you can determine longest string
//populate object with the value being the count and the key being the char
//have a check in case the string of i is lowercase then move forward

function mix(s1, s2) {
    // your code
    // regex at beginning to filter out anything that's lowercase
    s1 = s1.match(/[a-z]/g);
    s2 = s2.match(/[a-z]/g);
    if (!s1 && !s2) {
        return "";
    }
    let running = true;
    let i = 0;
    let str1Obj = {};
    let str2Obj = {};
    while (running) {
        if (i < s1.length) {
            if (str1Obj[s1[i]]) {
                str1Obj[s1[i]]++;
            }
            else if (!str1Obj[s1[i]]) {
                str1Obj[s1[i]] = 1;
            }
        }
        if (i < s2.length) {
            if (str2Obj[s2[i]]) {
                str2Obj[s2[i]]++;
            }
            else if (!str2Obj[s2[i]]) {
                str2Obj[s2[i]] = 1;
            }
        }
        if (i >= s1.length && i >= s2.length) {
            running = false;
        }
        i++;
    } // have objects
    //compare objs for char count to find max count
    let substr = '';
    let subStrArr = [];
    for (let key in str1Obj) {
        // compare -- first check to see if other object has value we are going thru
        //if it does, we can check to see which one is larger 
        //and check to see if it's over 1
        if (str2Obj[key]) {
            let max, tempStr;
            if (str1Obj[key] > str2Obj[key]) {
                tempStr = "1:";
                max = str1Obj[key]
            } else if (str1Obj[key] < str2Obj[key]) {
                tempStr = "2:";
                max = str2Obj[key]
            } else {
                tempStr = "=:";
                max = str1Obj[key]
            }
            if (max > 1) {
                let repeatedChar = key.repeat(max)
                tempStr += repeatedChar;
                subStrArr.push(tempStr);
                //sorting to be continued....
                console.log(subStrArr, "substrarr")
            }
        }
    }
} 