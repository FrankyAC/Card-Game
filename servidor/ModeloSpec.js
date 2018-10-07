var modelo = require('./modelo.js');
describe("El juego de las cartas...", function() {
  var juego;
  var usr;
  var usr2;
  //var tablero;

  beforeEach(function() {
    juego=new modelo.Juego();
    usr=new modelo.Usuario("pepe");
    usr2=new modelo.Usuario("jose");
    //tablero=new modelo.Tablero();
  });
/*
it("Compruebo que existe tablero" , function() {
    expect(tablero.zonas).toBeDefined();
    expect(tablero.zonas.length).toEqual(0);
  });
*/
  it("Compruebo condiciones iniciales (cartas, usuario)", function() {
    expect(juego.cartas).toBeDefined();
    expect(juego.cartas.length).toEqual(30);
    expect(juego.usuarios).toBeDefined();
    expect(juego.usuarios.length).toEqual(0);
  });

  it("El usuario tiene un mazo", function(){
    expect(usr.mazo).toBeDefined();
    expect(usr.mazo.length).toEqual(0);
    expect(usr2.mazo).toBeDefined();
    expect(usr2.mazo.length).toEqual(0);
    });

    it("El usuario tiene mano", function(){
    expect(usr.mano).toBeDefined();
    expect(usr.mano.length).toEqual(0);
    expect(usr2.mano).toBeDefined();
    expect(usr2.mano.length).toEqual(0);
    });

   it("agrego el usuario al juego", function(){
    juego.agregarUsuario(usr);
    juego.agregarUsuario(usr2);
    expect(juego.usuarios.length).toEqual(2);
    expect(juego.usuarios[0].nombre).toEqual("pepe");
    expect(juego.usuarios[1].nombre).toEqual("jose");
    expect(usr.mazo.length).toEqual(30);
    expect(usr2.mazo.length).toEqual(30);
    });
});