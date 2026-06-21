const prompt = require('prompt-sync') ({ sigint: true })

let genap = [2, 4, 6, 8, 10];
let angka2 = 0;
let angka = "";
for (let i = 0; i < genap.length; i++) {
  angka2 += genap[i];
  angka += genap[i] + (i < genap.length - 1 ? " + " : "");
}
console.log(angka + " = " + angka2);