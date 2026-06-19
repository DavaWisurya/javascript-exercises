const prompt = require ('prompt-sync')({sigint:true})

let barang = [
    { nama: 'Pensil', harga: 2000},
    { nama: 'Buku', harga: 5000},
    { nama: 'Penghapus', harga: 1000},
];

let totalharga = barang.reduce((sum, item) => sum + item.harga, 0);
console.log(totalharga);
