// ## A. Question
// Buatlah sebuah function untuk mencek apakah sebuah inputan adalah huruf vokal atau bukan dan gambarkan flow chartnya (pastikan huruf besar dan kecil menghasilkan output yang sama)

// Input:a
// Output: a adalah huruf vokal
 
// Input:B
// Output: B adalah bukan huruf vokal

const inputAlphabet = prompt("masukkan huruf ").toUpperCase()

if (inputAlphabet == "A" || inputAlphabet == "I" || inputAlphabet == "U" || inputAlphabet == "E" || inputAlphabet == "O"){
    document.write(inputAlphabet + " adalah huruf vokal")
}else{
    document.write(inputAlphabet + " adalah bukan huruf vokal")
};
