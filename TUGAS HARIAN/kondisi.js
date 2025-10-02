const prompt = require('prompt-sync')
({sigint: true})
let diulang = 'y'
do {
 let suhu1 = Number(prompt('Suhu Air: '))

 if (suhu1 > 100)
    console.log('Air berbentuk Gas')
 else if (suhu1 < 100 && suhu1 > 0)
    console.log('Air berwujud cair')
 else if (suhu1 < 0)
    console.log('Air berwujud Padat')

  diulang = prompt('Diulang (y/n) ? ')
}while(diulang == 'y')

//RUMUS 
let suhu = 110  
let kondisi = suhu > 100
if (suhu > 100)
    console.log('air mendidih')
else 
    console.log('air belum mendidih')