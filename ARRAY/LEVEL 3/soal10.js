const prompt = require('prompt-sync')({sigint: true})

let nilai = [80, 90, 70, 100, 85]
total = 0;

for (i = 0; i < nilai.length; i++) {
    total += nilai[i]
}

rataRata = total / nilai.length;
console.log('Rata - Rata:', rataRata)
