const prompt = require('prompt-sync')({sigint : true});

console.log("Menghitung Gaji Karyawan");
let durasi = parseInt(prompt("masukkan jam:"))
if (durasi > 48) {
    let gaji = durasi * 3000
    console.log(`gaji anda adalah: ${gaji}, sudah termasuk gaji lembur`);
} else if (durasi <= 48) {
    gaji = durasi * 2000
    console.log(`gaji anda adalah ${gaji}`);
}