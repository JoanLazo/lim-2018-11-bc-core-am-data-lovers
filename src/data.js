// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const newArrayLol = (arr) => {
  return arr.map(obj => Object.assign({}, obj, {
    name: obj.name,
    title: obj.title,
    splash: obj.splash,
    info: obj.info,
    tags: obj.tags,
    stats: obj.stats,
  }));
};

const sortData = (data, sortBy, sortOrder) => {
  let listChampionsOrder = [];
  switch (sortOrder) {
  case 'ascendente':
    if (sortBy === 'name') {
      listChampionsOrder = data.sort((nameA, nameB) => nameA.name > nameB.name ? 1 : -1);
    } else {
      listChampionsOrder = data.sort((ataqueA, ataqueB) => ataqueA.info.attack > ataqueB.info.attack ? 1 : -1);
    }
    break;
  case 'descendente':
    if (sortBy === 'name') {
      listChampionsOrder = data.sort((nameA, nameB) => nameA.name > nameB.name ? 1 : -1).reverse();
    } else {
      listChampionsOrder = data.sort((ataqueA, ataqueB) => ataqueA.info.attack > ataqueB.info.attack ? 1 : -1).reverse();
    }
    break;
  }
  return listChampionsOrder;
};


const filterData = (data, filterBy, condition) => {
  let championFilter = [];
  switch (filterBy) {
  case 'Tags':
    championFilter = data.filter(type => type.tags[0] === condition || type.tags[1] === condition);
    break;
  case 'attack': 
    championFilter = data.filter(obj => obj.stats && condition);
    break;
  }
  return championFilter;
};

const computeStats = (data) => { 
  let increasedAttack = [];
  // let attackByOne = [];
  increasedAttack = data.map((obj) => Math.round((obj.stats.attackdamageperlevel * 25) + obj.stats.attackdamage));
  // attackByOne = data.forEach(increasedAttack);
  return increasedAttack;
};

const filterBySearch = (data, input, value) => {
  let searchByName = [];
  switch (input) {
  case 'value': 
    searchByName = data.filter(champion => champion.name === value.toLowerCase() || champion.name[0] === value.toUpperCase() || champion.name === value);
    break;
  }
  return searchByName;
};

window.dataLol = {
  newArrayLol,
  sortData,
  filterData,
  computeStats,
  filterBySearch,
};
