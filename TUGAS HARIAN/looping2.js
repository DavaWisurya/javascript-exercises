const prompt = require('prompt-sync')
({sigint: true})

for (let i = 1; i <= 5; i++) {console.log(i)}
let i3 = 1
while (i3 <= 5) {console.log(i3); i3++}

ulang = 'y'
while (ulang == 'y') {
    ulang = prompt('diulang (y/n) ? ')
}
//1

for( let i = 2010; i <= 2025; i++) {
    console.log(i)
}

let i2 = 2010 
while (i2 <= 2025) {console.log(i2); i2++}

ulang = 'y'
while (ulang == 'y') {
    ulang = prompt('diulang (y/n) ? ')
}
//2

for (let i = 10; i < 80; i+=10) {console.log(i)}
let i4 = 10
while (i4 < 80) {console.log(i4); i4+=10}

ulang = 'y'
while (ulang == 'y') {
    ulang = prompt('diulang (y/n) ? ')
}
//3

const pengali = 14
for (let i = 1; i <= 10; i++) {console.log(`${pengali} x ${i} = ${pengali * i}`)}
let i5 = 1
while (i5 <= 10) {console.log(i5); i5++}

ulang = 'y'
while (ulang == 'y') {
    ulang = prompt('diulang (y/n) ? ')
}
//4

for (let i = 1; i < 15; i+=2) {console.log(i)}
let i6 = 1
while (i6 < 15) {console.log(i6); i6+=2}

ulang = 'y'
while (ulang == 'y') {
    ulang = prompt('diulang (y/n) ? ')
}
//ganjil

for (let i = 0; i < 16; i+=2) {console.log(i)}
let i7 = 0
while (i7 < 16) {console.log(i7); i7+=2}
ulang = 'y'
while (ulang == 'y') {
    ulang = prompt('diulang (y/n) ? ')
}
//genap



