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
        push_words(i, 13, params, result, "Fezz");
        result.push("Bong");
        return arrayToString(result);
    }

    push_words(i, 3, params, result ,"Fizz");
    push_words(i, 5, params, result , "Buzz");
    push_words(i, 7, params, result, "Bang");

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

function push_words(input: number, condition : number, params : String[], result : String[], word : String) : String[] {
    if(input % condition === 0 && params.includes("--" + condition)) {
        result.push(word);
    }
    return result;
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