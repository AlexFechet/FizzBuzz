import process from "process";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function fizzbuzz(): void {

    rl.question('Enter your number: ', (input) => {

        let i :number = Number(input);
        let result : String[] = [];

        if(i % 11 == 0 && process.argv.includes("--11")) {
            if(i % 13 == 0) {
                result.push("Fezz");
            }
            result.push("Bong");
            arrayToString(result);
            return;
        }

        if(i % 3 == 0 && process.argv.includes("--3"))
            result.push("Fizz");
        if(i % 5 == 0 && process.argv.includes("--5"))
            result.push("Buzz");
        if(i % 7 == 0 && process.argv.includes("--7"))
            result.push("Bang");

        if(i % 13 == 0 && process.argv.includes("--13")) {
           for(let j : number = 0; j < result.length; j++) {
               if(result[j]!.at(0) == 'B') {
                   result.splice(j, 0, "Fezz");
               }
           }
        }

        if(i % 17 == 0 && process.argv.includes("--17"))
            result.reverse();

        if(result.length == 0)
            result.push(i.toString());

        arrayToString(result);

        rl.close();
    });


}

function arrayToString(result :String[]) : void {
    let resultString = "";
    for(let j: number = 0; j <result.length; j++) {
        resultString += result[j];
    }
    console.log(resultString);
}


//
// fizzbuzz();