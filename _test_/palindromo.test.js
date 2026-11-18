const palindromo = require('../utils/palindromo');

describe('palabra invertida', () => {

    test.each`
        entrada                  | resultadoEsperado
        ${'amor'}                | ${false}
        ${'12345'}               | ${false}
        ${'A'}                   | ${true}
        ${'oso'}                 | ${true}
        ${'ama'}                 | ${true}
        ${'palabra'}             | ${false}
        ${'casa'}                | ${false}
        ${'radar'}               | ${true}
        ${'reconocer'}           | ${true}
        ${'Anita lava la tina'}  | ${false}
    `('$entrada debería devolver $resultadoEsperado', ({entrada, resultadoEsperado}) => {

        expect(palindromo(entrada)).toBe(resultadoEsperado);

    });

});