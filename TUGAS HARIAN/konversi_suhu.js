//npm install prompt-sync
const prompt = require("prompt-sync")
({ sigint: true });

console.log("==== KONVERSI SUHU ====")
console.log('1. celsius ke fahrenheit')
console.log('2. celsius ke kelvin')
console.log('3. celsius ke reamur')
console.log('4. kelvin ke celsius')
console.log('5. reamur celsius')
console.log('6. fahrenheit ke celsius')
 
let pilihan = prompt('pilih konversi suhu (1-6) : ')
 

if (pilihan == '1')  {
    let celcius, fahrenheit
celsius = parseInt(prompt('suhu (c) : '))
fahrenheit = (celsius * 9/5) + 32
console.log(`celsius    : ${celsius} c`)
console.log(`fahrenheit : ${fahrenheit} f`);

} else if (pilihan == '2')  {
    let celsius2, kelvin
celsius2 = parseInt(prompt('suhu (c) : '))
kelvin = celsius2 + 273.15
console.log(`celsius : ${celsius2} c`)
console.log(`kelvin : ${kelvin} k`)

}  else if (pilihan == '3')  {
    let celsius3, reamur
celsius3 = parseInt(prompt('suhu (c) : '))
reamur = celsius3 * 4/5
console.log(`celsius : ${celsius3} c`)
console.log(`reamur : ${reamur}  r`)

}  else if (pilihan == '4')  {
    let kelvin2, celsius4
kelvin2 = parseFloat(prompt('suhu (k)  :'))
celsius4 = kelvin2 - 273.115
console.log(`kelvin : ${kelvin2}  k`)
console.log(`celsius : ${celsius4}  c`)
 
}  else if (pilihan == '5')  {
    let reamur2, celsius5
reamur2 = parseFloat(prompt('suhu (r)  :'))
celsius5 = reamur2 * 5/4
console.log(`reamur : ${reamur2}  r`)
console.log(`celsius : ${celsius5}  c`)

}  else if (pilihan == '6')  {
    let fahrenheit2, celsius6
fahrenheit2 = parseFloat(prompt('suhu (f)  :'))
celsius6 = (fahrenheit2 - 32) * 5/9
console.log(`fahrenheit : ${fahrenheit2}  f`)
console.log(`celsius : ${celsius6}  c`)
}  else {
    console.log('Pilihan tidak valid. Silakan pilih 1-6.')
}

