// This is our main function
function fizzbuzz(): void {


    for(let i: number = 0; i < 100; i++) {
        let result : String[] = [];
        if(i % 11 == 0) {
            if(i % 13 == 0) {
                result.push("Fezz");
            }
            result.push("Bong");
            console.log(result);
            continue;
        }
        if(i % 3 == 0) {
            result.push("Fizz");
        }
        if(i % 5 == 0) {
            result.push("Buzz");
        }
        if(i % 7 == 0) {
            result.push("Bang");
        }
        if(i % 13 == 0) {
           for(let j : number = 0; j < result.length; j++) {
               if(result[j][0] == 'B') {
                   result.splice(j, 0, "Fezz");
               }
           }
        }
        if(i % 17 == 0) {
            result.reverse();
        }

        if(result.length == 0) {
            result.push(i.toString());
        }

        let resultString = "";
        for(let j: number = 0; j <result.length; j++) {
            resultString += result[j];
        }
        console.log(resultString);

    }
    // Put your code here...
}

function arrayToString(result :String[]) : String
// Now, we run the main function:
fizzbuzz();