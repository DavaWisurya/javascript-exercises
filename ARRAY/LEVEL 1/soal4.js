const prompt = require('prompt-sync')({sigint:true})

let warna = ['merah', 'biru', 'pink', 'hijau']
warna.push('ungu');
warna.splice(0,1);

console.log(warna);