const prompt = require('prompt-sync')({sigint:true})

let siswa = [
    {nama: 'Andi', nilai: 80},
    {nama: 'Budi', nilai: 90},
    {nama: 'Cici', nilai: 75},

];
let budi = siswa.find( s => s.nama === 'Budi');
console.log(budi ? budi.nilai : 'Siswa tidak ditemukan');
