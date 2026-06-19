const prompt = require('prompt-sync') ({sigint: true})

let diulang = 'y'

do {
    for (i = 1; i <= 5; i++) {
        
        let baris = ""

        for (j = 1; j <= 5; j++) {

            baris = baris + "a ";
        } 

        console.log(baris)
    }

    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y' )