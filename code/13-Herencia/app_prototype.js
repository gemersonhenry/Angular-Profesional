/**
* HERENCIA PROTOTÍPICA
*/
var padre = {
	valor: "valorPadre",
	obj: {
		objValor: "objValorPadre"
	},
	hablar: function () {
		console.log("Hablando!");
	}
};

var hijo = Object.create(padre);

console.log("HIJO - hijo.valor", hijo.valor);
console.log("HIJO - hijo.obj.objValor", hijo.obj.objValor);
console.log("PADRE - padre.valor", padre.valor);
console.log("PADRE - padre.obj.objValor", padre.obj.objValor);
console.log("padre: ", padre);
console.log("hijo: ", hijo);

hijo.valor = "valorHijo";
hijo.obj.objValor = "objValorHijo";
console.log("############# CAMBIO DE VALORES ###############");
console.log("HIJO - hijo.valor", hijo.valor);
console.log("HIJO - hijo.obj.objValor", hijo.obj.objValor);
console.log("PADRE - padre.valor", padre.valor);
console.log("PADRE - padre.obj.objValor", padre.obj.objValor);
console.log("padre: ", padre);
console.log("hijo: ", hijo);
/**
* Javascript permite la creación automatica de propiedades dentro de un objeto
*/

console.log("Igualando objetos: ", padre.obj === hijo.obj);

var granHijo = Object.create(hijo);
console.log("GranHijo: ", granHijo);
granHijo.hablar();


// funcion constructora
function Perro(nombre) {
	this.nombre = nombre;
	console.log("This is 'this': ", this);
}

var miPerro = new Perro("Boby");
console.log("mi perro: ", miPerro);

// otro
var otroPerro = Perro("Max");



