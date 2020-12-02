const input = require("fs").readFileSync("day2input.txt", "UTF-8").split("\n")

let masterCounter = 0
let part2Counter = 0

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

    //PART 2
    let positionA = range[0]
    let positionB = range[1]

    if(letter == string[positionA-1] || letter == string[positionB-1]){
        if(!(letter == string[positionA-1] && letter == string[positionB-1])){
            part2Counter ++
        } 
    }

}
// PART 1 ANSWER
// console.log("part1 answer: " + masterCounter) //  493
console.log(part2Counter) //593
