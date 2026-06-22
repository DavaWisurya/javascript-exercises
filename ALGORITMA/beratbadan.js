const prompt = require('prompt-sync')({sigint: true});

let tinggiB = Number(prompt("Masukkan tinggi badan dalam cm: "));
let beratB = parseInt(tinggiB - 100);
let ideal = beratB - (0.1 * beratB);
    
    console.log(`Berat badan ideal untuk tinggi ${tinggiB} cm adalah ${beratB.toFixed(2)} kg`);