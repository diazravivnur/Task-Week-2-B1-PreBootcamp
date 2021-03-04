// ## A. Question
// Buatlah sebuah function untuk menampilkan bilangan prima diantara bilang ke 1 dengan bilangan ke 2, note bilangan 1 tidak boleh lebih besar dari bilangan 2 dan gambarkan flow chartnya.
// Input: Bilangan 1: 20, Bilangan 2: 50
// Ouput: Bilangan prima antara 20 dan 50 adalah 
// 23,29,31,37,41,43,47


// Input: Bilangan 1: 20, Bilangan 2: 50
var numberInput1 = prompt("input your first number ")
// prompt("input your first number ")

var numberInput2 = prompt("input your second number, must be larger than before ")
// prompt("input your second number, must be larger than before ")

for (numberInput1 >= 2 ; numberInput1 <= numberInput2 ; numberInput1++){
    if ((numberInput1 == 2) || (numberInput1 == 3) || (numberInput1 == 5) || (numberInput1 == 7) || (numberInput1 % 2 != 0) && (numberInput1 % 3 != 0) && (numberInput1 % 5 !=0) && (numberInput1 % 7 != 0)){
        document.write(numberInput1 + "<br></br>")
    }
}


