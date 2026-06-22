const prompt = require('prompt-sync')({sigint: true});

    let angka_bulan = parseInt(prompt("Masukkan nomor bulan (1-12): "));
    let tahun = parseInt(prompt("Masukkan tahun (misal: 2010): "));

    let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                     "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let hariPerBulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (angka_bulan >= 1 && angka_bulan <= 12) {
        let hari = hariPerBulan[angka_bulan - 1];
        let bulan = namaBulan[angka_bulan - 1];

        if (angka_bulan === 2) {
            let kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
            hari = kabisat ? 29 : 28;
        }

        console.log(`Jumlah hari pada bulan ${bulan} tahun ${tahun} adalah ${hari} hari.`);
    } else {
        console.log("Nomor bulan tidak valid!");
    }