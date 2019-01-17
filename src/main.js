const lolDataTotal = 'http://127.0.0.1:5500/src/data/lol/lol.json';
function dataFetch() {
  let arrLolEspecifico;
  fetch(lolDataTotal)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      const arrLolTotal = Object.values(data.data);
      arrLolEspecifico = dataLol.newArrayLol(arrLolTotal);
      console.log(arrLolEspecifico);
    }).catch(err => console.log(err));
  return arrLolEspecifico;
}
const dataLolTotal = LOL.data;
const arrLolTotal = Object.values(dataLolTotal);
const arrLolEspecifico = dataLol.newArrayLol(arrLolTotal);
// Creando las cartas de forma dinamica
const containerCardTotal = document.getElementById('cards-total');
const crearCartasLol = (data) => {
  let templateListOfCards = '';
  data.forEach((arrLolEspecifico) => {
    const card = `
    <div class="d-flex flex-wrap pt-5" id="contenedor-cartas">
    <div class="row">
    <div class="col-sm-3 py-2">
            <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                    <div class="card-body" id="card-body">
                      <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                      <p class="card-sub-title" id="titulo">${arrLolEspecifico.title}</p>
                      <p class="card-text"> Ataque: ${arrLolEspecifico.info.attack}</p> 
                      <p class="card-text">Defensa: ${arrLolEspecifico.info.defense}</p>
                      <p class="card-text">Magia: ${arrLolEspecifico.info.magic}</p>
                      <p class="card-text">Dificultad: ${arrLolEspecifico.info.difficulty}</p>
                      <p class="card-text">Tipo: ${arrLolEspecifico.tags}<p>
                    </div>
                  </div>
                </div>
              </div>
              </div>     
    `;
    templateListOfCards += card;
  });
  containerCardTotal.innerHTML = templateListOfCards;
};
crearCartasLol(arrLolEspecifico);
// Ordenando las cartas por el nombre de forma ascendente y descendente segun el nombre
const selectOrder = document.getElementById('ordenar');
selectOrder.addEventListener('change', () => {
  const sortByname = selectOrder.value;
  let sortOrder;
  switch (sortByname) {
  case 'name':
    sortOrder = 'ascendente';
    break;
  case 'name-rev':
    sortOrder = 'descendente';
    break;
  }
  const nameOrderAsc = dataLol.sortData(arrLolEspecifico, sortByname, sortOrder);
  const crearCartasLol = (data) => {
    let templateListOfCards = '';
    data.forEach((arrLolEspecifico) => {
      const card = `
      <div class="d-flex flex-wrap pt-5" id="contenedor-cartas">
      <div class="row">
      <div class="col-sm-3 py-2">
              <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                      <div class="card-body" id="card-body">
                        <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                        <p class="card-sub-title" id="titulo">${arrLolEspecifico.title}</p>
                        <p class="card-text"> Ataque: ${arrLolEspecifico.info.attack}</p> 
                        <p class="card-text">Defensa: ${arrLolEspecifico.info.defense}</p>
                        <p class="card-text">Magia: ${arrLolEspecifico.info.magic}</p>
                        <p class="card-text">Dificultad: ${arrLolEspecifico.info.difficulty}</p>
                        <p class="card-text">Tipo: ${arrLolEspecifico.tags}<p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>     
      `;
      templateListOfCards += card;
    });
    containerCardTotal.innerHTML = templateListOfCards;
  };
  crearCartasLol(nameOrderAsc);
});
// Ordenando las cartas por el ataque de forma ascendente y descendente segun el ataque
const selectOrderAttack = document.getElementById('ataque');
selectOrderAttack.addEventListener('change', () => {
  const sortByname = selectOrderAttack.value;
  let sortOrder;
  switch (sortByname) {
  case 'ataque-asc':
    sortOrder = 'ascendente';
    break;
  case 'ataque-desc':
    sortOrder = 'descendente';
    break;
  }
  const nameOrderAsc = dataLol.sortData(arrLolEspecifico, sortByname, sortOrder);
  const crearCartasLol = (data) => {
    let templateListOfCards = '';
    data.forEach((arrLolEspecifico) => {
      const card = `
      <div class="d-flex flex-wrap pt-5" id="contenedor-cartas">
      <div class="row">
      <div class="col-sm-3 py-2">
              <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                      <div class="card-body" id="card-body">
                        <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                        <p class="card-sub-title" id="titulo">${arrLolEspecifico.title}</p>
                        <p class="card-text"> Ataque: ${arrLolEspecifico.info.attack}</p> 
                        <p class="card-text">Defensa: ${arrLolEspecifico.info.defense}</p>
                        <p class="card-text">Magia: ${arrLolEspecifico.info.magic}</p>
                        <p class="card-text">Dificultad: ${arrLolEspecifico.info.difficulty}</p>
                        <p class="card-text">Tipo: ${arrLolEspecifico.tags}<p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>     
      `;
      templateListOfCards += card;
    });
    containerCardTotal.innerHTML = templateListOfCards;
  };
  crearCartasLol(nameOrderAsc);
});
// Filtar los campeones segun el tipo
const selectByType = document.getElementById('filtro');
selectByType.addEventListener('change', () => {
  const filterBy = 'Tags';
  const championTypeValue = selectByType.value;
  const championByType = dataLol.filterData(arrLolEspecifico, filterBy, championTypeValue);
  const crearCartasLol = (data) => {
    let templateListOfCards = '';
    data.forEach((arrLolEspecifico) => {
      const card = `
      <div class="d-flex flex-wrap pt-5" id="contenedor-cartas">
      <div class="row">
      <div class="col-sm-3 py-2">
              <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                      <div class="card-body" id="card-body">
                        <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                        <p class="card-sub-title" id="titulo">${arrLolEspecifico.title}</p>
                        <p class="card-text"> Ataque: ${arrLolEspecifico.info.attack}</p> 
                        <p class="card-text">Defensa: ${arrLolEspecifico.info.defense}</p>
                        <p class="card-text">Magia: ${arrLolEspecifico.info.magic}</p>
                        <p class="card-text">Dificultad: ${arrLolEspecifico.info.difficulty}</p>
                        <p class="card-text">Tipo: ${arrLolEspecifico.tags}<p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>     
      `;
      templateListOfCards += card;
    });
    containerCardTotal.innerHTML = templateListOfCards;
  };
  crearCartasLol(championByType);
});
// Mostrando los campeones por busqueda , buscar por inicial y por el nombre completo
const btnSearch = document.getElementById('btn-buscar');
btnSearch.addEventListener('click', () => {
  const inputSearch = document.getElementById('busqueda').value;
  /* if (inputSearch === '' || inputSearch === ' ') {
    //alert('Escriba el nombre de un Campeón')
  } */
  const inputValue = 'value';
  const championBySearch = dataLol.filterBySearch(arrLolEspecifico, inputValue, inputSearch);
  const crearCartasLol = (data) => {
    let templateListOfCards = '';
    data.forEach((arrLolEspecifico) => {
      const card = `
      <div class="d-flex flex-wrap pt-5" id="contenedor-cartas">
      <div class="row">
      <div class="col-sm-3 py-2">
              <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                      <div class="card-body" id="card-body">
                        <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                        <p class="card-sub-title" id="titulo">${arrLolEspecifico.title}</p>
                        <p class="card-text"> Ataque: ${arrLolEspecifico.info.attack}</p> 
                        <p class="card-text">Defensa: ${arrLolEspecifico.info.defense}</p>
                        <p class="card-text">Magia: ${arrLolEspecifico.info.magic}</p>
                        <p class="card-text">Dificultad: ${arrLolEspecifico.info.difficulty}</p>
                        <p class="card-text">Tipo: ${arrLolEspecifico.tags}<p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>     
      `;
      templateListOfCards += card;
    });
    containerCardTotal.innerHTML = templateListOfCards;
  };
  crearCartasLol(championBySearch);
});
// Mostrando las cartas filtratas por stats y mostrando el ataque daño aumentado total
const selectStats = document.getElementById('stats-attack');
selectStats.addEventListener('change', () => {
  const championTypeValue = selectStats.value;
  const filterBy = 'attack';
  const championByType = dataLol.filterData(arrLolEspecifico, filterBy, championTypeValue);
  const championByStatsAttack = dataLol.computeStats(championByType);
  const crearCartasLol = (data) => {
    let templateListOfCards = '';
    data.forEach((arrLolEspecifico) => {
      const card = `)
      <div class="d-flex flex-wrap pt-5" id="contenedor-cartas">
      <div class="row">
      <div class="col-sm-3 py-2">
              <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                      <div class="card-body" id="card-body">
                        <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                        <p class="card-sub-title" id="titulo">${arrLolEspecifico.title}</p>
                        <p class="card-text"> Daño de ataque: ${arrLolEspecifico.stats.attackdamage}</p>
                        <p class="card-text"> Daño de ataque por level: ${arrLolEspecifico.stats.attackdamageperlevel}</p>
                        <p class="card-text"> Daño de ataque aumentado total: ${arrLolEspecifico.elementAttack}</p> 
                      </div>
                    </div>
                  </div>
                </div>
                </div>     
      `;
      templateListOfCards += card;
    });
    containerCardTotal.innerHTML = templateListOfCards;
  };
  crearCartasLol(championByStatsAttack);
});

