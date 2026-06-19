const prompt = require ('prompt-sync')({sigint:true})

let angka = [5, 10, 15, 20, 25];
let hasil = angka.filter(num => num % 10 == 0).map(num => num * 2);
console.log(hasil)