class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(value) { return this.queue.push(value) }

    dequeue() { return this.queue.shift() }
}
/*
 * Complete the truckTour function below.
 * Suppose there is a circle. There are  petrol pumps on that circle. Petrol pumps are numbered  to  (both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1) the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the next petrol pump.

Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.

Input Format

The first line will contain the value of .
The next  lines will contain a pair of integers each, i.e. the amount of petrol that petrol pump will give and the distance between that petrol pump and the next petrol pump.
 */

function truckTour(petrolpumps) {
    /*
     * Write your code here.
     * 
     * we assuming that the amount of petrol
     * 
     * valid solutoiun we amke it all the way saround
     * failed solution, we dont make it
     * 
     * input is array of numebr pairs
     * solution is an integer - index of smallest pump
     * 
     * start at the first pump, try to go around
     * if we run out of gass, move to the next one, reset and try again
     * use a queu to keep trakc of the pumps, add each one to the back
     * after yo visit it, thus representing a circle
     * 
     * setup stuff
     */

    // make a queue
    let route = new Queue()
    // put stuff in it
    // keep track of start, how far weve gone, gas, 

    petrolpumps.forEach((item) => route.enqueue(item));
    console.log(route)


    let start = 0;
    let travelled = 0;
    let gas = 0;

    while (travelled < petrolpumps.length) {
        let pump = route.dequeue()
        gas += pump[0]

        if (gas >= pump[1]) {//we can make it
            travelled += 1
            gas -= pump[1]
        } else { // ran out of gas start over at next station
            start += travelled + 1
            travelled = 0
            gas = 0

        }
        route.enqueue(pump)
    }

    return start

}