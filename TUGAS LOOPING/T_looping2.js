const prompt = require('prompt-sync')
({sigint: true})

for (let i = 0; i < 4; i++) {
    console.log("Cerdas");
}

let ulang;
do {
    ulang = prompt('Diulang (y/n) ? ');
} while (ulang === 'y' || ulang === 'Y');
