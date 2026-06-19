const prompt = require('prompt-sync')
({sigint: true})

let diulang = 'y'

do {
    let hurufa = ['A. ']
    let hurufb = ['B. ']
    let hurufc = ['C. ']
    let hurufd = ['D. ']

    for (let i = 0; i < 1; i++) {
        console.log(hurufa + 'Cerdas')
        console.log(hurufb + 'Cerdas')
        console.log(hurufc + 'Cerdas')
        console.log(hurufd + 'Cerdas')
    }
    diulang = prompt('Diulang (y/n) ? ')
} while (diulang == 'y')