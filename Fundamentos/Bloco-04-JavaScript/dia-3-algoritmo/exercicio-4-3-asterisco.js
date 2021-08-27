let n = 5;
let base = [];
let base2 = [];
let base3 = [];

if(n>1){ // exercicio 1 (Imprima um quadrado)
    for(let cont2 =0; cont2 < n; cont2 += 1){
            base2.push('*'); 
     }

     for(let cont3 =0; cont3 < n; cont3 += 1){
        console.log(base2);
    }
}else{
    console.log('Construção da forma não é possível!');
}

console.log(''); ////////////////////////////////////////////////


if(n>1){ // exercicio 2 (Imprima um triângulo)
    for(let cont =0; cont < n; cont += 1){
       base.push('*'); 
       console.log(base);
    }
}else{
    console.log('Construção da forma não é possível!');
}


console.log(''); ////////////////////////////////////////////////

// exercicio 3 (Imprima um triângulo invertido)

