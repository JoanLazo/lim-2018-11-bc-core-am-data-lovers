require('../src/data.js');

const input = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']
  }
];
const output1 = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']
  },
];
const output2 = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']
  },
];
const output3 = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']
  },
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']
  },
];
const output4 = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']
  },

];
const output5 = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']
  },
];
const output6 = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg"', name: 'Master Yi', title: 'the Wuju Bladesman', info: { attack: 10 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg', name: 'Diana', title: 'Scorn of the Moon', info: { attack: 7 } },
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
      expect(dataL.mostrarPersonajes(input)).not.toEqual(output1);
    });
  });

  describe('dataL.ordenarDataLolAscendente', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataL.ordenarDataLolAscendente).toBe('function');
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
    it('deberia retornar  los tags por categorias; por cada tags elegido', () => {
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
    it('deberia retornar la carta con la información inicial; según el nombre del campeón puesto en búsqueda; ', () => {
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
    it('deberia retornar las cartas por información de ataque de manera descendente', () => {
      expect(dataL.reduceMayorAtaque(input)).toEqual(output6);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataL.reduceMayorAtaque(input)).not.toEqual(input);
    });
  });
});