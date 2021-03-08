//input that will be the length of output
const inputLength = parseInt(prompt("input Number "));

//process : previous + present = result
let previousNum = 0;
let presentNum = 1;
let resultNum = " ";

for(let i = 1 ; i < inputLength ; i++){
    resultNum = previousNum + presentNum ; 
    previousNum = presentNum ;
    presentNum = resultNum ;
    document.write(previousNum + ' ') 
};