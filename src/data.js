// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const objData = LOL.data;
const arrLol = Object.values(objData);

const cardSolo = document.getElementsByClassName("card")
const textoNombre = document.getElementsByClassName("card-title");
const textoTitulo = document.getElementsByClassName("card-texto");

let prueba1;

for(let i = 0 ; i<objData.length ; i++){
   
   prueba1.ClassName = "card-title"
}

 let mostrarNombre = LOL.data[objData[i]]; 
 const mostrarName = mostrarNombre.name;
 const mostrarTitle = mostrarNombre.title;
 textoNombre.innerHTML = mostrarName;
 console.log(mostrarName);

 const ordenarAscendente = () => {
  const textoNombre = document.getElementById("nombre");
  let arrOrdenado = arrLol.map( arrLol => arrLol.name).sort();
  return textoNombre.innerHTML = arrOrdenado;
 };

 
 const ordenarDescendente = () => {
  const textoNombre = document.getElementById("nombre");
  const arrReverse = arrLol.map( arrLol =>  arrLol.name).reverse();
  return  textoNombre.innerHTML = arrReverse;
 }
  
 const inputOrdenar = document.getElementById("ordenar");
 const optionAs = document.getElementById("ascendente");
 const optionDes = document.getElementById("descendente");
 
 inputOrdenar.addEventListener("click", ordenarAscendente);

 inputOrdenar.addEventListener("change", ordenarDescendente);

// console.log(ordenarAscendente());
// console.log(ordenarDescendente());



window.lol = {
    ordenarAscendente
};
