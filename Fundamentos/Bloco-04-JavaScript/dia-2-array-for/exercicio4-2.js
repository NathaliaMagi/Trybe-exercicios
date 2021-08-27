let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
let maiorValor = 0;
let numerosImpares = 0;


for(let cont = 0; cont <numbers.length; cont+= 1){
    console.log(numbers[cont]);
    soma += numbers[cont]; // Soma dos valores
    media = soma/numbers.length; // Média aritmética

    if(numbers[cont]>maiorValor){ // Maior valor
        maiorValor = numbers[cont];
    }
    
    if(numbers[cont]%2 != 0){
        numerosImpares += 1;
    }  
}

let menorValor = numbers[0];
for(let count1 = 1; count1 <numbers.length; count1 +=1){
    if(numbers[count1]<menorValor){
        menorValor = numbers[count1];
    }
}

console.log('');

console.log('Resultado da soma = ',soma); // Resultado soma
console.log('');

console.log('Resultado da média = ',media); // Resultado média

console.log('');

if(media > 20){
    console.log('Valor maior que 20');
}else{
    console.log('Valor menor ou igual a 20');
}

console.log('');

console.log('O maior valor do array é = ',maiorValor); // Resultado maior Valor
console.log('O menor valor do array é = ',menorValor); // Resultado menor Valor

console.log('');

if(numerosImpares > 0){ // Resultado valores Ímpares
    console.log('Quantidade de valores ímpares : ',numerosImpares);
    
}else{
    console.log('Nenhum valor ímpar encontrado');
}


//////////////////////////////////////////////////////////////////////////////////////////////
let vetor = [];
let divisao;
for (let index = 1; index<= 25; index +=1){
   vetor.push(index) ;
}

console.log(vetor);

for(let count = 0; count<vetor.length; count+=1){
    console.log(vetor[count]/2);
}

