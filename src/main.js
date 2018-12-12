// var objData = LOL.data;

// var arrKeysLol = Object.keys(objData)
// var newArray = []
// for(var i = 0; i < arrKeysLol.length; i++){
//     newArray.push(objData[arrKeysLol[i]].name)
// }

// newArray
  const objData = LOL.data;
  const arrLol = Object.keys(objData);

  let newArrName =[];

    for(let i=0 ; i < arrLol.length ; i++){
       newArrName.push(objData[arrLol[i]].name); 
    }
    

console.log(newArrName);  
