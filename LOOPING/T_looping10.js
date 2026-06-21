const prompt = require('prompt-sync') ({sigint: true})

for (let i = 0; i < 5; i++) {
  let baris = "";
  for (let j = 0; j < 6; j++) {
    baris += "a" + (j < 5 ? " " : "");
  }
  console.log(baris);
}