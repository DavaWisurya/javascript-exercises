// npm install prompt-sync (sekali saja di terminal)
const prompt = require("prompt-sync")({ sigint: true });

// === MENU UTAMA ===
console.log("=== KALKULATOR BANGUN DATAR & RUANG ===");
console.log("1. Persegi");
console.log("2. Segitiga");
console.log("3. Lingkaran");
console.log("4. Trapesium");
console.log("5. Kubus");
console.log("6. Tabung");
console.log("7. Bola");
console.log("8. Limas");

let pilihan = prompt("Pilih bangun (1-8): ");

console.log(); // baris kosong

// === RUMUS PER PILIHAN ===

if (pilihan == "1") {
    // Persegi
    let sisi = parseFloat(prompt("Masukkan sisi: "));
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    console.log(`Luas persegi      : ${luas} cm²`);
    console.log(`Keliling persegi  : ${keliling} cm`);

} else if (pilihan == "2") {
    // Segitiga
    let alas = parseFloat(prompt("Masukkan alas: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi: "));
    let luas = 0.5 * alas * tinggi;
    console.log(`Luas segitiga     : ${luas} cm²`);

} else if (pilihan == "3") {
    // Lingkaran
    let jari = parseFloat(prompt("Masukkan jari-jari: "));
    let luas = Math.PI * jari * jari;
    let keliling = 2 * Math.PI * jari;
    console.log(`Luas lingkaran    : ${luas.toFixed(2)} cm²`);
    console.log(`Keliling lingkaran: ${keliling.toFixed(2)} cm`);

} else if (pilihan == "4") {
    // Trapesium
    let a = parseFloat(prompt("Masukkan sisi atas (a): "));
    let b = parseFloat(prompt("Masukkan sisi bawah (b): "));
    let tinggi = parseFloat(prompt("Masukkan tinggi: "));
    let luas = 0.5 * (a + b) * tinggi;
    console.log(`Luas trapesium    : ${luas} cm²`);

} else if (pilihan == "5") {
    // Kubus
    let sisi = parseFloat(prompt("Masukkan sisi: "));
    let volume = sisi ** 3;
    let luas = 6 * sisi * sisi;
    console.log(`Volume kubus      : ${volume} cm³`);
    console.log(`Luas permukaan    : ${luas} cm²`);

} else if (pilihan == "6") {
    // Tabung
    let jari = parseFloat(prompt("Masukkan jari-jari: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi: "));
    let volume = Math.PI * jari * jari * tinggi;
    let luas = 2 * Math.PI * jari * (jari + tinggi);
    console.log(`Volume tabung     : ${volume.toFixed(2)} cm³`);
    console.log(`Luas permukaan    : ${luas.toFixed(2)} cm²`);

} else if (pilihan == "7") {
    // Bola
    let jari = parseFloat(prompt("Masukkan jari-jari: "));
    let volume = (4 / 3) * Math.PI * jari ** 3;
    let luas = 4 * Math.PI * jari ** 2;
    console.log(`Volume bola       : ${volume.toFixed(2)} cm³`);
    console.log(`Luas permukaan    : ${luas.toFixed(2)} cm²`);

} else if (pilihan == "8") {
    // Limas segi empat
    let sisi = parseFloat(prompt("Masukkan panjang sisi alas: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi limas: "));
    let volume = (1 / 3) * (sisi ** 2) * tinggi;
    console.log(`Volume limas      : ${volume} cm³`);

} else {
    console.log("Pilihan tidak valid. Silakan pilih 1–8.");
}
