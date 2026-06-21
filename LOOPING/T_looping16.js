const prompt = require('prompt-sync') ({sigint: true})

for (let i = 1; i <= 5; i++) {
    let baris = "";

    for (let j = 5; j > i; j--) {
        baris += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        baris += "*";
    }

    console.log(baris);
}

for (let i = 5 - 1; i >= 1; i--) {
    let baris = "";


    for (let j = 5; j > i; j--) {
        baris += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        baris += "*";
    }

    console.log(baris);
}