const prompt = require('prompt-sync')({sigint:true})

angka = [10, 20, 30, 40, 50]
total = 0;
for(let i = 0; i < angka.length; i++) {
    total += angka(i)
} 

console.log('Jumlah Total:', total)