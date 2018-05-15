function RegistrationNumbers(){
  var temp = {};
  var takeReg = function(registration_number){
    if(registration_number != ''){
      if(temp[registration_number.toUpperCase()] === undefined){
        temp[registration_number.toUpperCase()] = 0;
      }
      if(temp[registration_number.toUpperCase()] === 1){

      }
      else{
        temp[registration_number.toUpperCase()] += 1;
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

  var regFormTown = function(registration_number , town){
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
  var allreg = function(temp){
    for(var key in temp)
      return key.toUpperCase();
  }
  var sizeObj = function(temp){
    var sum = 0;
    for(var key in temp){
      if(temp.hasOwnProperty(key)){
        sum += temp[key];
      }
    }
    return sum;
  }
  var returnLast = function(temp){
    return Object.keys(temp)[Object.keys(temp).length -1];
  }
  var returnFirst = function(temp){
    return Object.keys(temp)[0];
  }
  return{
    enter : takeReg,
    regTown : regFormTown,
    checkCape : isCapeTown,
    checkBell : isBellville,
    checkPaarl : isPaarl,
    checkHer : isHermanus,
    showAll : allreg,
    objtempReg : temp,
    size : sizeObj,
    last : returnLast,
    first : returnFirst,
  }
}
