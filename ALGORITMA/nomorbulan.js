const prompt = require('prompt-sync')({sigint: true})
//Rumus Array

//Kasih Ilmu ke Komputer ttg nama bulan
let namaBulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

//Minta Inputan dari User
let angkaBulan = Number(prompt('Masukkan Bulan (1-12): '))

//Masukkan Rumus
if (angkaBulan >= 1 && angkaBulan <= 12) {
    console.log(namaBulan[angkaBulan - 1])

} else {
    console.log('Angka Bulan Tidak Valid!')
}