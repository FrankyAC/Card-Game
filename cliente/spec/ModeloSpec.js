describe("El juego de las cartas...", function() {
  var juego;
  var usr;
  var us2;
  beforeEach(function() {
    juego=new Juego();
    usr=new Usuario("pepe");
    usr2=new Usuario("jose");
  });

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
