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