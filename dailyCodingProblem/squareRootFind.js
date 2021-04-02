// Given a real number n, find the square root of n. For example, given n = 9, return 3.

function squareRoot(n){

    let i = 0;
    let rooted = i * i;

    while( rooted != n && i < 50){
        i++
        rooted = i*i;
    }
    return i;
}