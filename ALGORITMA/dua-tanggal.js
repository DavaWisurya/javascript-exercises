const prompt = require('prompt-sync')({sigint: true})

//Inputan User
let input1 = prompt('Tanggal Pertama (dd:mm:yyyy): ')
let input2 = prompt('Tanggal Kedua (dd:mm:yyyy): ')

//Input1
//Pecah jadi 3 bagian: 01:11:2023
let bagian1 = input1.split(':')
let hari1 = Number(bagian1[0])
let bulan1 = Number(bagian1[1])
let tahun1 = Number(bagian1[2])

//input2
let bagian2 = input2.split(':')
let hari2 = Number(bagian2[0])
let bulan2 = Number(bagian2[1])
let tahun2 = Number(bagian2[2])

//Hitung Total Hari
let total1 = (tahun1 * 365) + (bulan1 * 30) + hari1
let total2 = (tahun2 * 365) + (bulan2 * 30) + hari2

//Hitung Selisih
let selisih = total2 - total1
if (selisih < 0) selisih = -selisih

//Konversi ke tahun, Bulan, Hari
let th = parseInt(selisih / 365)
let sisa = selisih % 365
let bul = parseInt(sisa / 30)
let hr = sisa % 30

console.log(th + ' tahun, ' + bul + ' Bulan, ' + hr + ' hari')

