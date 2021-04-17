// This problem was asked by Microsoft.

// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. 
// If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

function sentenceReconstruction(dictList, s){

}
let diction = ['quick', 'brown', 'the', 'fox']
let sentence = "thequickbrownfox"

console.log(sentenceReconstruction(diction, sentence)) // return ['the', 'quick', 'brown', 'fox']

diction = ['bed', 'bath', 'bedbath', 'and', 'beyond'];
sentence = "bedbathandbeyond"

console.log(sentenceReconstruction(diction, sentence)) // return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond']