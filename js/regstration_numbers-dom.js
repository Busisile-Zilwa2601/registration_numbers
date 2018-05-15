var regNum = document.querySelector('.regNum');
var list = document.querySelector('.addHere');

var reg = RegistrationNumbers();
var objReg = {};
function addRegFunction(){
  var newElement = document.createElement('li');
  regNumValue = regNum.value;
  var dropDown = document.querySelector('.town select');
  reg.enter(regNumValue);
  if(reg.size(objReg)>1){
    objReg = Object.assign(objReg , reg.objtempReg);
  }
  else{
    objReg = reg.objtempReg;
  }
  if(dropDown.value === 'all'){
      var lastElem = reg.last(objReg);
      console.log(lastElem);
      newElement.textContent = lastElem;
      if(reg.checkCape(lastElem)){
        newElement.classList.add('.capeTown');
      }
      else if(reg.checkBell(lastElem)){
        newElement.classList.add('.bellville');
      }
      else if(reg.checkPaarl(lastElem)){
        newElement.classList.add('.paarl');
      }
      else if(reg.checkHer(lastElem)){
        newElement.classList.add('.hermunas');
      }
      list.appendChild(newElement);
    }

}
var addRegBtn = document.getElementById('addReg');
addRegBtn.addEventListener('click', addRegFunction);
