const prompt = require('prompt-sync')
({sigint: true})

let diulang = 'y'

let nilai = prompt('Masukkan nilai Anda: ')
nilai = Number(nilai);

do {

    if (nilai < 0 || nilai > 100) {
        console.log('Rentang Nilai Salah')
     } else if (nilai >= 86 && nilai <= 100) {
        console.log('Grade A')
     } else if (nilai >= 80 && nilai <= 85) {
        console.log('Grade B')
     } else if (nilai >= 75 && nilai <= 79) {
        console.log('Grade C')
     } else if (nilai >= 60 && nilai <= 74) {
        console.log('Grade D')
     } else
        console.log('Grade E')     
}while(diulang == 'y') 

    
