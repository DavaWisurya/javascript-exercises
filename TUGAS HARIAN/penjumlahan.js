const prompt = require('prompt-sync')
({sigint: true})
 
let x, y, z

x = parseInt(prompt('masukkan nilai x: '))
y = parseInt(prompt('masukkan nilai y: '))
z = parseInt(prompt('masukkan nilai z: '))
k = (x + y - z)
j = ((x * y) - (z + x))

console.log("k =" + k)
console.log("j =" + j)
