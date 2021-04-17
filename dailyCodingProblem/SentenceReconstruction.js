// This problem was asked by Microsoft.

// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. 
// If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

function sentenceReconstruction(dictList, s){
    /*
        loop throught the array
        each time check if current string in dictionary
            if it is, restart string and add to result array

    */

}
let diction = {'quick':0, 'brown':1, 'the':2, 'fox':3}
let sentence = "thequickbrownfox"

console.log(sentenceReconstruction(diction, sentence)) // return ['the', 'quick', 'brown', 'fox']

diction = {'bed':0, 'bath':1, 'bedbath':2, 'and':3, 'beyond':4};
sentence = "bedbathandbeyond"

console.log(sentenceReconstruction(diction, sentence)) // return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond']