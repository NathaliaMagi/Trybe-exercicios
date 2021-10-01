const { expect } = require('@jest/globals');
const remove = require('./remove');

describe('Requisito 2- A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    it('1- Testa se o retorno do array é [1, 2, 4]', () => {
        expect(remove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('2- Testa se o retorno do array não é [1, 2, 3, 4]', () => {
        expect(remove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('3- Testa se o retorno do array é o esperado [1, 2, 3, 4] sem tirar o 5', () => {
        expect(remove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
})