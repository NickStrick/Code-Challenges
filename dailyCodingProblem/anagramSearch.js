
//  Daily Coding Problem
//  Good morning! Here's your coding interview problem for today.
 
//  This problem was asked by Google.
 
//  Given a word W and a string S, find all starting indices in S which are anagrams of W.
 
//  For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

function anagramSearch(W, S){

    // at each indicy check if letter is in anagram
    // if is, set object and check  off what in word has been used
    //if from starting indicy, uses all letters in object, att indicy to result list

    //set default checklist
    let wCheckArr = W.split('');
    let wCheckDefault = {}
    for (let i = 0; i< wCheckArr.length;i++){
        if (wCheckDefault[wCheckArr[i]]){
            wCheckDefault[wCheckArr[i]].push(false)
        }else{
        wCheckDefault[wCheckArr[i]] = [false]
        }
    }
    console.log(wCheckDefault);

    //function to find anagram
    function findAnagram(index){
            //loop through string to check if current index and next indexes are true
            // add strarting index to result array
        let wordCheck = {...wCheckDefault}


    }

    for (let i = 0; i < S.length; i++){
        if (wCheckDefault.hasOwnProperty(S[i])){
            findAnagram(i);
        }
    }
    
    //return result array
}


console.log(anagramSearch("aba", "abxaba")) // [0,3,4]