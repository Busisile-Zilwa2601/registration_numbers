describe("The RegistrationNumbers", function(){
  it("It should return all the registration numbers", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    //reg.objtempReg
    assert.deepEqual(reg.regTown('','all'), 'CA 123 122' , 'CA 123 125', 'CY 231 122','CJ 322 937','CEM 937 554');
    assert.deepEqual(reg.enter('CA 123 125'), false);
  });
  it("It should return a registration number from Cape Town", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('CA 123 122','capetown'), 'CA 123 122');
    assert.deepEqual(reg.regTown('CA 123 125','capetown'), 'CA 123 125');
  });
  it("It should return a registration number from Bellville", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('CY 231 122','bellville'), 'CY 231 122');
  });
  it("It should return a registration number from Paarl", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('CJ 322 937','paarl'), 'CJ 322 937');
  });
  it("It should return a registration number from Hermunas", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('cem 937 554','hermunas'), 'CEM 937 554');
  });
  it("It should return the last registration numbers", function(){
    var reg = RegistrationNumbers();
    var myObj = {};
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    myObj = reg.objtempReg;
    assert.deepEqual(reg.last(myObj), 'CEM 937 554');
    assert.equal(reg.checkCape('CJ 322 937'), false);
  });
  it("It should return Cape Town  registration numbers in an Array", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.allCape(reg.objtempReg), ['CA 123 122', 'CA 123 125']);
  });
  it("It should return Bellville registration numbers in an Array", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    reg.enter('CY 31 122');
    reg.enter('CY 231 12');
    reg.enter('CY 231 22');
    reg.enter('CY 122');
    reg.enter('CY 231');
    assert.deepEqual(reg.allBellville(reg.objtempReg), ['CY 231 122', 'CY 31 122', 'CY 231 12', 'CY 231 22','CY 122','CY 231']);
  });
  it("It should return Paarl registration numbers in an Array", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    reg.enter('CY 31 122');
    reg.enter('CJ 231 12');
    reg.enter('CJ 231 22');
    reg.enter('CJ 122');
    reg.enter('CJ 231');
    assert.deepEqual(reg.allPaarl(reg.objtempReg), ['CJ 322 937', 'CJ 231 12', 'CJ 231 22','CJ 122','CJ 231']);
  });
  it("It should return Hermunas registration numbers in an Array", function(){
    var reg = RegistrationNumbers();
    reg.enter('CEM 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    reg.enter('CY 31 122');
    reg.enter('CJ 231 12');
    reg.enter('CJ 231 22');
    reg.enter('CJ 122');
    reg.enter('CJ 231');
    assert.deepEqual(reg.allHer(reg.objtempReg), ['CEM 123 122', 'CEM 937 554']);
  });
});
