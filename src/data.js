// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const mostrarPersonajes = (arr) => {
    newArray = [];
    for( let i = 0 ; i <arr.length; i++){
      newArray.push({name: arr[i].name , title: arr[i].title, splash: arr[i].splash , info: arr[i].info , tags: arr[i].tags})
    }
    return newArray;
}

const ordenarAscendente = () => {
  const textoNombre = document.getElementById("nombre");
  let arrOrdenado = arrLol.map(arrLol => arrLol.name).sort();
  return textoNombre.innerHTML = arrOrdenado;
};


const ordenarDescendente = () => {
  const textoNombre = document.getElementById("nombre");
  const arrReverse = arrLol.map(arrLol => arrLol.name).reverse();
  return textoNombre.innerHTML = arrReverse;
}

const inputOrdenar = document.getElementById("ordenar");
const optionAs = document.getElementById("ascendente");
const optionDes = document.getElementById("descendente");

inputOrdenar.addEventListener("click", ordenarAscendente);

inputOrdenar.addEventListener("change", ordenarDescendente);



const listaPersonajes = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push({ name: arr[i].name, title: arr[i].title, img: arr[i].img, attackrange: arr[i].stats.attackrange });
    console.log(newArray);
  }

  window.lol = {
    mostrarPersonajes
  };
