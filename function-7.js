function buatJus(apel, gula){
    return `Jus ${apel} apel + ${gula} sendok gula`;
}

console.log(buatJus(3, 2))
console.log(buatJus(3)) // undifined pada parameter gula

// Return Function --------------------------------------------------------
function buahSegar(jml){
    if(jml > 0 ){
        return true ; 
    }else {
        return false ;
    }
}

// First Class Function --------------------------------------------------------
// 1. Sebagai variable
const potongApel = function(jumlah){
    return jumlah * 4;
};

// 2. Sebagai parameter
function prosesApel(apel, action){
    return action(apel);
}

console.log(prosesApel(3, potongApel));

// Arrow Function --------------------------------------------------------
// bentuk biasa
const hitungApell = function(n) {return n + 1;};

// arrow function
const hitungApel = n => n + 1;


// SCOPE 
let totalApel = 10 ;  // GLOBAL

function kurangiApel(){
    let apelDikurangi = 2 ; // LOKAL
    totalApel -= apelDikurangi
    console.log(totalApel)
}

