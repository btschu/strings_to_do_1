// Associative arrays are sometimes called maps because a key (string) maps to a value. 

// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. 

// For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

function zipArraysIntoMap(keys, values) {
    let map = {}
    for (let i = -1; i < keys.length; i++){
        if(i< 0){
            continue
        }
        map[keys[i]] = values[i]
    }
    return map
}

console.log(zipArraysIntoMap(["abc", 3, "yo"], [42, "wassup", true]))