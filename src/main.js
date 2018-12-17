
  const objData = LOL.data;
  const arrLol = Object.values(objData);

  // let newArrName = [];

    // for(let i=0 ; i < arrLol.length ; i++){
    //    newArrName.push(objData[arrLol[i]].name); 
    // }
    
  const imagenCard = document.getElementById("imagen");
  const cardTitle = document.getElementById("nombre");
  const cardText = document.getElementById("titulo");


  // Creando una funcion para que se muestre la data en los cards
  //   const mostrarData = function(){
  //   for(let i= 0 ; i<arrLol.length; i++){
    
  //   }
    
  //  };

// mostrando el nombre y el titulo en el card n° 1
  const nombres = arrLol.map( arrLol =>  arrLol.name).filter( name => name === "Aatrox");
  const title = arrLol.map( arrLol =>  arrLol.title).filter( name => name === "the Darkin Blade");
  
  
  cardTitle.innerHTML = `<h5>${nombres}</h5>`
  cardText.innerHTML = `<p>${title}</p>`
  



// creando la funcion de orden ascendente

const ordenarAscendente = function(){
  

const ascedente = document.getElementById("ascendente");
ascedente.addEventListener("click", ordenarAscendente )
 }
console.log(ordenarAscendente); 

//Creando la función del buscador

//const buscandoHeroe = document.getElementById("buscar")
  