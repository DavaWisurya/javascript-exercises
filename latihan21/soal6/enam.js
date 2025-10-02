let nama = 'M Dava Wisurya';
let ukuranSepatu = 40;
let rapor = 97.99;
let status = true;

console.log('Nama: ' + nama)
console.log('Ukuran Sepatu: ' + ukuranSepatu)
console.log('rataRapor: ' + rapor)
console.log('StatusLulus: ' + status)

let outputElement = document.getElementById('output')
outputElement.innerHTML = `
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Ukuran Sepatu:</strong> ${ukuranSepatu}<p/>
    <p><strong>rataRapor:</strong> ${rapor}</p>
    <p><strong>StatusLulus:</stong> ${status}</p>
`;