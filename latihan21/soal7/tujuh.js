let a = 8.3    // Nummber
let c = '3.2'  // String

// KONVERSI STRING KE NUMBER
let cNumber = parseFloat(c)

// OPERASI ARITMATIKA
let tambah = a + cNumber
let kurang = a - cNumber
let kali = a * cNumber
let bagi = a / cNumber

// Untuk modulus, konversi ke integer terlebih dahulu
let aInt = parseInt(a)        // Konversi 8.3 menjadi 8
let cInt = parseInt(cNumber)  // Konversi 3.2 menjadi 3
let modulus = aInt % cInt

// TAMPILKAN DI CONSOLE BROWSER
console.log(`${a} + ${cNumber} = ${tambah}`)
console.log(`${a} - ${cNumber} = ${kurang}`)
console.log(`${a} * ${cNumber} = ${kali}`)
console.log(`${a} / ${cNumber} = ${bagi}`)
console.log(`${aInt} % ${cInt} = ${modulus}`)

// TAMPILKAN DI WEB BROWSER(HTML)
let outputElement = document.getElementById('output')
outputElement.innerHTML = `
    <p>${a} + ${cNumber} = ${tambah}</p>
    <p>${a} - ${cNumber} = ${kurang}</p>
    <p>${a} * ${cNumber} = ${kali}</p>
    <p>${a} / ${cNumber} = ${bagi}</p>
    <p>${aInt} % ${cInt} = ${modulus}</p>
`;


