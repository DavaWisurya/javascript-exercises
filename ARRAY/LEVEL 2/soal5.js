const prompt = require('prompt-sync')({sigint:true})

bahan = ['beras', 'gula', 'telur', 'minyak']
bahan.push('kopi')
bahan.splice(1,1)

console.log(bahan)