let huruf = prompt('Masukkan sebuah huruf: ')

if (huruf.length !== 1) {
    console.log('Input harus tepat satu karakter!')
} else if ( huruf >= 'A' && huruf <= 'Z') {
    if (huruf === 'A' || huruf === 'I' || huruf === 'U' || huruf === 'E' || huruf === 'O') {
        console.log(`'${huruf}' adalah huruf VOKAL `) 
    } else {
        console.log(`'${huruf}' adalah huruf KONSONAN `)
    }
} else {
    console.log(`'${huruf}' Huruf harus capslock dan tidak boleh angka! `)
}