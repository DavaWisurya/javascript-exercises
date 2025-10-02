let x = parseInt(prompt('Masukkan bilangan x: '))
let y = parseInt(prompt('Masukkan bilangan y: '))
let z = parseInt(prompt('Masukkan bilangan z: '))

let terbesar = Math.max (x, y, z);
let terkecil = Math.min (x, y, z);

console.log('Bilangan x: ' + x)
console.log('Bilangan y: ' + y)
console.log('Bilangan z: ' + z)
console.log('Bilangan Terbesar: ' + terbesar)
console.log('Bilangan Terkecil: ' + terkecil)