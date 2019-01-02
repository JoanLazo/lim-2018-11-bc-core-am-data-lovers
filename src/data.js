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
  let championTypeTags = [];
  switch (filterBy) {
  case 'Tags':
    championTypeTags = data.filter(type => type.tags[0] === condition || type.tags[1] === condition);
    break;
  }
  return championTypeTags;
};

const computeStats = (data) => { 
  let attackAverageByType = [];
  for (let i = 0 ; i < data.length ; i++) {
    
    attackAverageByType += data.info[0] + data.info[1] / data.info.length;
  }
  return attackAverageByType;
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
