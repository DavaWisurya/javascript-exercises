let harga = parseFloat(prompt('Masukkan harga: '))
let diskon = 0;

if (harga >= 200000) {
    diskon = harga * 0.075
}

let hargasetelahdiskon = harga - diskon

console.log('Diskon: ' + diskon)
console.log('Total: ' + hargasetelahdiskon)