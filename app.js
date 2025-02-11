function saludo(nombre) {
    return 'Hola, ${nombre}! Bienvenido a GitHub Actions con Node.js.';
  }
  
  console.log(saludo("Usuario"));
  
  module.exports = saludo;