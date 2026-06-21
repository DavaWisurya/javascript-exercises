const prompt = require('prompt-sync') ({sigint: true})

for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 5; j >= i; j--) {
    baris += "*";
  }
  console.log(baris);
}