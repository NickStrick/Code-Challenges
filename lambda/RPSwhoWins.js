
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

// function rockPaperScissors(h){
//     let ai = Math.floor(Math.random() * 2)
//     switch(ai){
//       case 0: 
//         console.log('AI - rock')
//         break;
//       case 1: 
//         console.log('AI - paper')
//         break;
//       case 2: 
//         console.log('AI - scissors')
//         break;
//     };
//     switch(h){
//       case 0: 
//         console.log('Player - rock')
//         break;
//       case 1: 
//         console.log('Player - paper')
//         break;
//       case 2: 
//         console.log('Player - scissors')
//         break;
//     };
//     if (ai === h){
//       return 'Tie'
//     }else if(ai == 0 && h == 2 || ai == 1 && h == 0 || ai == 2 && h == 1){
//       return 'Ai wins'
//     }else if(ai == 0 && h == 1 || ai == 1 && h == 2 || ai == 2 && h == 0){
//       return 'Player wins'
//     }
//   }
//   rockPaperScissors(2)

// function rockPaperScissors(h){
//     let option = ["rock", "paper", "scissor"]
//     let bot = option[Math.floor(Math.random() * option.length)]
//     if(h === "rock" && bot === "paper"){
//         console.log("bot wins")
//     } else if(h === "scissor" && bot ===  "rock") {
//         console.log("bot wins")
//     } else if(h === "paper" && bot === "scissor"){
//         console.log("bot wins")
//     } else if(h === bot) {
//         console.log("its a tie")
//     }
//     else {
//         console.log("you wins")
//     }
//   }
//   rockPaperScissors("rock")