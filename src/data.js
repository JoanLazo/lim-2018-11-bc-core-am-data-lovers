// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const mostrarPersonajes = (arr) => {
  return arr.map(obj => Object.assign({}, obj, {
    name: obj.name,
    title: obj.title,
    splash: obj.splash,
    info: obj.info,
    tags: obj.tags,
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
  let damageIncreased = data.map(obj => obj.stats.attackdamageperlevel - obj.stats.attackdamaga);
  return damageIncreased;
};

const filtrarPorBusqueda = (data, value) => {
  let buscarPorNombre = [];
  switch (value) {
  case 'name': 
    buscarPorNombre = data.filter(champion => champion.name.index(0) === value.toUpperCase() || champion.name === value);
    break;
  default:
    alert('Escriba el nombre del campeón que desea buscar');
  }
  return buscarPorNombre;
};

window.dataL = {
  mostrarPersonajes,
  sortData,
  filterData,
  computeStats,
  filtrarPorBusqueda,
};
