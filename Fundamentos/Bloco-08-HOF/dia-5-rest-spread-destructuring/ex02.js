const sum = (...numb) => numb.reduce((acc,curr) => acc + curr, 0);
console.log(`Soma = ${sum(1,2,3,6)}`);