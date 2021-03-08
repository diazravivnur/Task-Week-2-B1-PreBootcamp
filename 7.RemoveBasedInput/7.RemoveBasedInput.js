// ## A. Question
// Buatlah sebuah function untuk menghilangkan sebuah array sesuai dengan inputan kedua dan gambarkan flow chartnya. (Gunakan perulangan jangan pakai splice)

// Input-1 : [“a”,“b”,“c”,“d”,“e”]
// Input-2 : c
 
// Output: [“a”,“b”,“d”,“e”]


// input-1
const inputAlphabet1 = ["A", "B", "C", "D", "E", "F"];
// console.log(inputAlphabet1[0])

// input-2
var inputAlphabet2 = ["A"];

// process delete input-2 in input-1
for (var i = 0; i < inputAlphabet1.length; i ++) {
    if (inputAlphabet1[i] != inputAlphabet2){
        document.write(inputAlphabet1[i]) //Output input1 without input2 in it
    }
}
