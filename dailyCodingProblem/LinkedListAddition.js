 
//  This problem was asked by Microsoft.
 
//  Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.
 
//  For example, the following linked list:
 
//  1 -> 2 -> 3 -> 4 -> 5
//  is the number 54321.
 
//  Given two linked lists in this format, return their sum in the same linked list format.
 
//  For example, given
 
//  9 -> 9
//  5 -> 2
//  return 124 (99 + 25) as:
 
//  4 -> 2 -> 1
 

// 9 + 5 = 14
// 9 + 2 = 11(0)
// 14 + 110 = 124;

function llAddition(listOne, listTwo){

    let nodeOne = listOne;
    let nodeTwo = listTwo;
    let resArray = [];
    
    while (nodeOne || nodeTwo){
        let firstVal = nodeOne ? nodeOne.value : 0;
        let secondVal = nodeTwo ? nodeTwo.value : 0;
        resultVal = firstVal + secondVal;
        // console.log(resultVal, firstVal, secondVal);
        resArray.push(resultVal);
        
        nodeOne = nodeOne.next;
        nodeTwo = nodeTwo.next;
    }

    let sumArray = []
    for (let i = 0; i<resArray.length;i++){
        let resItArray = [resArray[i].toString()]
        // for (let j = i; j> 0; j--){
        //     resItArray.push('0')
        // }
        sumArray.push(resItArray.join(''))
    }
    console.log(resArray, sumArray);

    let finalResult = 0;
    let headResult;
    for (let i = 0; i<sumArray.length;i++){
        let newArr = sumArray[i].split('');

        if (i == 0){
            headResult = new Node(parseInt(newArr[newArr.length-1]))
        }else{
            headResult.next = new Node(parseInt(newArr[newArr.length-1]))
        }

        console.log(newArr)
        // finalResult += parseInt(sumArray[i])
    }
    console.log(finalResult, headResult)
}

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
    print(){
        console.log('_____TREE_____')
        function printNode (node) {
            
           

           if (node.next){
               printNode(node.next)
           } 
           console.log(node.value)
        }
        printNode(this);
        console.log('______________')
    }
}

let listFirst = new Node(9);
listFirst.next = new Node(9);
let listSecond = new Node(5);
listSecond.next = new Node(2);

listSecond.print();
llAddition(listFirst, listSecond); // 124 //  4 -> 2 -> 1