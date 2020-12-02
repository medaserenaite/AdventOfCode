const express = require('express');
const { type } = require('os');
const app = express();
app.use(express.json());

///// * DAY 1 PART 1 * /
const input = require("fs").readFileSync("puzzleInput.txt", "UTF-8").split("\n")

let firstNum;
let secondNum;
let numArray = [];

for(let num=0; num<input.length; num++){
    parseInt(input[num])
    numArray.push(parseInt(input[num]))
}
console.log(numArray)

for(let i=0; i<numArray.length; i++){
    for(let j=0; j<numArray.length; j++){
        let sum2 = numArray[i] + numArray[j+1]
        if(sum2 == 2020){
            // console.log(numArray[i])
            // console.log(numArray[j+1])
            firstNum = numArray[i]
            secondNum = numArray[j+1]
            let multiply = firstNum * secondNum
            // console.log(multiply)
        }

        for(let k=0; k<numArray.length; k++){
            let sum3 = sum2 + numArray[k]
            if(sum3 == 2020){
            // console.log(numArray[i])
            // console.log(numArray[j+1])
            // console.log(numArray[k])
            let multiply3 = numArray[i] * numArray[j+1] * numArray[k]
            console.log(multiply3)
            }
        }
    }
}

const PORT = process.env.PORT || 8383;
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
