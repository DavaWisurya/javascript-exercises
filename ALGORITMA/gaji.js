const prompt = require('prompt-sync')({sigint:true});

let golongan = prompt("Masukkan golongan (a/b/c/d): ").toUpperCase();
let durasi = parseInt(prompt("Masukkan durasi kerja: "));
let gaji = 0;

if (golongan === 'a') {
    if (durasi > 48) {
        gaji = durasi * 7000;
        console.log(`Gaji golongan A: ${gaji}, sudah termasuk gaji lembur`);
    } 

    else {
        gaji = durasi * 3000;
        console.log(`Gaji golongan A: ${gaji}`);
    }
} 

    else if (golongan === 'b') {

    if (durasi > 48) {
        gaji = durasi * 8000;
        console.log(`Gaji golongan B: ${gaji}, sudah termasuk gaji lembur`);
    } 
    
    else {
        gaji = durasi * 3000;
        console.log(`Gaji golongan B: ${gaji}`);
    }
} 

    else if (golongan === 'c') {

    if (durasi > 48) {
        gaji = durasi * 9000;
        console.log(`Gaji golongan C: ${gaji}, sudah termasuk gaji lembur`);
    } 
    
    else {
        gaji = durasi * 3000;
        console.log(`Gaji golongan C: ${gaji}`);
    }
} 

    else if (golongan === 'd') {

    if (durasi > 48) {
        gaji = durasi * 10500;
        console.log(`Gaji golongan D: ${gaji}, sudah termasuk gaji lembur`);
    } 
    
    else {
        gaji = durasi * 3000;
        console.log(`Gaji golongan D: ${gaji}`);
    }
} 

    else {
    console.log("Golongan tidak valid!");
}