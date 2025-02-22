// For Loop -------------------------------------------------------
const buah = ["Mangga", "Pisang", "Apel", "Jeruk"]; 

for(const i of buah){
    console.log(i);
}


// While Loop -------------------------------------------------------
let sandi = ""; 
while(sandi !== "1234"){
    // sandi = prompt("Masukkan sandi : ");
}

// Do While Loop -------------------------------------------------------
do {
    // angka = prompt("Masukkan angka > 10 : ");
}while(angka <= 10);

// For Loop in Object -------------------------------------------------------
const mahasiswa = {
    nama : "Ebentua",
    nim : 123140086,
    prodi : "Teknik Informatika", 
    angkatan : 2023
};

for(key in mahasiswa){
    console.log(key, ":", mahasiswa[key]);
}

// Break & Continue -------------------------------------------------------
for(let i = 1 ; i <= 5 ; i++){
    if (i === 3) break ; 
    console.log(i);
}

for(let i = 1; i <= 30 ; i++){
   if(i % 4 === 0 && i % 7 === 0){
        console.log("FOUR SEVEN");
   }else if(i % 4 === 0){
        console.log("FOUR");
    } else if(i % 7 === 0){
        console.log("SEVEN")
    }else {
        console.log(i);
    }
}