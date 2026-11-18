function esPalindromo(palabra) {
  const palabraMinuscula = palabra.toLowerCase();
  const palabraInvertida = palabraMinuscula.split('').reverse().join('');

  return palabraMinuscula === palabraInvertida;
}

module.exports = esPalindromo;