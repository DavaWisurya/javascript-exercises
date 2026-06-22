const prompt = require('prompt-sync')({sigint: true})

let jarak = Number(prompt('Masukkan Jarak: '))
let kilometer = parseInt(jarak / 100000)
let sisa = kilometer % 100000
let meter = parseInt(jarak / 1000)
let centimeter = meter % 1000

console.log(`Kilometer: ${kilometer}km`)
console.log(`meter: ${meter}m`)
console.log(`centimeter: ${centimeter}cm`)