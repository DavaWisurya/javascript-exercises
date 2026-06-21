const prompt = require('prompt-sync') ({sigint: true})

let huruf = ["a", "b", "c", "d", "e"];

for (let h = 0; h < huruf.length; h++) {
    let baris = "";
    for (let j = 0; j < 5; j++) {
        baris += huruf[h] + (j < 4 ? " " : ""); 
    }
    console.log(baris);
}