const prompt = require('prompt-sync')
({sigint: true})

let diulang = 'y'
do {
    let suhu = Number(prompt('Suhu Air: '))
    if (suhu > 100)
        console.log('Air bentuk Gas')
    else if (suhu < 100 && suhu > 0)
        console.log('Air berwujud Cair')
    else
        console.log('Air berwujud padat')

    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y')