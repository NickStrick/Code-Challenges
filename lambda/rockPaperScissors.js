function rockPaperScissors(n) {
    const results = [];
    const options = ['rock', 'paper', 'scissors'];

    const pointers = Array(n).fill(0)
    let pointer = pointers.length - 1

    while (pointers[0] !== 3) {
        while (pointers[pointer] < 3) {
            console.log(pointers)
            results.push(pointers.map((i) => options[i]))
            pointers[pointer]++
        }

        do {
            pointers[pointer] = 0
            pointer--
        } while (pointers[pointer] === 2 && pointer > 0)

        pointers[pointer]++;
        pointer = pointers.length - 1;
    }

    return results;
}