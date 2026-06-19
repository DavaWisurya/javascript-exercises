const prompt = require('prompt-sync') ({sigint: true})

for (let i = 0; i < 5; i++) {
    let huruf = String.fromCharCode(97 + i);
    console.log((huruf + ' ').repeat(5).trim());
}