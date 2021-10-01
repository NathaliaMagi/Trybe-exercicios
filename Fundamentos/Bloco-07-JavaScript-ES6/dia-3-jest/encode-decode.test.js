const { expect, test } = require('@jest/globals');
const exp = require('constants');
const { encode, decode } = require('./enconde-decode');

describe('Requisito 4 - Trabalhando com funções criadas no projeto PlayGroundFunctions', () => {
  test('1- Teste se encode e decode são funções', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  test('2- Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('lala')).toEqual('l1l1');
    expect(encode('hehe')).toEqual('h2h2');
    expect(encode('vivi')).toEqual('v3v3');
    expect(encode('lolo')).toEqual('l4l4');
    expect(encode('mumu')).toEqual('m5m5');
  });

  test('3- Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('l1l1')).toEqual('lala');
    expect(decode('h2h2')).toEqual('hehe');
    expect(decode('v3v3')).toEqual('vivi');
    expect(decode('l4l4')).toEqual('lolo');
    expect(decode('m5m5')).toEqual('mumu');
  });

  test('4- Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('hjr')).toEqual('hjr');
    expect(encode('iha32')).toEqual('3h132');
    expect(decode('123')).toEqual('aei');
    expect(decode('d1b2c3')).toEqual('dabeci');
  });
  
  test('5- Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('palavra').length).toEqual(7);
    expect(encode('camelo').length).toEqual(6);
    expect(decode('12345').length).toEqual(5);
    expect(decode('bc1d2').length).toEqual(5);
  })
});