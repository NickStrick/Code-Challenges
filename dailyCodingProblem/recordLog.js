// This problem was asked by Twitter.

// You run an e-commerce website and want to record the last N order ids in a log. 
// Implement a data structure to accomplish this, with the following API:

//      - record(order_id): adds the order_id to the log
//      - get_last(i): gets the ith last element from the log. 
//          i is guaranteed to be smaller than or equal to N.

// You should be as efficient with time and space as possible.

class Logs{
    constructor(recordList){
        this.records = [...recordList]
    }
    
    record = (order_id) => {
        this.records.push(order_id)
    }
    get_last = (i) => {
        return this.records[i]
    }
}

function recordLogs(log, n){

    //plan
    //  make a dictionary of the recorded logs
    //  make sure their sorted and record them with get_last

}



console.timeLog(recordLogs(new Logs([1,2,3,4,5]), 10))