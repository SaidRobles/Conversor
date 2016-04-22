function convertir() {
	var valor=$("#valor").val();
	var opcion1=$("#opcion1").val();
	var opcion2=$("#opcion2").val();
	if(opcion1==1){//convertir de pesos a
		if(opcion2==1){//pesos
			var resultado=valor;
		}
		if(opcion2==2){//dolares
			var resultado=valor*0.056246;
		}
		if(opcion2==3){//euros
			var resultado=valor*0.0493299421;
		}
	}
	if(opcion1==2){//convertir de dolares a
		if(opcion2==1){//pesos
			var resultado=valor*17.7790421;
		}
		if(opcion2==2){//dolares
			var resultado=valor;
		}
		if(opcion2==3){//euros
			var resultado=valor*0.877039116;
		}
	}
	if(opcion1==3){//convertir de euros a
		if(opcion2==1){//pesos
			var resultado=valor*20.2716638;
		}
		if(opcion2==2){//dolares
			var resultado=valor*1.1402;
		}
		if(opcion2==3){//euros
			var resultado=valor;
		}
	}
	mostrarResultado(resultado);
}

function mostrarResultado(resultado){
	$("#resultado").html(resultado);
		setTimeout("window.location = 'medida.html'",100000);
}