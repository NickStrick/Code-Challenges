//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// function anagrams(word, words) {

//     const word1 = {}
//     word.split("").forEach(item => {
//         if (!word1[item]) {
//             word1[item] = 0
//         }
//         word1[item] += 1
//     })

//     for (let i = 0; i < words.length; i++) {
//         const currWord = words[i].split("");
//         const word2 = {}
//         for (let j = 0; j < currWord.length; j++) {
//             let item = currWord[j];
//             if (item in Object.keys(word1)) {

//             }

//             if (!word2[item]) {
//                 word2[item] = 0
//             }
//             word2[item] += 1
//         }
//     }
//     console.log(word1, word2)
//     return [word1, word2]
// }

function anagrams(word, words) {
    word = word.split('').sort().join('').toLowerCase()
    return words.filter((x) => {
        if (x.length === word.length) {
            const currentWord = x.split('').sort().join('').toLowerCase()
            if (word === currentWord) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    })
}

// def anagrams(word, words):
//     word_length = len(word)

//     # If word is empty, return empty array
//     if word_length == 0: return []

//     # Create list of equal length strings from words
//     eq_len_words = [word for word in words if len(word) == word_length]

//     # Create lowercase & sorted word
//     sorted_word = sorted(word.lower())

//     # lower() sorted words, return final list of anagrams
//     return [word for word in eq_len_words if sorted(word.lower()) == sorted_word]

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);