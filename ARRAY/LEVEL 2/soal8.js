const prompt = require('prompt-sync')({sigint:true})

angka = [1, 2, 3, 4, 5]
angka.splice(2, 0, 3)

console.log(angka)