function recursiveFactorial(num) {
	if (num === 0) {
		return 1;
	} else {
		// O uso da recursividade faz com que o uso do for não seja necessário
		let x = num * recursiveFactorial(num - 1);
		console.log(x);
		return x;
	}
}
recursiveFactorial(3);

let recursiveTernary = (num) => (num === 0) ? 1 : num * recursiveTernary(num - 1); // Recursividade + operador ternário + arrow function
console.log(recursiveTernary(5));

// ---------------------------------------------------------------------------------------------------------------

const bigPhrase = (frase) => {
	const phraseWrap = frase.split(' ');// dividindo a frase a partir dos espaçameto
	const arraySize = [];
	for (let index = 0; index < phraseWrap.length; index += 1) {
		let size = phraseWrap[index].length;
		arraySize.push(size);
	}
	const crescente = arraySize.sort((a, b) => a - b); // coloca os elementos em ordem crescente
	console.log(`A maior palavra recebida da frase é : ${crescente.pop()}`);
}

bigPhrase("Antônio foi no banheiro e otorrinolaringologista sabemos o que aconteceu");

// ---------------------------------------------------------------------------------------------------------------
const btn = document.querySelector('#btn');
const p = document.querySelector('#count');

const countButton = () => {
	let clickCount = 0;
	btn.addEventListener('click', () => {
		clickCount +=1;
		p.innerHTML = clickCount;
	});
}
countButton();

// ---------------------------------------------------------------------------------------------------------------


