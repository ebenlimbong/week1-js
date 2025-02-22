let totalHarga = 0 
const tax = 0.1

function hitungTotal(harga ){
    totalHarga = harga + (harga * tax)
    return totalHarga
}

console.log(hitungTotal(100))

// LOCAL VARIABLE ----------------------------------------------------
function contohFungsi(){
    var lokalVar = "hanya bisa diakses dalam fungsi"
    let lokalLet = "Ini juga sama"
    console.log(contohFungsi())
}

// GLOBAL VARIABLE ------------------------------------------------------------
var globalVar = "This is a global var"
let globalLet = "this too"

function global(){
    console.log(globalVar)
}

// BLOCK SCOPE for LET & CONST ----------------------------------------------
if(true) {
    let blockVar = "Hanya dalam block"
    const blockConst = "Dalam block juga"
    var notBlockVar = "Bisa di akses di luar block" // var tidak mengenal block
}
console.log(notBlockVar)


