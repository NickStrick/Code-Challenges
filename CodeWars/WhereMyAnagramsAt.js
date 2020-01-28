//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {

    const word1 = {}
    word.split("").forEach(item => {
        if (!word1[item]) {
            word1[item] = 0
        }
        word1[item] += 1
    })

    for (let i = 0; i < words.length; i++) {
        const currWord = words[i].split("");
        const word2 = {}
        for (let j = 0; j < currWord.length; j++ {
            let item = currWord[j];
            if (item in Object.keys(word1)) {

            }

            if (!word2[item]) {
                word2[item] = 0
            }
            word2[item] += 1
        })
    }
    console.log(word1, word2)
    return [word1, word2]
}