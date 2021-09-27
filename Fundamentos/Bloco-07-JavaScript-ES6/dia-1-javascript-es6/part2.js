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

const longestWord = (frase) => {
	let fraseTeste = frase.split(' ');
	let maiorPalavra = fraseTeste[0];
	for (let index = 1; index < fraseTeste.length; index += 1) {
	  if (maiorPalavra.length < fraseTeste[index].length) {
		maiorPalavra = fraseTeste[index];
	  }
	}
	return maiorPalavra;
  }
  console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

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
const foundX = (text, word) => {
	let newText = text.replace('x', word);
	return newText;
}
console.log(foundX('Robson é x', 'demais'));

// ---------------------------------------------------------------------------------

const concatStrings = (word) => {
	word = word.split(' ');
	let frase = word.sort();
	return frase;
}
console.log( concatStrings('HTML, CSS, JS, Java, Bootstrap'));
