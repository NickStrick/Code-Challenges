function chunk(array, size) {
    let chunked = []
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + Math.min(size, array.length - 1)))
    }
    return chunked
}
