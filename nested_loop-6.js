for(let i = 0 ; i < 3 ; i++){
    console.log(`Outer : ${i}`);
    for(let j = 0 ; j < 2 ; j++){
        console.log(`Inner : ${j}`)
    }
}

// contoh : 
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let row = 0 ; row < 3 ; row++){
    for(let col = 0 ; col < 3 ; col++){
        console.log(matrix[row][col]);
    }
}

// POLA --------------------------------------------------------
let pattern= ""

for(let i = 0 ; i < 5 ; i++){
    let pattern = ' '
    for(let j = 0 ; j < i ; j++){
        pattern += "* "
    }
    console.log(pattern)
}


// BUBBLE SORT --------------------------------------------------------
const arry = [3, 5, 0, 2, 7, 9]
for(let i = 0; i < arry.length ; i++){
    for(let j = 0 ; j < arry.length - 1 ; j++){
        if(arry[j] > arry[j + i]){
            [arry[j], arry[j + 1]] = [arry[j + 1], arry[j]];
        }
    }
}

console.log(arry)

// While in For Loop --------------------------------------------------------
for (let i = 1 ; i <= 3 ; i++){
    console.log(`Iterasi ke -  ${i}`);

    let j = 1;
    while(j <= 2){
        console.log(`Sub iterasi ke - ${j}`);
        j++;
    }
}

let prima = 0 ;
for(let i = 2 ; i <= 100 ; i++){
    let isPrime = true ; 
    for(let j = 2; j < Math.sqrt(i) ; j++){
        if(i % j === 0){
            isPrime = false ;
            break
        }
    }
    if(isPrime){
        console.log(i);

    }
}
console.log(`Jumlah bilangan prima : ${prima}`);