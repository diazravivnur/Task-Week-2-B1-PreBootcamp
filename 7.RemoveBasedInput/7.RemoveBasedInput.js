// ## A. Question
// Buatlah sebuah function untuk menghilangkan sebuah array sesuai dengan inputan kedua dan gambarkan flow chartnya. (Gunakan perulangan jangan pakai splice)

// Input-1 : [“a”,“b”,“c”,“d”,“e”]
// Input-2 : c
 
// Output: [“a”,“b”,“d”,“e”]


// input-1
var inputAlphabet1 = ["A", "B", "C", "D", "E", "F"];
var inputAlphabet1Length = inputAlphabet1.length

// // input-2
var inputAlphabet2 = ["A"];

// process delete input-2 in input-1

for (var i = 0; i < inputAlphabet1Length; i ++) {
    document.write(inputAlphabet1[i])
    if(inputAlphabet2 === inputAlphabet1){
        delete inputAlphabet1
    }
}

// var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myStringArray[i]);
//     //Do something
// }