const prompt = require('prompt-sync')({sigint: true})

let meter = Number(prompt('Masukkan Meter: '))
let inchi = parseInt(meter / 25.4)
let sisa = inchi % 25.4
let kaki = parseInt(meter / 30.48)
let sisa2 = kaki % 30.48
let yard = parseInt(meter / 0.9144)
sisa3 = yard % 0.9144

console.log(`inchi: ${inchi}inchi`)
console.log(`kaki: ${kaki}kaki`)
console.log(`yard: ${yard}yard`)