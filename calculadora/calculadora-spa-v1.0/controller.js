/* Usar CTRL + SHIFT + R para reiniciar la pagina */
let boton0 = document.getElementById("btn0");
let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");
let boton3 = document.getElementById("btn3");
let boton4 = document.getElementById("btn4");
let boton5 = document.getElementById("btn5");
let boton6 = document.getElementById("btn6");
let boton7 = document.getElementById("btn7");
let boton8 = document.getElementById("btn8");
let boton9 = document.getElementById("btn9");
let decimal = document.getElementById("btnDecimal");
let add = document.getElementById("btnPlus");
let substract = document.getElementById("btnMinus");
let multiply = document.getElementById("btnMult");
let divide = document.getElementById("btnDiv");

let deleteBtn = document.getElementById("btnDel");
let resultBtn = document.getElementById("btnEqual");


function operationResult()
{
	

	try
	{
		let display = document.getElementById("inputBox");
		
		display.value = eval(display.value);
		
		if (display.value == "undefined")
		{
			display.value = "";
		}
	}
	catch
	{
		alert("ERROR");
	}

	
}

function deleteInput()
{
	let display = document.getElementById("inputBox");
	display.value = "";
}

function clickDecimal()
{
	let display = document.getElementById("inputBox");
	display.value += ".";
}

function clickAdd()
{
	let display = document.getElementById("inputBox");
	display.value += "+";
}

function clickSubstract()
{
	let display = document.getElementById("inputBox");
	display.value += "-";
}

function clickMultiply()
{
	let display = document.getElementById("inputBox");
	display.value += "*";
}

function clickDivide()
{
	let display = document.getElementById("inputBox");
	display.value += "/";
}

function clickBtn0()
{
	let display = document.getElementById("inputBox");
	display.value += "0";
}

function clickBtn1()
{
	let display = document.getElementById("inputBox");
	display.value += "1";

}

function clickBtn2()
{
	let display = document.getElementById("inputBox");
	display.value += "2";
	
}

function clickBtn3()
{
	let display = document.getElementById("inputBox");
	display.value += "3";
	
}

function clickBtn4()
{
	let display = document.getElementById("inputBox");
	display.value += "4";
	
}

function clickBtn5()
{
	let display = document.getElementById("inputBox");
	display.value += "5";
	
}

function clickBtn6()
{
	let display = document.getElementById("inputBox");
	display.value += "6";
	
}

function clickBtn7()
{
	let display = document.getElementById("inputBox");
	display.value += "7";
	
}

function clickBtn8()
{
	let display = document.getElementById("inputBox");
	display.value += "8";
	
}


function clickBtn9()
{
	let display = document.getElementById("inputBox");
	display.value += "9";
	
}


decimal.addEventListener('click', clickDecimal);
add.addEventListener('click', clickAdd);
substract.addEventListener('click', clickSubstract);
multiply.addEventListener('click', clickMultiply);
divide.addEventListener('click', clickDivide);
resultBtn.addEventListener('click', operationResult);

boton0.addEventListener('click', clickBtn0);
boton1.addEventListener('click', clickBtn1);
boton2.addEventListener('click', clickBtn2);
boton3.addEventListener('click', clickBtn3);
boton4.addEventListener('click', clickBtn4);
boton5.addEventListener('click', clickBtn5);
boton6.addEventListener('click', clickBtn6);
boton7.addEventListener('click', clickBtn7);
boton8.addEventListener('click', clickBtn8);
boton9.addEventListener('click', clickBtn9);


deleteBtn.addEventListener('click', deleteInput);
