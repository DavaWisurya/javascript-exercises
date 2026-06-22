const prompt = require('prompt-sync')({sigint: true});

let harga = parseInt(prompt("Masukkan total belanja Anda: "));
let diskon = 0;
let totalD = harga;

if (harga > 100000) {
    diskon = harga * 0.10;
    totalD = harga - diskon;
    console.log(`Selamat! Anda mendapat diskon 10%.`);
} else {
    console.log(`Maaf, Anda tidak mendapat diskon.`);
}