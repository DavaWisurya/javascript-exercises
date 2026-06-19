const prompt = require('prompt-sync')
({sigint: true})

do {
let hasil = "";
for (let i = 0; i < 4; i++) {
    hasil += "Cerdas ";
}
console.log(hasil);

    ulang = prompt('Diulang (y/n) ? ');
} while (ulang === 'y' || ulang === 'Y');