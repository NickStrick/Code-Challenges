//https://www.codewars.com/kata/ticker/train/javascript

function display() {
    let tick = 0
    setInterval(() => {
        console.log(ticker('Beautiful is better than ugly.', 10, tick))
        tick++
    }, 1000)
}
const ticker = (text, width, tick) => {
    let textStr = text.padStart(width + text.length)
    let sliceStr = textStr.slice(tick % textStr.length, width + (tick % textStr.length))
    return sliceStr.padEnd(width)
}
display()