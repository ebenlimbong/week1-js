// ARRAY --------------------------------------------------
let buah = ["apel", "Jeruk", "Mangga"];
console.log(buah)


// Object --------------------------------------------------
let siswa = {
    nama : "John", 
    umur : 20,
    akti : true 
};
console.log(siswa)


// Functionn --------------------------------------------------
function sapaan(nama){
    return `Halo ${nama}!`;
}
console.log(sapaan("Eben"))



// HOW TO CHANGE VALUE DATA TYPE --------------------------------------------------
let angka = Number("123")
let text = String(123)


// let product = {
//     nama : "Laptop", 
//     harga : 9000000,
//     stok : 5 ,
//     spesifikasi : ["i7", "16GB", "512GB SSD"],
//     tersedia : true,
//     getInfo : function(){
//         return `${this.nama} - Rp${this.harga}`;
//     }
// };

// // Menggunakan berbagai type data   
// if(product.stok > 0 && product.tersedia){
//     console.log(product.getInfo());
//     console.log("Spesifikasi : ", product.spesifikasi.join(", "));
// }

let pinjam_buku = {
    judul : "Harry Potter", 
    pengarang : "J.K Rowling", 
    halaman : 300,
    tahun : 1997,
    dipinjam : false, 
    bab : ["Bab 1", "Bab 2", "Bab 3", "Bab 4", "Bab 5"],
    getInfo : function(){
        return `${this.judul} - ${this.pengarang}`;
    }
}

if(pinjam_buku.dipinjam == false){
    console.log(pinjam_buku.getInfo());
    console.log("Bab : ", pinjam_buku.bab[1]);
}


let nama = "ebentua philippus limbong"; 
console.log(nama.length)

console.log(nama[nama.length - 1]) // akses karakter terakhir


// METHOD ----------------------------------------------------------
let kalimat = "Belajar javascript"; 

console.log(kalimat.substring(0, 7))
console.log(kalimat.toUpperCase())
console.log(kalimat.toLowerCase())
console.log(kalimat.indexOf("javascript"))


let name = "Ebentua "; 
let umur = 20 ; 

let profile = `Nama : ${name}
Umur : ${umur}`;
console.log(profile)

// Menghitung jumlah huruf vokal dalam sebuah kata
let kata = "Indonesia "
let jumlahVokal = 0 ; 

for(i = 0; i < kata.length; i++){
    if("aiueoAIUEO".includes(kata[i])){
        jumlahVokal++;
    }
}
console.log(`Jumlah vokal : ${jumlahVokal}`)


// SWITCH ----------------------------------------------------------
let hari = "Senin"; 
switch(hari){
    case "Senin" :
        console.log("Hari awal")
        break ; 
    case "Selasa" :
        console.log("Hari kedua")
        break ; 
        case "Jumat" : 
        console.log("Akhir minggu kerja"); 
        break ;
}

//  IF ELSE CONDITION ----------------------------------------------------------

let usia = 18; 
let punyaSIM = treu ; 

if(usia >= 18 && punyaSIM){
    console.log("Boleh mengendarai mobil")
}else{
    console.log("Tidak boleh mengendarai mobil")
}

// SHORT CIRCUIT EVALUATION ----------------------------------------------------------
// AND menghentikan evaluasi jika salah satu nilai false 
console.log(false && console.log("Tidak akan dicetak"));  

// OR menghentikan evaluasi jika salah satu nilai true
console.log(true || console.log("Tidak akan dicetak"));


let user = {
    nama : "Budi",
    settings : null
}

