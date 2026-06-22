const prompt = require('prompt-sync')({sigint: true});

let angka = parseInt(prompt("Masukkan sebuah angka: "));

    if (angka % 2 === 0) {
        console.log(angka + " adalah angka genap");
    } else {
        console.log(angka + " adalah angka ganjil");
    }