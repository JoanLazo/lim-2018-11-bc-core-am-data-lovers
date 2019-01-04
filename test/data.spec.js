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
const input2 = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', name: 'Aatrox', title: 'the Darkin Blade', attackdamage: 60.376, attackdamageperlevel: 3.2 },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg', name: 'Bard', title: 'the Wandering Caretaker', attackdamage: 52, attackdamageperlevel: 3 },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', name: 'Caitlyn', title: 'the Sheriff of Piltover', attackdamage: 53.66, attackdamageperlevel: 2.18 },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', name: 'Darius', title: 'the Hand of Noxus', attackdamage: 56, attackdamageperlevel: 5 },
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
const output5 = [
  {
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']
  },
];
const output6 = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, stats: { attackdamage: 60.376, attackdamageperlevel: 3.2 }, elementAttack: 140 },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg', name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, stats: { attackdamage: 52, attackdamageperlevel: 3 }, elementAttack: 127 },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, stats: { attackdamage: 53.66, attackdamageperlevel: 2.18 }, elementAttack: 108 },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, stats: { attackdamage: 56, attackdamageperlevel: 5 }, elementAttack: 181 }
];
const output7 = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg', name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 } }
];
const output8 = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg', name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 } },
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 } }
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
      expect(dataLol.sortData(input, 'name', 'ascendente')).toEqual(output2);
    });
    it('deberia retornar d de forma ascendente, de A-Z', () => {
      expect(dataLol.sortData(input, 'name', 'descendente')).toEqual(output3);
    });
    it('deberia retornar de menos a mas ataque', () => {
      expect(dataLol.sortData(input, 'ataque', 'ascendente')).not.toEqual(output8);
    });
    it('deberia retornar de mas a menos ataque', () => {
      expect(dataLol.sortData(input, 'ataque', 'descendente')).not.toEqual(output7);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.sortData(input)).not.toEqual(input);
    });
  });

  describe('dataLol.filterData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.filterData).toBe('function');
    });
    it('deberia retornar  los tags por categorias; por cada tags elegido', () => {
      expect(dataLol.filterData(input, 'Tags', 'Marksman')).not.toEqual(output4);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.filterData(input, 'Tags')).not.toEqual(input);
    });

    it('deberia retornar  los tags por categorias; por cada tags elegido', () => {
      expect(dataLol.filterData(input, 'attack', 'attack-promedio')).not.toEqual(output4);
    });

    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.filterData(input, 'attack')).not.toEqual(input);
    });
  });

  describe('dataLol.computeStats', () => {
    it('deberia ser una funcion que me de el ataque del daño total', () => {
      expect(typeof dataLol.computeStats).toBe('function');
    });
    it('deberia retornar las cartas con el ataque del daño total', () => {
      expect(dataLol.computeStats(input2)).toEqual(output6);
    });
  });

  describe('dataLol.filterBySearch', () => {
    it('deberia ser una funcion', () => {
      expect(typeof dataLol.filterBySearch).toBe('function');
    });
    it('deberia retornar la carta con la información inicial; según el nombre del campeón puesto en búsqueda; ', () => {
      expect(dataLol.filterBySearch(input, 'value', 'Aatrox')).toEqual(output5);
    });
    it('deberia retornar un nuevo array,no modificar el original', () => {
      expect(dataLol.filterBySearch(input)).not.toEqual(input);
    });
  });
});