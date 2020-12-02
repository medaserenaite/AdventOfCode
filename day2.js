const input = require("fs").readFileSync("day2input.txt", "UTF-8").split("\n")

let masterCounter = 0

// iterating through the input
for(let i=0; i<input.length; i++){

    let splitsies = input[i].split(" ")

    // range
    let range = splitsies[0].split("-")

    // letter
    let letter = splitsies[1][0]

    // string
    let string = splitsies[2]

    let counter=0;
    // iterate through the string + see if it contains THE letter
    // if it does, add it to the counter
    for(let j=0; j<string.length; j++){

        if(letter == string[j]){
            counter++
        }
    }

    // check the counter within the given range
    if(range[0] <= counter && counter <= range[1]){
        masterCounter ++
    } else {
        false
    }
}
console.log(masterCounter)
// answer 493