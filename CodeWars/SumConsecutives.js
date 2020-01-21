function sumConsecutives(s) {
    let count = 0
    sum = []
    a = s[0]
    sum.push(a)
    for (let i = 1; i < s.length; i++) {
        if (s[i] === a) {
            sum[sum.length - 1] += a
        }
        else {
            a = s[i]
            sum.push(a)
        }
    }
    return sum
}