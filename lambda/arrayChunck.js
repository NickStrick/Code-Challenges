function chunk(array, size) {
    let chunked = []
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + Math.min(size, array.length - 1)))
    }
    return chunked
}

// second soolution
function chunk(array, size) {
    let chunked = []
    for (let item of array) {
        let lastItem = chunked[chunked.length - 1]
        if (!lastItem || lastItem.length === size) {
            chunked.push([item])
        } else {
            lastItem.push(item)
        }
    }
    return chunked
}