const prompt = require('prompt-sync')({sigint:true})

let angka = [1, 2, 3, 4,];
let angkaBaru = angka.map(num => num * 2)
console.log(angkaBaru)