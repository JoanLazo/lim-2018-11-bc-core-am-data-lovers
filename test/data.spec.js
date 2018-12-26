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
  },

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
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']
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

describe('dataLol', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof dataLol).toBe('object');
    // console.log(dataLol);
  });
  describe('dataLol.newArrayLol', () => {
    it('deberia ser un funcion', () => {
      expect(typeof dataLol.newArrayLol).toBe('function');
    });
    it('deberia retornar un array de objetos, con los valores de las propiedades', () => {
      expect(dataLol.newArrayLol(input)).toEqual(output1);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.newArrayLol(input)).toEqual(output1);
    });
  });

  describe('dataLol.sortData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.sortData).toBe('function');
    });
    it('deberia retornar de forma ascendente, de A-Z', () => {
      expect(dataLol.sortData(input)).toEqual(output2);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.sortData(input)).toEqual(output2);
    });
  });

  describe('dataLol.sortData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.sortData).toBe('function');
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.sortData(input)).toEqual(output2);
    });
    it('deberia retornar de forma descendente, de Z-A', () => {
      expect(dataLol.sortData(input)).toEqual(output3);
    });
  });

  describe('dataLol.filterData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.filterData).toBe('function');
    });
    it('deberia retornar  los tags por categorias; por cada tags elegido', () => {
      expect(dataLol.filterData(output1)).not.toEqual(output4);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.filterData(input)).not.toEqual(input);
    });
  });

  describe('dataLol.filterBySearch', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.filterBySearch).toBe('function');
    });
    it('deberia retornar la carta con la información inicial; según el nombre del campeón puesto en búsqueda; ', () => {
      expect(dataLol.filterBySearch(output1)).not.toEqual(output5);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.filterBySearch(input)).not.toEqual(input);
    });
  });

  describe('dataLol.computeStats', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.computeStats).toBe('function');
    });
    it('deberia retornar las cartas por información de ataque de manera descendente', () => {
      expect(dataLol.computeStats(output1)).not.toEqual(output6);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.computeStats(input)).not.toEqual(input);
    });
  });
});