import process from "process";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function fizzbuzz(input : String, params : String[]): String {

    let i :number = Number(input);
    let result : String[] = [];

    if(i % 11 === 0 && params.includes("--11")) {
        if(i % 13 === 0) {
            result.push("Fezz");
        }
        result.push("Bong");

        return arrayToString(result);
    }

    if(i % 3 === 0 && params.includes("--3"))
        result.push("Fizz");
    if(i % 5 === 0 && params.includes("--5"))
        result.push("Buzz");
    if(i % 7 === 0 && params.includes("--7"))
        result.push("Bang");

    if(i % 13 === 0 && params.includes("--13")) {
        for(let j : number = 0; j < result.length; j++) {
            if(result[j]!.at(0) === 'B') {
                result.splice(j, 0, "Fezz");
            }
        }
    }

    if(i % 17 === 0 && params.includes("--17"))
        result.reverse();

    if(result.length === 0)
        result.push(i.toString());

    return arrayToString(result);
}

function arrayToString(result :String[]) : String {
    let resultString = "";
    for(let j: number = 0; j <result.length; j++) {
        resultString += result[j];
    }
    return resultString;
}


function debug() : void {
    rl.question('Enter your number: ', (userInput) => {
        console.log(fizzbuzz(userInput, process.argv));
        rl.close();
    });
}

debug();