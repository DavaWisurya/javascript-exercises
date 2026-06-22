const prompt = require('prompt-sync')({sigint: true});

let uang = parseInt(prompt("Masukkan jumlah uang (kelipatan 25): "));
    let r1000 = parseInt(uang / 1000);
    uang = uang % 1000;
    let r500 = parseInt(uang / 500);
    uang = uang % 500;
    let r100 = parseInt(uang / 100);
    uang = uang % 100;
    let r50 = parseInt(uang / 50);
    uang = uang % 50;
    let r25 = parseInt(uang / 25);

console.log(`Jumlah pecahan: `);
console.log(`Rp1000 = ${r1000} lembar`);
console.log(`Rp500  = ${r500} lembar`);
console.log(`Rp100  = ${r100} lembar`);
console.log(`Rp50   = ${r50} lembar`);
console.log(`Rp25   = ${r25} lembar`);