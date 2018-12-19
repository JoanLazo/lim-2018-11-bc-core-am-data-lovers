require('../src/data.js');

const input = [
  { name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank'] },
  { name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage'] },
  { name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman'] },
  { name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank'] }
];
const output1 = [
  { name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank'] },
  { name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage'] },
  { name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman'] },
  { name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank'] },
];
const output2 = [
  { name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank'] },
  { name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage'] },
  { name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman'] },
  { name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank'] },
];
const output3 = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg',
    name: 'Zyra', title: 'Rise of the Thorns"', info: { attack: 4, defense: 3, magic: 8, difficulty: 7 }, tags: ['Mage', 'Support'] },
  { name: 'Yorick', title: 'Shepherd of Souls', info: { attack: 6, defense: 6, magic: 4, difficulty: 6 }, tags: ['Fighter', 'Tank'] },
  { name: 'Xerath', title: 'the Magus Ascendant', info: { attack: 1, defense: 3, magic: 10, difficulty: 8 }, tags: ['Mage', 'Assassin'] },
  { name: 'Warwick', title: 'the Blood Hunter', info: { attack: 7, defense: 4, magic: 4, difficulty: 3 }, tags: ['Fighter', 'Tank'] },
];
const output4 = [
  { tags: ['Fighter', 'Tank'] },
  { tags: ['Support', 'Mage'] },
  { tags: ['Marksman'] },
  { tags: ['Fighter', 'Tank'] },
];
const output5 = [
  { name: 'Aatrox', title: 'the Darkin Blade', info: {attack: 8, defense: 4, magic: 3, difficulty: 4}, tags: ['Fighter', 'Tank'] },
];
const output6 = [
  { name: 'Master Yi', title: 'the Wuju Bladesman', info: { attack: 10 } },
  { name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9 } },
  { name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8 } },
  { name: 'Diana', title: 'Scorn of the Moon', info: { attack: 7 } },
];

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
      expect(dataL.mostrarPersonajes(input)).toEqual(output1);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.mostrarPersonajes(input)).not.toEqual(input);
    });
  });

  describe('dataL.ordenarDataLolAscendente', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataL.ordenarDataLol).toBe('function');
    });
    it('deberia retornar de forma ascendente, de A-Z', () => {
      expect(dataL.ordenarDataLolAscendente(input)).toEqual(output2);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.ordenarDataLolAscendente(input)).not.toEqual(input);
    });
  });

  describe('dataL.ordenarDataLolDescendente', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataL.ordenarDataLolDescendente).toBe('function');
    });
    it('deberia retornar de forma descendente, de Z-A', () => {
      expect(dataL.ordenarDataLolDescendente(input)).toEqual(output3);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.ordenarDataLolDescendente(input)).not.toEqual(input);
    });
  });

  describe('dataL.filtraDataTags', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataL.filtraDataTags).toBe('function');
    });
    it('deberia retornar  los tags por categorias; filtrarlas en orden', () => {
      expect(dataL.filtraDataTags(input)).toEqual(output4);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.filtraDataTags(input)).not.toEqual(input);
    });
  });

  describe('dataL.filtrarPorBusqueda', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataL.filtrarPorBusqueda).toBe('function');
    });
    it('deberia retornar  los tags por categorias; filtrarlas por tipo de ataque', () => {
      expect(dataL.filtrarPorBusqueda(input)).toEqual(output5);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.filtrarPorBusqueda(input)).not.toEqual(input);
    });
  });

  describe('dataL.reduceMayorAtaque', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataL.reduceMayorAtaque).toBe('function');
    });
    it('deberia retornar el ataque mas alto, el que tenga mayor numero de ataques', () => {
      expect(dataL.reduceMayorAtaque(input)).toEqual(output6);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.reduceMayorAtaque(input)).not.toEqual(input);
    });
  });
});