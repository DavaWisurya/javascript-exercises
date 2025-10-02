let kata1 = 'SAYA'
let kata2 = 'BISA'

let kalimat = kata1 + " " + kata2;

console.log('kata1: ' + kata1);
console.log('kata2: ' + kata2);
console.log('kalimat gabungan: ' + kalimat);

let outputElement = document.getElementById('output')
outputElement.innerHTML = `
   <p><strong>kata1:</strong> ${kata1}</p>
   <p><strong>kata2:</strong> ${kata2}</p>
   <p><strong>kalimat gabungan:</strong> ${kalimat}</p>
`;