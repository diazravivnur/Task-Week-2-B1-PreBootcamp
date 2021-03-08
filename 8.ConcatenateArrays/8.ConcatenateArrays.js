// ## A. Question
// Buatlah sebuah function untuk menggabungkan 2 array berisikan integer dan jika nilainya sama hapus salah satu kemudian sort dari kiri kanan (kecil ke besar) dan gambarkan flow chartnya.

// Input-1: [1,3,4,1,5,6]
// Input-2: [7,2,4,1,5]
 
// Output: [1,2,3,4,5,6,7]

// [1,3,4,1,5,6,7,2,4,1,5]

// Input-1 Array integer
const inputArray1 = [1,3,4,1,5,6];

// Input-2 Array integer
const inputArray2 = [7,2,4,1,5];

// Process : Joins and sort both Arrays
// var joinedArray = [].concat(inputArray1,inputArray2)
var joinedArray = [...inputArray1, ...inputArray2];
joinedArray.sort(function(a,b) {
  return a - b ;
});
//output1 


// Process : Sort and joined array without duplicate
