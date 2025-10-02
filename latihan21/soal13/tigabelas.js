let harga = parseFloat(prompt('Masukkan harga: '))
let pajak = harga * 0.10
let fee = harga * 0.05
let total = harga + pajak + fee

console.log('Harga Makanan: ' + harga)
console.log('Pajak: ' + pajak)
console.log('fee ' + fee)
console.log('Harga Bayar: ' + total)