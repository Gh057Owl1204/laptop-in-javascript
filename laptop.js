class lap {
	constructor(no,co,x,y,an,la,gro,ba){
		this.nombre = no;
		this.color = co;
		this.X = x;
		this.Y = y;
		this.ancho = an;
		this.largo = la;
		this.grosor = gro;
		this.banda = ba;
	}
	
	
	
	
	Dibujar(context){
		//parte de arriba
		context.beginPath();
		context.fillStyle = this.color;
		context.rect(this.X, this.Y, this.ancho, this.largo);
		context.fill();
		context.stroke();
		//pantalla
		context.beginPath();
		context.fillStyle = "grey";
		context.rect(this.X+this.banda, this.Y+this.banda, this.ancho-2*(this.banda), this.largo-2*(this.banda));
		context.fill();
		context.stroke();
		//parte de ancho
		context.beginPath();
		context.fillStyle = "grey";
		context.moveTo(this.X, this.Y+this.largo+this.grosor/2);
		context.lineTo(this.X+(this.ancho*Math.cos(20)), this.largo+this.Y+ (this.largo*Math.cos(20))+this.grosor);
		context.lineTo(this.X+(this.ancho*Math.cos(20))+this.ancho, this.largo+this.Y+ (this.largo*Math.cos(20))+this.grosor);
		context.lineTo(this.X+this.ancho+this.grosor, this.Y+this.largo+this.grosor);
		context.closePath();
		context.fill();		
		
		//parte de abajo
		context.beginPath();
		context.fillStyle = this.color;
		context.moveTo(this.X, this.Y+this.largo);
		context.lineTo(this.X+(this.ancho*Math.cos(20)), this.largo+this.Y+ (this.largo*Math.cos(20)));
		context.lineTo(this.X+(this.ancho*Math.cos(20))+this.ancho, this.largo+this.Y+ (this.largo*Math.cos(20)));
		context.lineTo(this.X+this.ancho, this.Y+this.largo);
		context.closePath();
		context.fill();
		//teclado
		context.beginPath();
		context.fillStyle = "black";
		context.moveTo(this.X+(this.ancho*Math.cos(30)), this.Y+this.largo+this.grosor);
		context.lineTo(this.X+(this.ancho*Math.cos(20))+this.grosor, this.largo+this.Y+ (this.largo*Math.cos(20))-this.grosor);
		context.lineTo(this.X+(this.ancho*Math.cos(20))+0.8*this.ancho, this.largo+this.Y+ (this.largo*Math.cos(20))-this.grosor);
		context.lineTo(this.X+this.ancho-this.grosor, this.Y+this.largo+this.grosor);
		context.closePath();
		context.fill();
		
		context.stroke();
	}
}