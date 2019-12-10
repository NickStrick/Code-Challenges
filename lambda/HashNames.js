function list(names) {
    let str = ""

    if (names.length === 0) {
        return str
    } else if (names.length === 1) {
        return names[0].name
    }
    str += names[0].name

    for (let i = 1; i < names.length; i++) {
        if (i === names.length - 1) {
            str += '&'
        } else {
            str += ','
        }
        str += names[i].name
    }

    return str

}

  // look through the array and pull out the names
  // concatenate each name with comma 
  // check if we reached the last element in the array, if so, we put & before it



//   Given: an array containing hashes of names

//   Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

//   Example:

//   list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//   // returns 'Bart, Lisa & Maggie'

//   list([ {name: 'Bart'}, {name: 'Lisa'} ])
//   // returns 'Bart & Lisa'

//   list([ {name: 'Bart'} ])
//   // returns 'Bart'

//   list([])
  // returns ''




  //recursive

//   function list(names){
//     if(names.length === 1) {
//       return names[0].name
//     }
//     if(names.length === 2) {
//       return names[0].name + " & " + names[1].name
//     }
//     if(names.length > 2) {
//       let name1 = names.shift().name
//       return name1 + ", " + list(names)
//     }
//   }