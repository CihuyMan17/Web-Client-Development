// 1. Menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

// Contoh input
let luasPersegi = luasPersegiPanjang(5, 3);
console.log("Luas persegi panjang:", luasPersegi); // Output: 15


// 2. Menghitung diameter, keliling, dan luas lingkaran
function propertiLingkaran(jariJari) {
    const diameter = 2 * jariJari;
    const keliling = Math.PI * diameter;
    const luas = Math.PI * jariJari * jariJari;
    return {
        diameter: diameter,
        keliling: keliling,
        luas: luas
    };
}

// Contoh input
let hasilLingkaran = propertiLingkaran(5);
console.log("Properti lingkaran:", hasilLingkaran); 
// Output: diameter: 10, keliling: 31.4159, luas: 78.539


// 3. Mencari sudut ketiga segitiga jika dua sudut diberikan
function sudutKetiga(a, b) {
    return 180 - (a + b);
}

// Contoh input
let sudutC = sudutKetiga(80, 65);
console.log("Sudut ketiga segitiga:", sudutC); // Output: 35


// 4. Menghitung selisih antara dua tanggal dalam hari
function selisihTanggal(tanggal1, tanggal2) {
    const selisihWaktu = Math.abs(new Date(tanggal2) - new Date(tanggal1));
    const selisihHari = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24)); 
    return selisihHari;
}

// Contoh input
let selisihTgl = selisihTanggal('2024-03-19', '2024-03-21');
console.log("Selisih antara tanggal:", selisihTgl); // Output: 2


// 5. Mencetak inisial dalam huruf kapital
function ambilInisial(nama) {
    return nama.split(' ').map(kata => kata.charAt(0).toUpperCase()).join('');
}

// Contoh input
let inisial = ambilInisial("John Doe");
console.log("Inisial:", inisial); // Output: JD