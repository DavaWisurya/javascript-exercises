const prompt = require('prompt-sync') ({digint: true})

for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}
console.log("*******");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 4; j >= i; j--) {
    baris += "*";
  }
  console.log(baris);
}
