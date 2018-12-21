require('../src/data.js');

const input = [
  data : {
    Aatrox: {
      version: "6.24.1", id: "Aatrox", key: "266", name: "Aatrox", title: "the Darkin Blade",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      blurb: "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
      info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
      image: {
        full: "Aatrox.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "BloodWell",
      stats: {
        hp: 537.8, hpperlevel: 85, mp: 105.6, mpperlevel: 45, movespeed: 345, armor: 24.384, armorperlevel: 3.8, spellblock: 32.1, spellblockperlevel: 1.25, attackrange: 150, hpregen: 6.59,
        hpregenperlevel: 0.5, mpregen: 0, mpregenperlevel: 0, crit: 0, critperlevel: 0, attackdamage: 60.376, attackdamageperlevel: 3.2, attackspeedoffset: -0.04, attackspeedperlevel: 3
      }
    },

    Bard: {
      version: "6.24.1", id: "Bard", key: "432", name: "Bard", title: "the Wandering Caretaker",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Bard.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
      blurb: "Bard travels through realms beyond the imagination of mortal beings. Some of Valoran's greatest scholars have spent their lives trying to understand the mysteries he embodies. This enigmatic spirit has been given many names throughout the history of ...",
      info: { attack: 4, defense: 4, magic: 5, difficulty: 9 },
      image: {
        full: "Bard.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Support", "Mage"],
      partype: "MP",
      stats: {
        hp: 535, hpperlevel: 89, mp: 350, mpperlevel: 50, movespeed: 330, armor: 25, armorperlevel: 4, spellblock: 30, spellblockperlevel: 0, attackrange: 500, hpregen: 5.4,
        hpregenperlevel: 0.55, mpregen: 6, mpregenperlevel: 0.45, crit: 0, critperlevel: 0, attackdamage: 52, attackdamageperlevel: 3, attackspeedoffset: 0, attackspeedperlevel: 2
      }
    },

    Caitlyn: {
      version: "6.24.1", id: "Caitlyn", key: "51", name: "Caitlyn", title: "the Sheriff of Piltover",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Caitlyn.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
      blurb: "''Go ahead, run. I'll give you a five minute head start.''<br><br>One of the reasons Piltover is known as the City of Progress is because it has an extraordinarily low crime rate. This hasn't always been the case; brigands and thieves of all sorts ...",
      info: { attack: 8, defense: 2, magic: 2, difficulty: 6 },
      image: {
        full: "Caitlyn.png",
        sprite: "champion0.png",
        group: "champion",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Marksman"],
      partype: "MP",
      stats: {
        hp: 524.4, hpperlevel: 80, mp: 313.7, mpperlevel: 35, movespeed: 325, armor: 22.88, armorperlevel: 3.5, spellblock: 30, spellblockperlevel: 0, attackrange: 650, hpregen: 5.67,
        hpregenperlevel: 0.55, mpregen: 7.4, mpregenperlevel: 0.55, crit: 0, critperlevel: 0, attackdamage: 53.66, attackdamageperlevel: 2.18, attackspeedoffset: 0.1, attackspeedperlevel: 4
      }
    },

    Darius: {
      version: "6.24.1", id: "Darius", key: "122", name: "Darius", title: "the Hand of Noxus",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Darius.png",
      splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
      blurb: "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened warrior. Orphaned at a young age, Darius had to fight to keep himself and his younger brother alive. By the time he joined the military, he had ...",
      info: { attack: 9, defense: 5, magic: 1, difficulty: 2 },
      image: {
        full: "Darius.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "MP",
      stats: {
        hp: 582.24, hpperlevel: 100, mp: 263, mpperlevel: 37.5, movespeed: 340, armor: 30, armorperlevel: 4, spellblock: 32.1, spellblockperlevel: 1.25, attackrange: 175, hpregen: 9.845,
        hpregenperlevel: 0.95, mpregen: 6.585, mpregenperlevel: 0.35, crit: 0, critperlevel: 0, attackdamage: 56, attackdamageperlevel: 5, attackspeedoffset: 0, attackspeedperlevel: 1
      }
    }
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
      expect(dataL.mostrarPersonajes(input)).not.toEqual(input);
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