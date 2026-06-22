const prompt = require('prompt-sync')({sigint: true});

//Menentukan bilangan negarif, positif, atau nol (0)
let bilangan = parseInt(prompt('Masukkan bilangan bulat: '))

if (bilangan > 0) {
    console.log('bilangan positif')
} else if (bilangan < 0) {
    console.log('bilangan negatif')
} else if (bilangan == 0) {
    console.log('nol')
}