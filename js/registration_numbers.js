function RegistrationNumbers(){
  var temp = {};
  var takeReg = function(registration_number){
    if(Number.isNaN(Number(registration_number)) && (isCapeTown(registration_number) || isBellville(registration_number) ||isPaarl(registration_number) || isHermanus(registration_number))){
      if(temp[registration_number.toUpperCase()] === undefined){
        temp[registration_number.toUpperCase()] = 0;
      }
      if(temp[registration_number.toUpperCase()] === 1){
        return false;
      }
      else if(temp[registration_number.toUpperCase()] === 0){
        temp[registration_number.toUpperCase()] += 1;
        return true;
      }
    }
  }
  var isCapeTown = function(registration_number){
      return (registration_number.trim().toUpperCase()).startsWith('CA');
  }
  var isBellville = function(registration_number){
    return (registration_number.trim().toUpperCase()).startsWith('CY');
  }
  var isPaarl = function(registration_number){
    return (registration_number.trim().toUpperCase()).startsWith('CJ');
  }
  var isHermanus = function(registration_number){
    return (registration_number.trim().toUpperCase()).startsWith('CEM');
  }

  var regFromTown = function(registration_number , town){
    if(registration_number != '' && town != ''){
      if((registration_number.trim().toUpperCase()).startsWith('CA') && town === 'capetown'){
        return registration_number.toUpperCase();
      }
      else if((registration_number.trim().toUpperCase()).startsWith('CY') && town === 'bellville'){
        return registration_number.toUpperCase();
      }
      else if((registration_number.trim().toUpperCase()).startsWith('CJ') && town==='paarl'){
        return registration_number.toUpperCase();
      }
      else if((registration_number.trim().toUpperCase()).startsWith('CEM') && town==='hermunas'){
        return registration_number.toUpperCase();
      }
      else if(registration_number ===''){
      }
    }
    else if(registration_number ==='' && town === 'all'){
      for(var key in temp)
        return key.toUpperCase();
      }
  }
  //all cape town registrations
  var allregFromCapeTown = function(temp){
    var myArr = [];
    for(var i = 0; i < sizeObj(temp); i++){
      if(isCapeTown(Object.keys(temp)[i] ) ){
        myArr.push(Object.keys(temp)[i]);
      }
    }
    return myArr;
  }
  //all bellville registrations
  var allregFromBellvile = function(temp){
    var myArr = [];
    for(var i = 0; i < sizeObj(temp); i++){
      if(isBellville(Object.keys(temp)[i]) ){
        myArr.push(Object.keys(temp)[i]);
      }
    }
    return myArr;
  }
  //all paarl registrations
  var allregFromPaarl = function(temp){
    var myArr = [];
    for(var i = 0; i < sizeObj(temp); i++){
      if( isPaarl(Object.keys(temp)[i])){
        myArr.push(Object.keys(temp)[i]);
      }
    }
    return myArr;
  }
  //all hermunas registrations
  var allregFromHermanus = function(temp){
    var myArr = [];
    for(var i = 0; i < sizeObj(temp); i++){
      if(isHermanus(Object.keys(temp)[i])){
        myArr.push(Object.keys(temp)[i]);
      }
    }
    return myArr;
  }
  //returns the size of the object
  var sizeObj = function(temp){
    var sum = 0;
    for(var key in temp){
      if(temp.hasOwnProperty(key)){
        sum += temp[key];
      }
    }
    return sum;
  }
  //return the last registration plate
  var returnLast = function(temp){
    return Object.keys(temp)[Object.keys(temp).length -1];
  }
  //return the first registration plate
  var returnFirst = function(temp){
    return Object.keys(temp)[0];
  }

  return{
    enter : takeReg,
    regTown : regFromTown,
    checkCape : isCapeTown,
    checkBell : isBellville,
    checkPaarl : isPaarl,
    checkHer : isHermanus,
    allCape : allregFromCapeTown,
    allBellville : allregFromBellvile,
    allPaarl : allregFromPaarl,
    allHer : allregFromHermanus,
    objtempReg : temp,
    size : sizeObj,
    last : returnLast,
    first : returnFirst,
  }
}
