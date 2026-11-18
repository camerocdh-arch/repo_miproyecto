const calcularDescuento = require('../utils/descuento');

describe('calcular el descuento', () => {
    test.each`
      precio | descuento | resultadoEsperado
      ${100} | ${20}     | ${80}
      ${200} | ${50}     | ${100}
      ${75}  | ${0}      | ${75}
      ${1}   | ${0.5}    | ${0.995}
      ${0}   | ${0}      | ${0}
    `('calcularDescuento($precio, $descuento) debería devolver $resultadoEsperado', ({precio, descuento, resultadoEsperado}) => {
      expect(calcularDescuento(precio, descuento)).toBe(resultadoEsperado);
    });
});