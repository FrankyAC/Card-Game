
function Juego(){
	this.cartas=[];
	this.usuarios=[];
	this.agregarCarta=function(carta){
	this.cartas.push(carta);
	}
	this.agregarUsuario=function(usuario){
		usuario.mazo=this.cartas;
		usuario.juego=this;
		this.usuarios.push(usuario);
	}
	this.crearColeccion=function(){
		//10 ataque 5 coste 3 vida 5
		for (var i=0;i<10;i++){
			this.cartas.push(new Carta("Dragon"+i, 5, 5,3));
		}
		//10 ataque 3 coste 2 vida 3
		for (var i=0;i<10;i++){
			this.cartas.push(new Carta("Guerrero"+i, 3, 3,2));
		}
		//10 ataque 2 coste 1 vida 2
		for (var i=0;i<10;i++){
			this.cartas.push(new Carta("Esbirro"+i, 2, 2,1));
		}
	}
	this.crearColeccion();
}

function Usuario(nombre){
	this.nombre=nombre;
	this.juego=undefined;
	this.mazo=[];
	this.obtenerMazo=function(){
		//this.mazo=this.juego.obtenerColeccionInicial();
	}
}

function Carta(vidas,ataque,nombre,coste){
	this.vidas=vidas;
	this.ataque=ataque;
	this.nombre=nombre;
	this.coste=coste;
}

/* Ejemplo
function cuestionarioTest(){
	var cues=new Cuestionario("Capitales");
	var preg=new Pregunta("Capital de Francia")
	preg.agregarRespuesta(new Respuesta("Madrid",false));
	preg.agregarRespuesta(new Respuesta("Lisboa",false));
	preg.agregarRespuesta(new Respuesta("Paris",true));
	preg.agregarRespuesta(new Respuesta("Toledo",false));
	cues.agregarPregunta(preg);

	var preg=new Pregunta("Capital de Italia");
	preg.agregarRespuesta(new Respuesta("Roma",true));
	preg.agregarRespuesta(new Respuesta("Lisboa",false));
	preg.agregarRespuesta(new Respuesta("Londres",false));
	preg.agregarRespuesta(new Respuesta("Praga",false));
	cues.agregarPregunta(preg);
	
	return cues;
}

*/


//module.exports.Juego=Juego;