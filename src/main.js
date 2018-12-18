const objLol = LOL.data;
const arrLol = Object.values(objLol);


arrLol.forEach(objDatos => {
  console.log(objDatos)
});
  
  
let ataque = arrLol.filter(arrLo => arrLo.attack >= 2);


