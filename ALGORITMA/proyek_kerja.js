const prompt = require('prompt-sync')({sigint: true})

let hari = Number(prompt('Masukkan hari: '))
let tahun = parseInt(hari / 365)
let sisa = tahun % 365
let bulan = parseInt(hari / 30)
let sisa2 = bulan % 30


console.log(`${hari} Hari`)
console.log(`${tahun} Tahun, ${bulan} Bulan`)
