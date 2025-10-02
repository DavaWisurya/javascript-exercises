const prompt = require('prompt-sync')();

console.log("PROGRAM MENGHITUNG BANGUN RUANG");
console.log("===============================");

console.log("\nPilih bangun ruang:");
console.log("1. Kubus");
console.log("2. Balok");
console.log("3. Prisma Segitiga");
console.log("4. Limas Segiempat");
console.log("5. Tabung");
console.log("6. Kerucut");
console.log("7. Bola");

let pilihan = parseInt(prompt('Masukkan pilihan (1-7): '));

if (pilihan === 1) {
    // Kubus
    console.log("\n=== KUBUS ===");
    let sisi = parseFloat(prompt('Masukkan panjang sisi: '));
    let volume = Math.pow(sisi, 3);
    let luasPermukaan = 6 * Math.pow(sisi, 2);
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = s³ = " + sisi + "³ = " + volume);
    console.log("Luas Permukaan = 6 × s² = 6 × " + sisi + "² = " + luasPermukaan);
    
} else if (pilihan === 2) {
    // Balok
    console.log("\n=== BALOK ===");
    let panjang = parseFloat(prompt('Masukkan panjang: '));
    let lebar = parseFloat(prompt('Masukkan lebar: '));
    let tinggi = parseFloat(prompt('Masukkan tinggi: '));
    let volume = panjang * lebar * tinggi;
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = p × l × t = " + panjang + " × " + lebar + " × " + tinggi + " = " + volume);
    console.log("Luas Permukaan = 2(pl + pt + lt) = 2(" + panjang + "×" + lebar + " + " + panjang + "×" + tinggi + " + " + lebar + "×" + tinggi + ") = " + luasPermukaan);
    
} else if (pilihan === 3) {
    // Prisma Segitiga
    console.log("\n=== PRISMA SEGITIGA ===");
    let alas = parseFloat(prompt('Masukkan alas segitiga: '));
    let tinggiSegitiga = parseFloat(prompt('Masukkan tinggi segitiga: '));
    let tinggiPrisma = parseFloat(prompt('Masukkan tinggi prisma: '));
    let volume = 0.5 * alas * tinggiSegitiga * tinggiPrisma;
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = ½ × a × t × T = ½ × " + alas + " × " + tinggiSegitiga + " × " + tinggiPrisma + " = " + volume);
    
} else if (pilihan === 4) {
    // Limas Segiempat
    console.log("\n=== LIMAS SEGIEMPAT ===");
    let panjangAlas = parseFloat(prompt('Masukkan panjang alas: '));
    let lebarAlas = parseFloat(prompt('Masukkan lebar alas: '));
    let tinggiLimas = parseFloat(prompt('Masukkan tinggi limas: '));
    let volume = (1/3) * panjangAlas * lebarAlas * tinggiLimas;
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = ⅓ × p × l × t = ⅓ × " + panjangAlas + " × " + lebarAlas + " × " + tinggiLimas + " = " + volume);
    
} else if (pilihan === 5) {
    // Tabung
    console.log("\n=== TABUNG ===");
    let jariJari = parseFloat(prompt('Masukkan jari-jari: '));
    let tinggi = parseFloat(prompt('Masukkan tinggi: '));
    let volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = π × r² × t = " + Math.PI.toFixed(2) + " × " + jariJari + "² × " + tinggi + " = " + volume.toFixed(2));
    console.log("Luas Permukaan = 2πr(r + t) = 2 × " + Math.PI.toFixed(2) + " × " + jariJari + " × (" + jariJari + " + " + tinggi + ") = " + luasPermukaan.toFixed(2));
    
} else if (pilihan === 6) {
    // Kerucut
    console.log("\n=== KERUCUT ===");
    let jariJari = parseFloat(prompt('Masukkan jari-jari: '));
    let tinggi = parseFloat(prompt('Masukkan tinggi: '));
    let volume = (1/3) * Math.PI * Math.pow(jariJari, 2) * tinggi;
    let garisPelukis = Math.sqrt(Math.pow(jariJari, 2) + Math.pow(tinggi, 2));
    let luasPermukaan = Math.PI * jariJari * (jariJari + garisPelukis);
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = ⅓ × π × r² × t = ⅓ × " + Math.PI.toFixed(2) + " × " + jariJari + "² × " + tinggi + " = " + volume.toFixed(2));
    console.log("Luas Permukaan = π × r × (r + s) = " + Math.PI.toFixed(2) + " × " + jariJari + " × (" + jariJari + " + " + garisPelukis.toFixed(2) + ") = " + luasPermukaan.toFixed(2));
    
} else if (pilihan === 7) {
    // Bola
    console.log("\n=== BOLA ===");
    let jariJari = parseFloat(prompt('Masukkan jari-jari: '));
    let volume = (4/3) * Math.PI * Math.pow(jariJari, 3);
    let luasPermukaan = 4 * Math.PI * Math.pow(jariJari, 2);
    
    console.log("\nHasil Perhitungan:");
    console.log("Volume = 4/3 × π × r³ = 4/3 × " + Math.PI.toFixed(2) + " × " + jariJari + "³ = " + volume.toFixed(2));
    console.log("Luas Permukaan = 4 × π × r² = 4 × " + Math.PI.toFixed(2) + " × " + jariJari + "² = " + luasPermukaan.toFixed(2));
    
} else {
    console.log("Pilihan tidak valid!");
}