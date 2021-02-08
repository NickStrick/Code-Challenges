// This problem was asked by Affirm.

// Given a array of numbers representing the stock prices of a company in chronological order, 
// write a function that calculates the maximum profit you could have made from buying and selling that stock. 
// You're also given a number fee that represents a transaction fee for each buy and sell transaction.

// You must buy before you can sell the stock, but you can make as many transactions as you like.

// // For example, given [1, 3, 2, 8, 4, 10] and fee = 2, you should return 9, since you could buy the stock at 
// 1 dollar, and sell at 8 dollars, and then buy it at 4 dollars and sell it at 10 dollars.
//  Since we did two transactions, there is a 4 dollar fee, so we have 7 + 6 = 13 profit minus 4 dollars of fees.

console.log('working')

function affirmQuestion (input, fee){

    let n = input.length;
    if (n == 1){ return }

    let solutions = []

    //traverse through given price array
    let i = 0
    while (i < (n-1)){

        //find local minimal
        // note that limit is (n-2),
        //comparing present element with next one
        while ((i < (n - 1)) && (input[i + 1] <= input[i])){
            i += 1
        }
        //if we reach end, break
        //as no futher solution possible
        if (i == n - 1){ break;}

        let buy = i;
        i += 1

        //find local max
        //comparing previous, limit is n-1
        while ((i < n) && (input[i] >= input[i - 1])){
            i += 1
        }

        //store max index
        let sell = i - 1;

        // stroer in solutoin set
        solutions.push([buy, sell])
    }

    return solutions
}

console.log(affirmQuestion([1,3,2,8,4,10], 2))