var Arreglolap;
function diselap() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	Arreglolap = new Array (
						new lap("Acer", "red", 10, 10, 90, 69, 4.5,6),
						new lap("HP", "silver", 200, 10, 85, 68, 4.6,8),
						new lap("Lenovo", "blue", 400, 10, 84, 67, 4.4,7)
						);
	for (var i = Arreglolap.length - 1; i >= 0; i--) {
		Arreglolap[i].Dibujar(context); }
}
function porlargo() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var n = Arreglolap.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(Arreglolap[j].largo > Arreglolap[j+1].largo){
				//Intercambio
				aux = Arreglolap[j];
				aux_x_j = Arreglolap[j].X;
				aux_y_j = Arreglolap[j].Y;
				aux_x_j_1 = Arreglolap[j+1].X;
				aux_y_j_1 = Arreglolap[j+1].Y;
				
				Arreglolap[j] = Arreglolap[j+1];
				Arreglolap[j+1] = aux;

				Arreglolap[j].X = aux_x_j;
				Arreglolap[j].Y = aux_y_j;

				Arreglolap[j+1].X = aux_x_j_1;
				Arreglolap[j+1].Y = aux_y_j_1;
			}
		}
	}
	for (var i = Arreglolap.length - 1; i >= 0; i--) {
		Arreglolap[i].Dibujar(context); }
}
function porgrosor() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var n = Arreglolap.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(Arreglolap[j].grosor > Arreglolap[j+1].grosor){
				//Intercambio
				aux = Arreglolap[j];
				aux_x_j = Arreglolap[j].X;
				aux_y_j = Arreglolap[j].Y;
				aux_x_j_1 = Arreglolap[j+1].X;
				aux_y_j_1 = Arreglolap[j+1].Y;
				
				Arreglolap[j] = Arreglolap[j+1];
				Arreglolap[j+1] = aux;

				Arreglolap[j].X = aux_x_j;
				Arreglolap[j].Y = aux_y_j;

				Arreglolap[j+1].X = aux_x_j_1;
				Arreglolap[j+1].Y = aux_y_j_1;
			}
		}
	}
	for (var i = Arreglolap.length - 1; i >= 0; i--) {
		Arreglolap[i].Dibujar(context); }
}
function porbanda() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var n = Arreglolap.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(Arreglolap[j].banda > Arreglolap[j+1].banda){
				//Intercambio
				aux = Arreglolap[j];
				aux_x_j = Arreglolap[j].X;
				aux_y_j = Arreglolap[j].Y;
				aux_x_j_1 = Arreglolap[j+1].X;
				aux_y_j_1 = Arreglolap[j+1].Y;
				
				Arreglolap[j] = Arreglolap[j+1];
				Arreglolap[j+1] = aux;

				Arreglolap[j].X = aux_x_j;
				Arreglolap[j].Y = aux_y_j;

				Arreglolap[j+1].X = aux_x_j_1;
				Arreglolap[j+1].Y = aux_y_j_1;
			}
		}
	}
	for (var i = Arreglolap.length - 1; i >= 0; i--) {
		Arreglolap[i].Dibujar(context); }
}