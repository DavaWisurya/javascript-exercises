//RUMUS LUAS & KELILING
let panjang = parseFloat(prompt('Masukkan Panjang: '))
let lebar = parseFloat(prompt('Masukkan Lebar'))

let luas = panjang * lebar
let keliling = 2 * (panjang + lebar)

console.log(`Panjang: ${panjang}`)
console.log(`Lebar: ${lebar}`)
console.log(`Luas: ${luas}`)
console.log(`Keliling: 2 * (${panjang} + ${lebar}) = ${keliling}`);