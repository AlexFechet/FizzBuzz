import process from "process";
import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fizzbuzz(): void {

    let i :number;

    rl.question('Enter your number: ', (i: number) => {
        let result : String[] = [];
        if(i % 11 == 0) {
            if(i % 13 == 0) {
                result.push("Fezz");
            }
            result.push("Bong");
            arrayToString(result);
            return;
        }

        if(i % 3 == 0)
            result.push("Fizz");
        if(i % 5 == 0)
            result.push("Buzz");
        if(i % 7 == 0)
            result.push("Bang");

        if(i % 13 == 0) {
           for(let j : number = 0; j < result.length; j++) {
               if(result[j][0] == 'B') {
                   result.splice(j, 0, "Fezz");
               }
           }
        }

        if(i % 17 == 0)
            result.reverse();

        if(result.length == 0)
            result.push(i.toString());

        arrayToString(result);

        rl.close(); // Always close the interface after reading input
    });


}

function arrayToString(result :String[]) : void {
    let resultString = "";
    for(let j: number = 0; j <result.length; j++) {
        resultString += result[j];
    }
    console.log(resultString);
}



fizzbuzz();