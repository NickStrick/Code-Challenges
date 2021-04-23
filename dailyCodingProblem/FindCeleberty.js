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

}


// Tests
let partyList = []
partyList.push(new Person(1, []))
partyList.push(new Person(2, [1,5]))
partyList.push(new Person(3, [1,2]))
partyList.push(new Person(4, [1,3,5]))
partyList.push(new Person(5, [1,3,4]))

console.log(findCeleberty())