const prompt = require('prompt-sync')
({sigint: true})

let diulang = 'y'
do {
    let jumlah = 0
    let baris = ""

    for (let i = 1; i <= 5; i++) {
        baris = baris + i + " ";
        jumlah = jumlah + i;
    }

    console.log(baris + "= " + jumlah);

    diulang = prompt('Diulang (y/n) ? ')
    
} while (diulang == 'y')