describe("The RegistrationNumbers", function(){
  it("It should return all the registration numbers", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.showAll(reg.objtempReg), 'CA 123 122' , 'CA 123 125', 'CY 231 122','CJ 322 937','CEM 937 554');

  });
  it("It should return Cape Town the registration numbers", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('CA 123 122','capetown'), 'CA 123 122');
    assert.deepEqual(reg.regTown('CA 123 125','capetown'), 'CA 123 125');
  });
  it("It should return Bellville the registration numbers", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('CY 231 122','bellville'), 'CY 231 122');
  });
  it("It should return Paarl the registration numbers", function(){
    var reg = RegistrationNumbers();
    reg.enter('CA 123 122');
    reg.enter('CA 123 125');
    reg.enter('CY 231 122');
    reg.enter('CJ 322 937');
    reg.enter('cem 937 554');
    assert.deepEqual(reg.regTown('CJ 322 937','paarl'), 'CJ 322 937');
  });
  it("It should return Hermunas the registration numbers", function(){
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
});
