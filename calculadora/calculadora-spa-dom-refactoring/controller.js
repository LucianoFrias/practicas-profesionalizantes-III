class Calculator
{
	constructor()
	{
		
	}

	calculate( expression )
	{
		return eval(expression);
	}

}

class CalculatorView extends HTMLElement
{
	super();

	constructor()
	{
		this.boton1 = createElement("button");
		this.boton1.className = "buttons blueButtons";
		this.boton1.innerText = "1";


		// ... Resto de los botones	(layout, display, botones, columnas y filas).
	}


	// Se ejecuta cada vez que añadimos esta clase adentro de un elemento en HTML.
	connectedCallback()
	{
		console.log("Acabo de ser añadido al DOM!");

		posicionarElementoEnTabla(this.layout, 2, 0, this.button1);
		posicionarElementoEnTabla(this.layout, 2, 1, this.button2);
		posicionarElementoEnTabla(this.layout, 2, 2, this.button3);
		posicionarElementoEnTabla(this.layout, 3, 2, this.buttonEqual);


		this.appendChild(this.display);
		this.appendChild(this.layout)
	}


}