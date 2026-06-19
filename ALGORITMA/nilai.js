const prompt = require('prompt-sync') ({sigint: true})

let grade = ""
let nilai = prompt('Masukkan Nilai Anda: ')

if (nilai >= 80) {
   grade = 'A'

} else if (nilai >= 70 && nilai < 80) {
   grade = 'B'

} else if (nilai >= 55 && nilai < 70) {
    grade = 'C'

} else if (nilai >= 40 && nilai < 55) {
    grade = 'D'

} else {
    grade = 'E'

}

console.log('Nilai: ' + nilai)
console.log('Grade: ' + grade)
