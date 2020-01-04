//Given N, Q, and Q queries, execute each query.

function dynamicArray(n, queries) {

    // Functions
    const firstOperation = (query) => {
        let s = ((query[1] ^ lastAnswer) % n)
        if (!seq[s]) {
            seq[s] = []
        }
        seq[s].push(query[2])
    }
    const secondOperation = (query) => {
        let s = ((query[1] ^ lastAnswer) % n)
        lastAnswer = seq[s][query[2]]

        res.push(lastAnswer)
    }

    // Loop
    let lastAnswer = 0;
    let seq = {};
    let res = []
    queries.forEach((query) => {
        if (query[0] === 1) {
            firstOperation(query);
        } else if (query[0] === 2) {
            secondOperation(query);
        }
    })

    return res

}

console.log(dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]))