const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt('Masukkan nilai X: '));
let y = Number(prompt('Masukkan nilai Y: '));
let z = Number(prompt('Masukkan nilai Z: '));

console.log('Nilai awal: ');
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);

// Tukar x dan y pakai variabel bantuan
let temp = x;
x = y;
y = temp;

console.log('Setelah tukar x dan y:');
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);

// Tukar x, y, z (muter: x -> y, y -> z, z -> x)
let simpan = x;
x = z;
z = y;
y = simpan;

console.log('Setelah tukar 3 variabel (x -> y, y -> z, z -> x): ');
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);