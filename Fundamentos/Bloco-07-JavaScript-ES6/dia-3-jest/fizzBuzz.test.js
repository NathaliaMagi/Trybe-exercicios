const { expect } = require('@jest/globals');
const fizzbuzz = require('./fizzBuzz');

describe('Requisito 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    it('1- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

    it('2- Faça uma chamada com um número divisível por 3 e verifique o retorno', () => {
        expect(fizzbuzz(18)).toBe('fizz');
    });

    it('3- Faça uma chamada com um número divisível por 5 e verifique o retorno', () => {
        expect(fizzbuzz(20)).toBe('buzz');
    });

    it('4- Faça uma chamada com um número  que não é divisível por 3 e 5 e verifique o retorno', () => {
        expect(fizzbuzz(7)).not.toBe('fizzbuzz');
    });

    it('5- Faça uma chamada com um parâmetro que não é um número e verifique o retorno', () => {
        expect(fizzbuzz('a')).toBeFalsy();
    });
});