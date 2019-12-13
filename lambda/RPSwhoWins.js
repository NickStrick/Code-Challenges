
function rockPaperScissors(h) {
    let rpsArray = ['r', 'p', 's']
    let b = Math.floor(Math.random() * 3) + 1
    b = rpsArray[b - 1]
    h = h.toLowerCase()

    switch (b) {
        case 'r':
            console.log("bot chooses rock!")
            break;
        case 'p':
            console.log("bot chooses paper!")
            break;
        case 's':
            console.log("bot chooses scissors!")
            break;
    }

    switch (h) {
        case 'r':
            console.log("You choose rock!")
            break;
        case 'p':
            console.log("You choose paper!")
            break;
        case 's':
            console.log("You choose scissors!")
            break;
    }

    switch (h + b) {
        case 'pp':
        case 'rr':
        case 'ss':
            console.log("Its a tie")
            break;
        case 'pr':
        case 'sp':
        case 'rs':
            console.log("You Win!")
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            console.log("the Bot Wins!")
            break;

    }
}
rockPaperScissors('R');