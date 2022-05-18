// Associative arrays are also called hashes (we’ll learn why later). 

// Build invertHash(assocArr) to convert hash keys to values, and values to keys. 

// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.

// solution with for in loop

function invertHash(assocArr){
    var newMap = {};
    for(var x in assocArr){
        newMap[assocArr[x]] = x;
    }
    return newMap;
}

console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}));

// solution with regular for loop

function invertHash2(hash) {
    var keys = Object.keys(hash);
    var values = Object.values(hash);
    var newObj = {};
    for (var i = 0; i < keys.length; i++) {
        newObj[values[i]] = keys[i];
    }
    return newObj;
}

console.log(invertHash2({"name": "Zaphod", "charm": "high", "morals": "dicey"}));


