const prompt = require('prompt-sync')({sigint : true});


console.log("Menentukan Kuadran Titik (x,y)");
let x = Number(prompt("Masukkan titik x: "));
let y = Number(prompt("Masukkan titik y: "));

if (x > 0 && y > 0) {
    console.log(`Titik (${x},${y}) berada di kuadran I`);
} else if (x < 0 && y > 0) {
    console.log(`Titik (${x},${y}) berada di kuadran II`);
} else if (x < 0 && y < 0) {
    console.log(`Titik (${x},${y}) berada di kuadran III`);
} else if (x > 0 && y < 0) {
    console.log(`Titik (${x},${y}) berada di kuadran IV`);
}
