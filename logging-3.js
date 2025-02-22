// Error -------------------------------------------------------------
console.error("This is an error")

// Warning -------------------------------------------------------------
console.warn("This is a warning")

// Info -------------------------------------------------------------
console.info("This is an info")

// Table -------------------------------------------------------------
users = [   
    {nama : "Eben",umur : 20},
    {nama : "John",umur : 21},
]
console.table(users)

// Group -------------------------------------------------------------
console.group("Mahasiswa Informatika")
console.log("Nama : Eben")
console.log("NIM : 123456789")
console.log("Nama : John")
console.log("NIM : 987654321")
console.groupEnd()

// Time -------------------------------------------------------------
console.time("Time")
for(let i = 0; i < 1000000;i++){
    // process
}
console.timeEnd("Time")



// Example -------------------------------------------------------------
function hitungTotal(harga,jumlah){
    console.log("Input", {harga, jumlah});

    const total = harga * jumlah ; 
    console.log("Total :", total);

    if(total > 1000000){
        console.warn("Transaksi besar terdeteksi")
    }

    return total;

}


const id = Symbol("id");

