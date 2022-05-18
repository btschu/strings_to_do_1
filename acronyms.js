// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str){
    var arr = str.split(" ");
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i][0].toUpperCase());
    }
    console.log(newArr.join(""));
    return newArr.join("");
}

acronyms("Live from New York, it's Saturday Night!")
acronyms("there's no free lunch - gotta pay yer way.")
