function convertir() {
	var valor=$("#valor").val();
	var opcion1=$("#opcion1").val();
	var opcion2=$("#opcion2").val();
	if(opcion1==1){//convertir de gramo a
		if(opcion2==1){//gramo
			var resultado=valor;
		}
		if(opcion2==2){//libra
			var resultado=valor*0.00220462;
		}
		if(opcion2==3){//kilogramo
			var resultado=valor*0.001;
		}
	}
	if(opcion1==2){//convertir de libra a
		if(opcion2==1){//gramo
			var resultado=valor*453.592;
		}
		if(opcion2==2){//libra
			var resultado=valor;
		}
		if(opcion2==3){//kilogramo
			var resultado=valor*0.453592;
		}
	}
	if(opcion1==3){//convertir de kilogramo a
		if(opcion2==1){//gramo
			var resultado=valor*1000;
		}
		if(opcion2==2){//libra
			var resultado=valor*2.20462;
		}
		if(opcion2==3){//kilogramo
			var resultado=valor;
		}
	}
	mostrarResultado(resultado);
}

function mostrarResultado(resultado){
	$("#resultado").html(resultado);
		setTimeout("window.location = 'medida.html'",100000);
}