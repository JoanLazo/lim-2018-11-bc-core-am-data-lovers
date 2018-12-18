require('../src/data.js');

const input = [];
const output = [];

describe('dataL', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof dataL).toBe('object');
    // console.log(dataL);
  });
  describe('dataL.mostrarPersonajes', () => {
    it('deberia ser un funcion', () => {
      expect(typeof dataL.mostrarPersonajes).toBe('function');
    });
    it('deberia retornar un array de objetos, con los valores de las propiedades', () => {
      expect(dataL.mostrarPersonajes(input)).toEqual(output);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.mostrarPersonajes(input)).not.toEqual(input);
    });
  });
});
