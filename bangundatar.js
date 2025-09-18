const prompt = require('prompt-sync')
({sigint: true})

console.log('=====================')
console.log('    BANGUN DATAR     ')
console.log('=====================')
console.log('1. Persegi')
console.log('2. Persegi Panjang')
console.log('3. Segitiga')
console.log('4. Jajar Genjang')
console.log('5. Trapesium')
console.log('6. Belah Ketupat')
console.log('7. Layang - layang')
console.log('8. Lingkaran')

let pilihan = prompt('Pilih Bangun Datar (1-8): ')

if (pilihan == '1')  {
    sisi = parseFloat(prompt('masukkan sisi:' ))
    keliling = 4 * sisi
    luas = sisi ** 2
    console.log(`luas persegi = ${luas}, keliling = ${keliling}`)

} else if (pilihan == '2')  {
    panjang = parseFloat(prompt('masukkan panjang: '))
    lebar = parseFloat(prompt('masukkan lebar: '))
    luas = panjang * lebar
    keliling = 2 * (panjang + lebar)
    console.log(`luas = ${luas}, keliling = ${keliling}`)

} else if (pilihan == '3')  {
     alas = parseFloat(prompt("Masukkan alas: "))
     tinggi = parseFloat(prompt("Masukkan tinggi: "))
     sisiA = parseFloat(prompt('masukkan sisiA: '))
     sisiB = parseFloat(prompt('masukkan sisiB: '))
     sisiC = parseFloat(prompt('masukkan sisiC: '))
     luas = 0.5 * alas * tinggi
     keliling = sisiA + sisiB + sisiC
      console.log(`luas = ${luas}, keliling = ${keliling}`)
     
} else if (pilihan == '4')  {
    alas = parseFloat(prompt("Masukkan alas: "))
    tinggi = parseFloat(prompt("Masukkan tinggi: "))
    sisiB = parseFloat(prompt('masukkan sisiB: '))
    luas = alas * tinggi
    keliling = 2 * (alas + tinggi)
    console.log(`luas = ${luas}, keliling = ${keliling}`)

} else if (pilihan == '5')  {
   alas = parseFloat(prompt("Masukkan alas: "))
   tinggi = parseFloat(prompt("Masukkan tinggi: ")) 
   b = parseFloat(prompt('masukkan sisiB: '))
   c = parseFloat(prompt('masukkan sisiC: '))
   d = parseFloat(prompt('masukkan sisiD: '))
   luas = 0.5 * (alas + b) * tinggi
   keliling = alas + b + c + d
   console.log(`luas = ${luas}, keliling = ${keliling}`)

} else if (pilihan == '6')  {
    diagonal1 = parseFloat(prompt('masukkan diagonal 1: '))
    diagonal2 = parseFloat(prompt('masukkan diagonal 2: '))
    sisi = parseFloat(prompt('masukkan sisi: '))
    luas = 0.5 * diagonal1 * diagonal2
    keliling = 4 * sisi
    console.log(`luas = ${luas}, keliling = ${keliling}`)

} else if (pilihan == '7')  {
    diagonal1 = parseFloat(prompt('masukkan diagonal 1: '))
    diagonal2 = parseFloat(prompt('masukkan diagonal 2: '))
    p = parseFloat(prompt('masukkan sisi P: '))
    q = parseFloat(prompt('masukkan sisi Q: '))
    luas = 0.5 * diagonal1 * diagonal2
    keliling = 2 * (p + q)
    console.log(`luas = ${luas}, keliling = ${keliling}`)

} else if (pilihan == '8')  {
    let jari = parseFloat(prompt("Masukkan jari-jari: "))
    let luas = Math.PI * jari * jari
    let keliling = 2 * Math.PI * jari
    console.log(`Luas lingkaran    : ${luas.toFixed(2)} cm²`)
    console.log(`Keliling lingkaran: ${keliling.toFixed(2)} cm`)
}

