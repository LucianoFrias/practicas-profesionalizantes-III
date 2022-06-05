/* Insertar filas en una tabla: for ( let i = 0; i < 4; i++) { let row = tabla.insertRow(); }
	Insertar celdas en una tabla: for ( let i = 0; i < 4; i++) { row.insertCell(); }
	Como acceder a una fila en particular: tabla.childNodes[0].childNodes[nDeFila]
	Como acceder a una celda en particular: tabla.childNodes[0].childNodes[nDeFila].childNodes[nDeColumna]
 */

	// JAVASCRIPT DOM

	// Creacion de elementos

	let calculator = document.createElement("div");

	let table = document.createElement("table");

	let inputBox = document.createElement("input");

	let button0 = document.createElement("button");
	let button1 = document.createElement("button");
	let button2 = document.createElement("button");
	let button3 = document.createElement("button");
	let button4 = document.createElement("button");
	let button5 = document.createElement("button");
	let button6 = document.createElement("button");
	let button7 = document.createElement("button");
	let button8 = document.createElement("button");
	let button9 = document.createElement("button");
	let buttonDecimal = document.createElement("button");
	let buttonEqual = document.createElement("button");
	let buttonAdd = document.createElement("button");
	let buttonMinus = document.createElement("button");
	let buttonMultiply = document.createElement("button");
	let buttonDivide = document.createElement("button");
	let buttonDelete = document.createElement("button");


	let buttons = [button0, button1, button2, button3, button4,
		button5, button6, button7, button8, button9]

	let operationButtons = [buttonAdd, buttonMinus, buttonMultiply,
							buttonDivide, buttonDecimal]

	
	// Setupeando el DOM
	document.body.appendChild(calculator);
	calculator.appendChild(table);
	calculator.className = "calculator";


	// Creando filas y columnas
	// Para inputBox

	let inputRow = table.insertRow();
	let inputCell = inputRow.insertCell();
	inputCell.colSpan = 4;

	// Para botones
	for (let i = 0; i < 4; i++)
	{
		let row = table.insertRow();

		for (let i = 0; i < 4; i++)
		{
			row.insertCell();
		}
	}

	// Para Delete Button

	let deleteRow = table.insertRow();
	let deleteCell = deleteRow.insertCell();
	deleteCell.colSpan = 4;



	// Designando atributos de los elementos

	// inputBox

	inputBox.id = "inputBox";
	inputBox.className = "inputBox";
	inputBox.value = "";
	inputBox.placeholder = "0";
	inputBox.disabled = "disabled";
	inputBox.type = "text";

	

	// Botones

	// Botones numericos
	for (let i = 0; i < 10; i++)
	{
		buttons[i].id = `btn${i}`;
		buttons[i].className='numericButtons buttons';
		buttons[i].textContent = i;
		buttons[i].value = i;
	}

	buttonDecimal.className = 'numericButtons buttons';
	buttonDecimal.id = 'btnDecimal';
	buttonDecimal.textContent = '.';
	buttonDecimal.value = ".";




	// Botones operacionales
	for (let i = 0; i < 4; i++)
	{
		operationButtons[i].className = "operationButtons buttons";
	}

	buttonAdd.id = "btnPlus";
	buttonAdd.textContent = "+";

	buttonMinus.id = "btnMinus";
	buttonMinus.textContent = "-";

	buttonMultiply.id = "btnMult";
	buttonMultiply.textContent = "*";

	buttonDivide.id = "btnDiv";
	buttonDivide.textContent = "/";

	buttonEqual.id = "btnEqual";
	buttonEqual.textContent = "=";
	buttonEqual.className = "equalButton buttons"

	buttonDelete.id = "btnDel";
	buttonDelete.className = "deletionButton";
	buttonDelete.textContent = "Delete"

	// Posicionando elementos en filas y columnas
	posicionarElementoEnTabla( table, 0, 0, inputBox );
	
	posicionarElementoEnTabla( table, 1, 0, button7 );
	posicionarElementoEnTabla( table, 1, 1, button8 );
	posicionarElementoEnTabla( table, 1, 2, button9 );
	posicionarElementoEnTabla( table, 1, 3, buttonAdd );

	posicionarElementoEnTabla( table, 2, 0, button4 );
	posicionarElementoEnTabla( table, 2, 1, button5 );
	posicionarElementoEnTabla( table, 2, 2, button6 );
	posicionarElementoEnTabla( table, 2, 3, buttonMinus );

	posicionarElementoEnTabla( table, 3, 0, button1 );
	posicionarElementoEnTabla( table, 3, 1, button2 );
	posicionarElementoEnTabla( table, 3, 2, button3 );
	posicionarElementoEnTabla( table, 3, 3, buttonMultiply );

	posicionarElementoEnTabla( table, 4, 0, button0 );
	posicionarElementoEnTabla( table, 4, 1, buttonDecimal );
	posicionarElementoEnTabla( table, 4, 2, buttonEqual );
	posicionarElementoEnTabla( table, 4, 3, buttonDivide );

	posicionarElementoEnTabla( table, 5, 0, buttonDelete);


// Funciones auxiliares
 function posicionarElementoEnTabla ( tablaObj, nroFila, nroColumna, elemento )
 {
 	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
 }



 // FUNCIONALIDAD / EVENT LISTENERS

buttonDecimal.addEventListener('click', function(){addValue(buttonDecimal.textContent)});
 buttonAdd.addEventListener('click', function(){addValue(buttonAdd.textContent)});
 buttonMinus.addEventListener('click', function(){addValue(buttonMinus.textContent)});
 buttonMultiply.addEventListener('click', function(){addValue(buttonMultiply.textContent)});
 buttonDivide.addEventListener('click', function(){addValue(buttonDivide.textContent)});
 buttonEqual.addEventListener('click', operationResult);
 
 button0.addEventListener('click', function(){addValue(button0.value)});
 button1.addEventListener('click', function(){addValue(button1.value)});
 button2.addEventListener('click', function(){addValue(button2.value)});
 button3.addEventListener('click', function(){addValue(button3.value)});
 button4.addEventListener('click', function(){addValue(button4.value)});
 button5.addEventListener('click', function(){addValue(button5.value)});
 button6.addEventListener('click', function(){addValue(button6.value)});
 button7.addEventListener('click', function(){addValue(button7.value)});
 button8.addEventListener('click', function(){addValue(button8.value)});
 button9.addEventListener('click', function(){addValue(button9.value)});
 
 
 buttonDelete.addEventListener('click', deleteInput);





 // LOGICA

 function addValue(buttonValue)
 {
	 inputBox.value += buttonValue;
 }

 function operationResult()
 {
	try
	{
		inputBox.value = eval(inputBox.value);

		if (inputBox.textContent == "undefined")
		{
			inputBox.textContent == "";
		}
	}
	catch
	{
		alert("ERROR!");
	}
 }

 function deleteInput()
 {
	inputBox.value = "";
 }
