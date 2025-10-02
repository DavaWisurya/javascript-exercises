//npm isntall prompt-sync
const prompt = require('prompt-sync')
({ sigint: true });

let suhu = parseFloat(prompt('masukkan suhu (C): '));
let jenis;

if (suhu < 0)  {
    jenis = 'es';
} else if (suhu < 100)  {
    jenis = 'air';
} else {
    jenis = 'uap air';
}

console.log(`Pada suhu ${suhu}C, zat cair berupa: ${jenis}`);