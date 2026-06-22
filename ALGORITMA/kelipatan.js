const prompt = require('prompt-sync')({sigint: true});

let angka2 = parseInt(prompt("Masukkan angka kelipatan 4: "));
let hasil = ["bukan kelipatan 4", "kelipatan 4"];
console.log(hasil[angka2 % 4 === 0 ? 1 : 0]);