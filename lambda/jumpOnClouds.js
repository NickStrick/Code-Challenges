// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

// while there are clouds in the list
//   try jumping 2
//     if it's a zero 
//       count the jump and repeat
//     else if it's a one
//       try jumping one
//         if it's a zero 
//           count the jump and repeat
// return jump count

function jumpingOnClouds(c) {
    let jumps = 0
    for (let i = 0; i < c.length - 1; i += 2) {
        if (c[i + 2] === 0) {
            jumps++
        }
        else {
            i--
            jumps++
        }
    }
    return jumps
}
