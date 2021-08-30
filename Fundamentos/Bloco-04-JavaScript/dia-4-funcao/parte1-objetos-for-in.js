let info = { /// OBJETO
    personagem: 'Margarida', //Propriedades ou atributos
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

 console.log('Bem-vinda, '+info.personagem); //1

 console.log('-------------------------');

 console.log(info); //2

 console.log('-------------------------');

 for(let index in info){ // 3
    //console.log(index,':',info[index]);
    console.log(index);
}

console.log('-------------------------');


 for(let valores in info){ //4
     //console.log(index,':',info[index]);
     console.log(info[valores]);
 }

 console.log('-------------------------');


/// SEGUNDO OBJETO
let info2 = { // 5
    personagem: 'Tio Patinhas', //Propriedades ou atributos
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

console.log(info.personagem+' e '+info2.personagem);
console.log(info.origem+' e '+info2.origem);
console.log(info.nota+' e '+info2.nota);

if(info.recorrente === 'Sim' && info2.recorrente ==='Sim'){
    console.log('Ambos recorrentes');
}else{
    console.log('Diferença de recorrência');
}