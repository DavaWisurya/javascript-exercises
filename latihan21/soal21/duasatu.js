let nama = prompt('Masukkan Nama Anda: ')
let nilai = parseInt(prompt('Masukkan Nilai Anda (0-100): '))

let grade = "";
if (nilai > 90 && nilai < 101) {
    grade = 'A'

} else if (nilai > 80 && nilai < 90) {
    grade = 'B'

} else if (nilai > 70 && nilai < 80) {
    grade = 'C'

} else if (nilai > 60 && nilai < 70) {
    grade = 'D'

} else if (nilai < 60) {
    grade = 'E'
}

console.log('Nama: ' + nama)
console.log('Nilai: ' + nilai)
console.log('Grade: ' + grade)