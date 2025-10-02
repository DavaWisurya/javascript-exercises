const prompt = require('prompt-sync') ({ sigint: true })

let diulang = 'y'
do {
    let jumlah = 0
    let baris = ""

    for (let i = 2; i <= 10; i+=2) {
        jumlah = jumlah + i;

        if ( i < 10) {
            baris = baris + i + " + "
        } else {
            baris = baris + i + " = "
        }
    }

    console.log(baris + jumlah)

    diulang = prompt('Diulang (y/n) ? ')
    
} while (diulang == 'y')