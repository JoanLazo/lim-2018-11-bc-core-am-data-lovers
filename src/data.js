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

const ordenarDataLolAscendente = (arr) => {
  return arr.map(obj => Object.assign({}, obj, {
    splash: obj.splash,
    name: obj.name,
    title: obj.title,
    info: obj.info,
    tags: obj.tags,
  })).sort();
};

const ordenarDataLolDescendente = (arr) => {
  return arr.map(obj => Object.assign({}, obj, {
    splash: obj.splash,
    name: obj.name,
    title: obj.title,
    info: obj.info,
    tags: obj.tags,
  })).reverse();
};
const filtraDataTags = (arr) => {
  return arr.map(obj => Object.assign({}, obj, {
    splash: obj.splash,
    name: obj.name,
    title: obj.title,
    info: obj.info,
    tags: obj.tags,
  })).filter((obj) => {
    if (obj.tags === 'Tank') {
      obj.tags;  
    } else if (obj.tags === 'Fighter') {
      obj.tags;
    } else if (obj.tags === 'Assassin') {
      obj.tags;
    } else if (obj.tags === 'Mage') {
      obj.tags;
    } else if (obj.tags === 'Support') {
      obj.tags;
    } else if (obj.tags === 'Marksamn') {
      obj.tags;
    } else
      obj.tags;
  });
};

const filtrarPorBusqueda = (arr) => {
  const buscarPorNombre = arr.reduce((acum, ele) => {
    if (ele.name === name.value && ele.name !== '') {
      acum = ele.name;
    }
    return acum;
  }, {});
  return buscarPorNombre;
};

const reduceMayorAtaque = (arr) => {
  const campeonMasAtaque = arr.reduce((acum, ele) => {
    if (ele.info.attack >= 9) {
      acum = ele.info.attack;
    }
    return acum;
  }, {});
  return campeonMasAtaque;
};

window.dataL = {
  mostrarPersonajes,
  ordenarDataLolAscendente,
  ordenarDataLolDescendente,
  filtraDataTags,
  filtrarPorBusqueda,
  reduceMayorAtaque,
};
