const prompt = require('prompt-sync') ({digint: true})


let diulang = 'y'

do {
    let n = 5

    for (let i = 1; i <= n; i++) {

        let baris = ""

        for (let j = 1; j <= i; j++) {

            baris += "* "
        }
        console.log(baris);
    }

    for (let i = n - 1; i >= 1; i--) {

        let baris = "";

        for (let j = 1; j <= i; j++) {

            baris += "* "
        }
        console.log(baris)
    }

    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y')