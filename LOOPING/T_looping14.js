const prompt = require('prompt-sync') ({digint: true})

let diulang = 'y'

do {
    let n = 4

    for (let i = 1; i <= n; i++) {

        let baris = ""

        for (let j = 1; j <= i; j++) {

            baris += "* "
        }
        console.log(baris);
    }

    let tengah = ""
    for (let j = 1; j <= 7; j++) {
        tengah += "* "
    }
    console.log(tengah);

    for (let i = 4; i >= 1; i--) {

        let baris = "";

        for (let j = 1; j <= i; j++) {

            baris += "* "
        }
        console.log(baris)
    }

    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y')
