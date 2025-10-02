
let address = "Cianjur"
let kuota = 258

console.log('Address: ' + address)
console.log("Kuota: " + kuota)

let outputElement = document.getElementById("output")

if (outputElement) {
     outputElement.innerHTML = `
        <p><strong>Alamat:</strong> ${address}</p>
        <p><strong>Kuota:</strong> ${kuota}</p>
     `;
} else {
     console.error("Element dengan id 'output' tidak ditemukan:");
}
