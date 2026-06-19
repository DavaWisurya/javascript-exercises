const prompt = require('prompt-sync')
({sigint: true})

let diulang = 'y'

do {
    let jumlah = 0

    for (let i = 1; i <= 5; i++) {
        console.log(i)

        jumlah = jumlah + i;
    }

    console.log('__ +')
    console.log(jumlah)

    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y') 