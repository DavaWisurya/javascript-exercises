const prompt = require('prompt-sync') ({sigint: true})

let diulang = 'y'

do {
    for (let i = 5; i >= 1; i--) {

        let baris = "";

        for (let j = 1; j <= i; j++) {

            baris = baris + "* ";
        }

        console.log(baris)
    }

    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y')