
 // let newArrName = [];

    // for(let i=0 ; i < arrLol.length ; i++){
    //    newArrName.push(objData[arrLol[i]].name); 
    // }
    
  // const cardTitle = document.getElementById("nombre");
  // const cardText = document.getElementById("titulo");
  

// const ascedente = document.getElementById("ascendente");
// ascedente.addEventListener("click", ordenarAscendente )
//  }
// console.log(ordenarAscendente); 

//const buscandoHeroe = document.getElementById("buscar")
const objLol = LOL.data;
const arrLolTotal = Object.values(objLol);

const arrLolEspecifico = lol.mostrarPersonajes(arrLolTotal);

const containerCardTotal = document.getElementById("cards-total");


const crearCartasLol = (data) => {
  let templateListOfCards = "";
  data.forEach((arrLolEspecifico) => {
    const card = `
    <div class="d-flex flex-sm-wrap pt-5" id="contenedor-cartas">
    <div class="row">
    <div class="col-sm-3 py-2">
            <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${arrLolEspecifico.splash}"/>
                    <div class="card-body" id="card-body">
                      <h5 class="card-title" id="nombre">${arrLolEspecifico.name}</h5>
                      <p class="card-text" id="titulo">${arrLolEspecifico.title}</p>
                      <p class="card-text" id="informacion"> Ataque: ${arrLolEspecifico.info.attack},\n  
                        Defensa: ${arrLolEspecifico.info.defense},\n
                        Magia: ${arrLolEspecifico.info.magic},\n
                        Dificultad: ${arrLolEspecifico.info.difficulty}
                       </p>
                      <p class="card-text" id="tipo">Tipo: ${arrLolEspecifico.tags}<p>
                      <a href="#" class="btn btn-dark">HISTORIA</a>
                    </div>
                  </div>
                </div>
              </div>
              </div>     
    `;
  templateListOfCards += card;
  })
  containerCardTotal.innerHTML = templateListOfCards;
}
 crearCartasLol(arrLolEspecifico);