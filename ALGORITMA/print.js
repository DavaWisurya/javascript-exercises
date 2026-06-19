const prompt = require('prompt-sync')({sigint: true})

//Angka Di Cetak Jadi Kata

let bilangan = parseInt(prompt('Masukkan Angka Bulat (1-4): '))

if (bilangan === 1) {
    console.log('satu')

} else if (bilangan === 2) {
    console.log('Dua')

} else if (bilangan === 3) {
    console.log('Tiga')

} else if (bilangan === 4) {
    console.log('Empat')

} else {
    console.log('Angka yang dimasukkan Salah!')
}

