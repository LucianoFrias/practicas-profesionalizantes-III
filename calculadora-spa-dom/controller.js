/* Insertar filas en una tabla: for ( let i = 0; i < 4; i++) { let row = tabla.insertRow(); }
	Insertar celdas en una tabla: for ( let i = 0; i < 4; i++) { row.insertCell(); }
	Como acceder a una fila en particular: tabla.childNodes[0].childNodes[nDeFila]
	Como acceder a una celda en particular: tabla.childNodes[0].childNodes[nDeFila].childNodes[nDeColumna]

 */



/* 
* Funcion para pasar un elemento a una tabla en un numero de fila y columna especifica.
*/
 function posicionarElementoEnTabla ( tablaObj, nroFila, nroColumna, elemento )
 {
 	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
 }
