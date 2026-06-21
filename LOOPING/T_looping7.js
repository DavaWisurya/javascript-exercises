const prompt = require('prompt-sync')
({sigint: true})

let ganjil = [1, 3, 5];
let angka = 0;
let angka2 = "";
for (let i = 0; i < ganjil.length; i++) {
  angka += ganjil[i];
  angka2 += ganjil[i] + (i < ganjil.length - 1 ? " + " : "");
}
console.log(angka2 + " = " + angka);
