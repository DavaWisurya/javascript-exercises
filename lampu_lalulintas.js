const prompt = require("prompt-sync")
({ sigint: true });

let diulang = 'y'

do {
    let warna = prompt('Warna: ')
    if (warna === "merah") {
        console.log('berhenti')
     } else if (warna === "kuning") {
       console.log('bersiap')
     }else
        console.log('salah warna')        
    diulang = prompt('Diulang (y/n) ? ')
}while(diulang == 'y')