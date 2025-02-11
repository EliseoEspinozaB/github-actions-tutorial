const saludo = require("../app");

test("Debe devolver un saludo con el nombre dado", () => {
  expect(saludo("Carlos")).toBe("Hola, Carlos! Bienvenido a GitHub Actions con Node.js.");
});
