const sum = require('./sum');

describe('Requisito 1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  test('1.Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9); // return 9 - exercicio-1
  });

  it('2.Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0); // return 0 - exercicio-2
  });

  it('3.Teste se o retorno de sum(4, "5") dá error', () => {
    expect(() => sum(4, '5')).toThrowError(); // return 0 - exercicio-2
  });

  it('4.Teste se a mensagem de  retorno de sum(4, "5") é igual a "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers'); // return 0 - exercicio-2
  });
});