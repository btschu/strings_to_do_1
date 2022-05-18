// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str){
    // turn each letter into a " " in an array
    var arr = str.split(" ");
    // turn array back into a string with no spaces
    console.log(arr.join(""));
    return arr.join("");
}

removeBlanks(" Pl ayTha tF u nkyM usi c ")

// another solution

// function removeBlanks(str){
//     var newStr = "";
//     for (var i = 0; i < str.length; i++){
//         if (str[i] !== " "){
//             newStr += str[i];
//         }
//     }
//     str = newStr;
//     console.log(str);
//     return str;
// }

// removeBlanks(" Pl ayTha tF u nkyM usi c ")