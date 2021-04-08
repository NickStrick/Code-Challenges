// Write a function that takes a string as input. The string can contain four types of brackets: "[]", "()", "{}", and
// "||". Your function should return a boolean indicating whether or not the string is balanced. Note that pipes
// brackets use the same character to indicate both opening and closing.
// A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets
// of that same type. No bracket can be left unmatched if the string is to be considered balanced. A closing
// bracket also cannot match a corresponding opening bracket that comes after it. Brackets also cannot
// overlap each other, i.e., "[(])".
// Examples:
// "[(])" should return false
// "foo(bar)baz" should return true
// "{{||[]||}}" should return true
// "I am happy to take your donation; any amount will be greatly appreciated." should return true
// "I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me." should return true
// "This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]" should return false
// Note that HackerRank's expected output from your code will be a 0 indicating false or a 1
// indicating true . You may opt to return 1 and 0 as your truthy and falsey values, or actual
// booleans true and false ; either option will work. HackerRank's platform will coerce a true value to 1
// and a false value to 0 behind the scenes. 

/*
 * Complete the 'balancedBrackets' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING string as parameter.
 */


function balancedBrackets(string){
    let brackets = {'{':'}','[':']', '(': ')', '|':'|'};
    let endBrackets = new Set(['}',']',')','|']);

    let stack = [];


    for (let i = 0; i < string.length; i++){
        if (string[i] in brackets || endBrackets.has(string[i])){
            if( string[i] in brackets){
                stack.unshift(string[i]);
            }else if(stack.length > 0 && string[i] == brackets[stack[0]]){
                //pop from stackue
                stack.shift()
            }
        }
    }

    if (stack.length == 0){
        return true;
    }else{
        return false;
    }
}

console.log(balancedBrackets("[(])"));
console.log(balancedBrackets("[]()"));
console.log(balancedBrackets("[this]()sentence"));