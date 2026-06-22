const prompt = require('prompt-sync')({sigint:true})

let waktu = Number(prompt('Masukkan Waktu: '))
let hari = parseInt(waktu / 86400)
let sisa = hari % 86400
let jam = parseInt(waktu / 6400)
let sisa2 = jam % 6400
menit = parseInt(sisa2 / 60)
detik = sisa2 % 60

console.log(`Waktu: ${waktu}`)
console.log(`(Hari: ${hari}d, Jam: ${jam}h, Menit: ${menit}m, Detik: ${detik}s).`)