const prompt = require('prompt-sync') ({sigint: true})

for (let i = 0; i < 5; i++) {
  let baris = "";
  for (let j = 1; j <= 5; j++) {
    baris += j + (j < 5 ? " " : "");
  }
  console.log(baris);
}