const prompt = require('prompt-sync')({sigint:true})

siswa = [
    {nama: 'Andi', nilai: 80},
    {nama: 'Budi', nilai: 95},
    {nama: 'Albert', nilai: 76},
    {nama: 'Riski', nilai: 60},
]

siswa.sort((a, b) => b.nilai - a.nilai);
console.log(siswa);