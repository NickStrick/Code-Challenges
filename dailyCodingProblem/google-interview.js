// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given a string which we can delete at most k, return whether you can make a palindrome.

// For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

//palindrome conditions:
  //if is empty or all letters the same it is a palindrome
  // then compare first and last of string, 
  // if not same, not palindrome, remove, decrease k
  // loop till k == 0
  // retrun true or false

  
function palindromeMaker (s, k){

    if (s.length === 0 || s.length === 1 ){
      return true
    }
  
    let i = 0;
    let removeable = k;
    let strLoop = s
  
    while (i < (((s.length)/2)) && removeable > 0){
        // compare first and last of string
        // if not same, check next string after i,
                      // if same as last, remove first
                      // else do the oppsite on other end, remove last
        sFirst = s[i]
        sLast = s[s.length - (i+1)]
        if (sFirst !== sLast){
          if(s[i+1] === sLast){
            //remove first, decrease removable
            strLoop = strLoop.slice(0,i) + strLoop.slice(i+1);
            console.log(str)
            removeable--;
          }else if(sFirst === s[s.length - (i+2)]){
            //remove last, decrease removable
            strLoop
            removeable--;
          }else{
            console.log('neither')
          }
  
          }
          i++;
          }
  
  
        
    
    console.log(strLoop, removeable);
  
    return true
  }
  
  console.log(palindromeMaker('',2))
  console.log(palindromeMaker('waterrfetawx',2))