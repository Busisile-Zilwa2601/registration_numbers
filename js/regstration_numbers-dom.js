var regNum = document.querySelector('.regNum');
var list = document.querySelector('.addHere');
var dropDown = document.getElementById('townBox');
var message = document.getElementById('footer');

var reg = RegistrationNumbers();
var objReg = {};
function addRegFunction(){
  var newElement = document.createElement('li');
  regNumValue = regNum.value;
  var userSelection = dropDown.options[dropDown.selectedIndex].value;
  if(reg.enter(regNumValue)){
    if(reg.size(objReg)>1){
      objReg = Object.assign(objReg , reg.objtempReg);
    }
    else{
      objReg = reg.objtempReg;
    }
    console.log(objReg);
    var lastElem = reg.last(objReg);
    if(userSelection === 'capetown'){
      if(reg.checkCape(lastElem)){
        newElement.innerHTML = lastElem;
        list.appendChild(newElement);
      }
      else{
        lastElem.trim();
        var startString = (lastElem.substring(0,1)).toUpperCase();
        if(startString === "CY")
          message.innerHTML = lastElem + ' plate added on Bellville';
        else if(startString === "CJ")
            message.innerHTML = lastElem + ' plate added on Paarl';
        else
            message.innerHTML = lastElem + ' plate added on Hermanus';
      }
    }
    else if(userSelection === 'bellville'){
      if(reg.checkBell(lastElem)){
        newElement.innerHTML = lastElem;
        list.appendChild(newElement);
      }
      else{
        lastElem.trim();
        var startString = (lastElem.substring(0,1)).toUpperCase();
        if(startString === "CA")
          message.innerHTML = lastElem + ' plate added on Cape Town';
        else if(startString === "CJ")
            message.innerHTML = lastElem + ' plate added on Paarl';
        else
            message.innerHTML = lastElem + ' plate added on Hermanus';
      }
    }
    else if(userSelection === 'paarl'){
      if(reg.checkPaarl(lastElem)){
        newElement.innerHTML = lastElem;
        list.appendChild(newElement);
      }
      else{
        lastElem.trim();
        var startString = (lastElem.substring(0,1)).toUpperCase();
        if(startString === "CY")
          message.innerHTML = lastElem + ' plate added on Bellville';
        else if(startString === "CA")
            message.innerHTML = lastElem + ' plate added on Cape Town';
        else
            message.innerHTML = lastElem + ' plate added on Hermanus';
      }
    }
    else if(userSelection === 'hermanus'){
      if(reg.checkHer(lastElem)){
        newElement.innerHTML = lastElem;
        list.appendChild(newElement);
      }
      else{
        lastElem.trim();
        var startString = (lastElem.substring(0,1)).toUpperCase();
        if(startString === "CY")
          message.innerHTML = lastElem + ' plate added on Bellville';
        else if(startString === "CA")
            message.innerHTML = lastElem + ' plate added on Cape Town';
        else
            message.innerHTML = lastElem + ' plate added on Paarl';
      }
    }
    else{
      newElement.innerHTML = lastElem;
      list.appendChild(newElement);
    }
  }
}
var addRegBtn = document.getElementById('addReg');
addRegBtn.addEventListener('click', addRegFunction);
function changeSelect(){
  console.log(list.children.length);
  message.innerHTML = '';
  for(var i =0; i = list.children.length ; i){
      list.removeChild(list.children[0]);
  }
  console.log(list.children);
  if(dropDown.options[dropDown.selectedIndex].value === 'capetown'){
    if(reg.allCape(reg.objtempReg).length !=0){
      for(var i = 0; i < reg.allCape(reg.objtempReg).length; i++){
        var newElement = document.createElement('li');
        newElement.innerHTML = reg.allCape(reg.objtempReg)[i];
        list.appendChild(newElement);
      }
    }
  }
  else if(dropDown.options[dropDown.selectedIndex].value === 'bellville'){
    if(reg.allBellville(reg.objtempReg).length != 0){
      for(var i = 0; i < reg.allBellville(reg.objtempReg).length; i++){
        var newElement = document.createElement('li');
        newElement.innerHTML = reg.allBellville(reg.objtempReg)[i];
        list.appendChild(newElement);
      }
    }
  }
  else if(dropDown.options[dropDown.selectedIndex].value === 'paarl'){
    if(reg.allPaarl(reg.objtempReg).length != 0){
      for(var i = 0; i < reg.allPaarl(reg.objtempReg).length; i++){
        var newElement = document.createElement('li');
        newElement.innerHTML = reg.allPaarl(reg.objtempReg)[i];
        list.appendChild(newElement);
      }
    }
  }
  else if(dropDown.options[dropDown.selectedIndex].value === 'hermanus'){
    if(reg.allHer(reg.objtempReg).length != 0){
      for(var i = 0; i < reg.allHer(reg.objtempReg).length; i++){
        var newElement = document.createElement('li');
        newElement.innerHTML = reg.allHer(reg.objtempReg)[i];
        list.appendChild(newElement);
      }
    }
  }
  else{
    if(reg.size(reg.objtempReg) != 0){
      for(var i = 0; i < reg.size(reg.objtempReg); i++){
        var newElement = document.createElement('li');
        newElement.innerHTML = Object.keys(reg.objtempReg)[i];
        list.appendChild(newElement);
      }
    }
  }
}
