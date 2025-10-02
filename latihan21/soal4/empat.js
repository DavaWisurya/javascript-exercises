let angka1 = 80.87
let angka2 = '8.97'

let angka2converted = parseFloat(angka2);
let hasil = angka1 + angka2converted;

console.log('angka1: ' + angka1);
console.log('angka2: ' + angka2);
console.log('hasil: ' + hasil);

let outputElement = document.getElementById('output');
outputElement.innerHTML = `
    <p><strong>angka1:</strong> ${angka1}</p>
    <p><strong>angka2:</strong> ${angka2}</p>
    <p><strong>hasil:</strong> ${hasil}</p>
`;