function convertir() {
	var valor=$("#valor").val();
	var opcion1=$("#opcion1").val();
	var opcion2=$("#opcion2").val();
	if(opcion1==1){//convertir de metro a
		if(opcion2==1){//metro
			var resultado=valor;
		}
		if(opcion2==2){//milla
			var resultado=valor*0.000621371;
		}
		if(opcion2==3){//kilometro
			var resultado=valor*0.001;
		}
	}
	if(opcion1==2){//convertir de milla a
		if(opcion2==1){//metro
			var resultado=valor*1609.34;
		}
		if(opcion2==2){//milla
			var resultado=valor;
		}
		if(opcion2==3){//kilometro
			var resultado=valor*1.60934;
		}
	}
	if(opcion1==3){//convertir de kilometro a
		if(opcion2==1){//metro
			var resultado=valor*1000;
		}
		if(opcion2==2){//milla
			var resultado=valor*0.621371;
		}
		if(opcion2==3){//kilometro
			var resultado=valor;
		}
	}
	mostrarResultado(resultado);
}

function mostrarResultado(resultado){
	$("#resultado").html(resultado);
		setTimeout("window.location = 'medida.html'",100000);
}