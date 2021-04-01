function binaryPatternMatching(pattern, s) {
    // s = s.split('');
    let vowels = new Set();
    vowels.add('a');
    vowels.add('i');
    vowels.add('e');
    vowels.add('o');
    vowels.add('u');
    vowels.add('y');
    
    let result = 0;
    
    for (let i = 0; i <= s.length-pattern.length; i++){
        let currPat = '';
        let match = 1;
        for (let j = 0; j < pattern.length; j++){
             if( pattern[j] == '1' && vowels.has(s[i+j])){
                 match = 0;
                 break;
             }else if (pattern[j] == '0' && !(vowels.has(s[i+j]))){
                 match = 0;
                 break;
             }
        }
        result += match
        console.log(match)
    }
    return result

}