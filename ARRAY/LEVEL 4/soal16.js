const prompt = require ('prompt-sync')({sigint:true})

let nilai = [60, 85, 70, 90, 95, 80];
let max = nilai[0];

for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] > max) max = nilai[i]
}

console.log(max)