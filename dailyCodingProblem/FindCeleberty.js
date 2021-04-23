// This problem was asked by Pinterest.

// At a party, there is a single person who everyone knows, but who does not know anyone in return 
// (the "celebrity"). To help figure out who this is, you have access to an O(1) method called knows(a, b), 
// which returns True if person a knows person b, else False.

// Given a list of N people and the above operation, find a way to identify the celebrity in O(N) time.

// predefined methods
class Person {
    constructor(id, peopleList) {
      this.id = id;
      this.peopleList = peopleList;
    }

    knows = (a,b) => {
        if (b in a.peopleList){
            return true;
        }
        return false;
    }
  }
  let knows = (a,b) => {
    if (b in a.peopleList){
        return true;
    }
    return false;
}

// solution

function findCeleberty(people){

    //understand

    //   so basically, find the celeberty only using the knows() method
    //      start with first person, check if knows the next, if not continue, if start on next person

}


// Tests
let partyList = {
1 : new Person(1, []),
2: new Person(2, [1,5]),
3: new Person(3, [1,2]),
4: new Person(4, [1,3,5]),
5: new Person(5, [1,3,4])
}

console.log(findCeleberty(partyList))