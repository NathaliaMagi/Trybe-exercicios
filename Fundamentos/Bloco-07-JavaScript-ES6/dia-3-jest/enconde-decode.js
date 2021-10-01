// Desafio 9
function encode(vogais) {
    let vogalSeparada = vogais.split("");
  
    for(let value in vogalSeparada){
        if(vogalSeparada[value] === 'a'){
          vogalSeparada[value] ='1';
  
        } if(vogalSeparada[value] === 'e'){
          vogalSeparada[value] ='2';
  
        } if(vogalSeparada[value] === 'i'){
          vogalSeparada[value] ='3';
  
        } if(vogalSeparada[value] === 'o'){
          vogalSeparada[value] ='4';
  
        } if(vogalSeparada[value] === 'u'){
          vogalSeparada[value] ='5';
        }
   }
      return vogalSeparada.join("");
  }
  //console.log(encode("hi there"));
  
  function decode(vogais) {
    let vogalSeparada = vogais.split("");
  
    for(let value in vogalSeparada){
        if(vogalSeparada[value] === '1'){
          vogalSeparada[value] ='a';
  
        } if(vogalSeparada[value] === '2'){
          vogalSeparada[value] ='e';
  
        } if(vogalSeparada[value] === '3'){
          vogalSeparada[value] ='i';
  
        } if(vogalSeparada[value] === '4'){
          vogalSeparada[value] ='o';
  
        } if(vogalSeparada[value] === '5'){
          vogalSeparada[value] ='u';
        }
   }
      return vogalSeparada.join("");
  
  }

  module.exports = {encode, decode};
  