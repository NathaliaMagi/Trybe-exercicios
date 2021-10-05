const prizeDraw = (num) => {
  const result = Math.floor(Math.random()*(4+1)+1); //  Números aleatórios entre 1-5
  const check = checkPrize(num, result)
  return check;
}

const checkPrize = (numb, checkNumb) => {
 const resultado =  (numb === checkNumb) ? 'Parabéns você ganhou' : 'Tente novamente';
 return resultado;
}

console.log(prizeDraw(4));
