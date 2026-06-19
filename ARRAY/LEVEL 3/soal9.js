const prompt = require('prompt-sync')({sigint:true})

angka = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; angka.length; i++) {
    if (angka[i] % 2 === 0) {
        console.log(angka[i])
    }
}

