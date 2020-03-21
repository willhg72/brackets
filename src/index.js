module.exports = function check(str, bracketsConfig) {
  // your solution
  let objBrackets = {};
  let arrStackStr = []; 
  let arrPile = []; 
  let arrObjTypeValues = [];
  let arrSpecialBracket = [];
  let specialBracket = 0;
  let res = 0;
  //create an object with the pair key, value, Key is the bracket an the value is the index of bracket 
  objBrackets = bracketsTypes(bracketsConfig);
  // create an array with the value of str to compare with the Pile array
  arrStackStr = str.split("").map(e => objBrackets[e]);
  // create an array with the values of brackets to compare with the Pile array
  arrObjTypeValues = Object.values(objBrackets)
  // identify if there is a  spacial caracater
  let dim = Object.values(objBrackets).length;
      //there is a special bracket 
      arrSpecialBracket = theSpecialBracket(objBrackets)
      for (let i= 0;i < arrStackStr.length;i++){
        //add the pile the first time
          if (i == 0){
                arrPile.push(arrStackStr[0]);
          }else{
              if ((Number(arrPile.slice(-1)) < 0) && ((arrStackStr[i] + Number(arrPile.slice(-1)) == 0)) ){
                 break;   
              }
              specialBracket = arrSpecialBracket[arrSpecialBracket.indexOf(arrStackStr[i])];
              if((arrStackStr[i] + Number(arrPile.slice(-1))) == 0  || (arrStackStr[i] + Number(arrPile.slice(-1))) == (specialBracket + specialBracket)) {
                     arrPile.pop();
              }else{
                    arrPile.push(arrStackStr[i])
              } 
          }    
      }
return arrPile.length > 0  ? false : true;
}
// this fumction returns the  special bracket(s) 
function theSpecialBracket(objBrackets){
    let arrAux = Object.values(objBrackets)
    let arrSpecialBracket = [];
    //convert every values in a positive value
    arrAux = arrAux.map(e => (e < 0 ?e*-1:e))
    arrAux.reduce((s,i,ind,arr) =>{ 
             let regex = RegExp((i < 0 ?i*-1:i),'g')
              if (arr.join("").match(regex).length == 1){
                    arrSpecialBracket.push(Object.values(objBrackets)[ind])
              }
              return true
           },0);
     return arrSpecialBracket;       
}
// creates an object with the types of brackets availables if there is a special bracket makes it unique 
function bracketsTypes(bracketsConfig){
  let objBrackets = {};
  bracketsConfig.map((e,i) => {
    objBrackets[e[0]] = i+1;
    objBrackets[e[1]] = (-1*(i+1))
    });
  return objBrackets;
}

