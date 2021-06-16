`use strict`

let answer = 0;

for (let i = 2; i < process.argv.length; i++) {
    // console.log(process.argv[i]);
    // Add the numbers together and update the ...?
    answer = answer + Number(process.argv[i]);
    // Second Option:
    // answer = answer + parseInt(process.argv[1]);
    // Third Option
    // answer += Number(process.argv[i]);
    // Forth Option
    // answer += +process.argv[i];
};

console.log(answer);