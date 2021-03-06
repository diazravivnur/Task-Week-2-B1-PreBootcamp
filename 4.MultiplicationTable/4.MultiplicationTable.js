// ## A. Question
// Buatlah function yang menerima parameter integer untuk menghasilkan table pengalian untuk angka 1 s/d 9 (max kali 10) dan gambarkan flow chartnya.
// Input: 5
// Output: 
	
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

const inputNumber = prompt("Masukkan angka ")
for (i = 1 ; i <= 10 ; i++){
    document.write("Hasil dari " + inputNumber + " x " + i + " = " + i * inputNumber + "<br></br>" )
}