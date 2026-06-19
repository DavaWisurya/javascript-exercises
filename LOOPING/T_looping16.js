const prompt = require('prompt-sync') ({sigint: true})

const tinggi = 5;


let i = 1;
do {
    let baris = '';
    let totalSpasi = tinggi - i;
    
    let s = 1;
    while (s <= totalSpasi) {
        baris += ' ';
        s++;
    }
    
    let j = 1;
    while (j <= i) {
        baris += '* ';
        j++;
    }
    
    console.log(baris);
    i++;
} while (i <= tinggi);


i = tinggi - 1;
do {
    let baris = '';
    let totalSpasi = tinggi - i;
    
    let s = 1;
    while (s <= totalSpasi) {
        baris += ' ';
        s++;
    }
    
    let j = 1;
    while (j <= i) {
        baris += '* ';
        j++;
    }
    
    console.log(baris);
    i--;
} while (i >= 1);