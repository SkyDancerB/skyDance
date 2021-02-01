
// //COFLA!!!!!

// class celulares{
// 	constructor(color,peso,resolucion,respantalla,ram){
// 		this.color=color;
// 		this.peso=peso;
// 		this.rdc= resolucion;
// 		this.rdp= respantalla;
// 		this.ram=ram;
// 		this.encendido=false;

// 	}
// 	prenderApagar(){
// 		if(this.encendido == false){
// 			alert("celular prendiendo");
// 			this.encendido = true;
// 		} else{
// 			alert("el celular se está apagando");
// 			this.encendido = false;
// 		}

// 	}
// 	reiniciar(){
// 		if (this.encendido == true) {
// 			alert("reiniciando el equipo");
// 		}else{
// 			alert("no podes reiniciar un celular apagado, rancio!!");
// 		}
// 	}
// 	tomarFoto(){
// 		alert(`Foto tomada con una resolucion de ${resolucion}`);
// 	}
// 	grabarVideo(){
// 		alert(`grabando video en ${resolucion}`);
// 	}
// }

// celular1 = new  celulares("blanco",198,6,"full hd","2GB");

// celular1.prenderApagar()
// celular1.tomarFoto()
// celular1.grabarVideo();
// celular1.reiniciar();

//MÉTODOS DE CADENA !!!!!

let nombres = ["pedro","maria","jorge"];
//let cadena2 = "";

//resultado = cadena.padStart(6,"1"); //Funcion concatenar concat/startsWith endsWith
//includes indexOf lastIndexOf padStart(6,"a") padEnd repeat(veces)
//let resultado = cadena.trim(); //.split substring toLowerCase tuUpperCase toString
// trim trimEnd trimStart(los trim cortan)
//document.write(resultado.length);

//Métodos de strings
document.write("cadena original"+ nombres +"<br>");
let resultado = nombres.pop();//pop para sacr el ultimo elemento shift elimina
//el primero
document.write("elemento eliminado: " + resultado + "<br>");
document.write("resultado: "+ nombres);

//<script src="codigo.js"></script>
