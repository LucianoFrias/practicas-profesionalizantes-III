
/* Muy buen trabajo, luego habría que separar
en archivos js para tener cada cosa independizada,
pero va excelente. Hay un pequeño error a revisar
en la función asociada al "deleteOne", en algunos
casos falla tirando el error:
Uncaught TypeError: this.operator.slice is not a function
Lo demás excelente.
*/

function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
    /*Acceso a una posición específica de la tabla (fila,columna)
    tabla.childNodes[0].childNodes[nroFila]
    tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

    //Añade el elemento recibido
    tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}


class Calculator
{
    constructor()
    {
        
    }

    calculate( expression )
    {
        try
        {
            return eval(expression);    
        }
        catch
        {
            alert("ERROR!");
            return "";
        }
        
    }
}

class CalculatorView extends HTMLElement
{
    constructor()
    {
        super();

        this.controller = new CalculatorController();


        this.calculatorBody = document.createElement("div");
        this.calculatorBody.classList.add("calculator");

        this.display = document.createElement("input");
        this.display.type = "text";
        this.display.className = "display"
        this.display.placeholder = "0";

        this.button1 = document.createElement("button");
        this.button1.innerText = "1";
        this.button1.classList.add("numberButton", "blueButton");

        this.button2 = document.createElement("button");
        this.button2.innerText = "2";
        this.button2.classList.add("numberButton", "blueButton");

        this.button3 = document.createElement("button");
        this.button3.innerText = "3";
        this.button3.classList.add("numberButton", "blueButton");

		this.buttonAdd = document.createElement("button");
        this.buttonAdd.innerText = "+";
        this.buttonAdd.classList.add("numberButton", "greenButton");        	

        this.button4 = document.createElement("button");
        this.button4.innerText = "4";
        this.button4.classList.add("numberButton", "blueButton");

        this.button5 = document.createElement("button");
        this.button5.innerText = "5";
        this.button5.classList.add("numberButton", "blueButton");

        this.button6 = document.createElement("button");
        this.button6.innerText = "6";
        this.button6.classList.add("numberButton", "blueButton");

        this.buttonMinus = document.createElement("button");
        this.buttonMinus.innerText = "-";
        this.buttonMinus.classList.add("numberButton", "greenButton");


        this.button7 = document.createElement("button");
        this.button7.innerText = "7";
        this.button7.classList.add("numberButton", "blueButton");

        this.button8 = document.createElement("button");
        this.button8.innerText = "8";
        this.button8.classList.add("numberButton", "blueButton");

        this.button9 = document.createElement("button");
        this.button9.innerText = "9";
        this.button9.classList.add("numberButton", "blueButton");

        this.buttonMultiply = document.createElement("button");
        this.buttonMultiply.innerText = "*";
        this.buttonMultiply.classList.add("numberButton", "greenButton");





        this.button0 = document.createElement("button");
        this.button0.innerText = "0";
        this.button0.classList.add("numberButton", "blueButton");

        this.buttonDecimal = document.createElement("button");
        this.buttonDecimal.innerText = ".";
        this.buttonDecimal.classList.add("numberButton", "blueButton");

        this.buttonEqual = document.createElement("button");
        this.buttonEqual.innerText = "=";
        this.buttonEqual.classList.add("numberButton", "yellowButton");

        this.buttonDivide = document.createElement("button");
        this.buttonDivide.innerText = "/";
        this.buttonDivide.classList.add("numberButton", "greenButton");



        this.buttonDelete = document.createElement("button");
        this.buttonDelete.innerText = "DELETE ALL";
        this.buttonDelete.classList.add("deleteButton", "redButton");

        this.buttonDeleteOne = document.createElement("button");
        this.buttonDeleteOne.innerText = "DELETE ONE";
        this.buttonDeleteOne.classList.add("deleteButton", "redButton");


        this.layout = document.createElement("table");
        this.layout.className = "layout"
        for ( let i = 0; i<4; i++)
        {
            let filaActual = this.layout.insertRow();

            for( let c = 0; c<4; c++ )
            {
                filaActual.insertCell();
            }
        }

        let lastCell = this.layout.insertRow().insertCell();
        lastCell.setAttribute("colspan", 4);

        // TEMPORAL EVENT LISTENERS

        this.buttonDecimal.addEventListener('click', () => {
            this.controller.onclickbuttonDecimal()
            this.display.value = this.controller.operator;
        });

        this.button0.addEventListener('click', () => {
            this.controller.onclickbutton0()
            this.display.value = this.controller.operator;
        });

        this.button1.addEventListener('click', () => {
            this.controller.onclickbutton1()
            this.display.value = this.controller.operator;
        });

        this.button2.addEventListener('click', () => {
            this.controller.onclickbutton2()
            this.display.value = this.controller.operator;
        });


        this.button3.addEventListener('click', () => {
            this.controller.onclickbutton3()
            this.display.value = this.controller.operator;
        });

        this.button4.addEventListener('click', () => {
            this.controller.onclickbutton4()
            this.display.value = this.controller.operator;
        });

        this.button5.addEventListener('click', () => {
            this.controller.onclickbutton5()
            this.display.value = this.controller.operator;
        });

        this.button6.addEventListener('click', () => {
            this.controller.onclickbutton6()
            this.display.value = this.controller.operator;
        });

        this.button7.addEventListener('click', () => {
            this.controller.onclickbutton7()
            this.display.value = this.controller.operator;
        });

        this.button8.addEventListener('click', () => {
            this.controller.onclickbutton8()
            this.display.value = this.controller.operator;
        });

        this.button9.addEventListener('click', () => {
            this.controller.onclickbutton9()
            this.display.value = this.controller.operator;
        });

        this.buttonDelete.addEventListener('click', () => {
            this.controller.onclickbuttonDelete()
            this.display.value = this.controller.operator;
        });

        this.buttonDeleteOne.addEventListener('click', () => {
            this.controller.onclickbuttonDeleteOne()
            this.display.value = this.controller.operator;
        });

        this.buttonAdd.addEventListener('click', () => {
            this.controller.onclickbuttonAdd()
            this.display.value = this.controller.operator;
        });

        this.buttonMinus.addEventListener('click', () => {
            this.controller.onclickbuttonMinus()
            this.display.value = this.controller.operator;
        });

        this.buttonMultiply.addEventListener('click', () => {
            this.controller.onclickbuttonMultiply()
            this.display.value = this.controller.operator;
        });

        this.buttonDivide.addEventListener('click', () => {
            this.controller.onclickbuttonDivide()
            this.display.value = this.controller.operator;
        });

        this.buttonEqual.addEventListener('click', () => {
            this.controller.onclickbuttonEqual()
            console.log(this.controller.operator)
            this.display.value = this.controller.operator + "";
        });


    }

    connectedCallback()
    {
        posicionarElementoEnTabla(this.layout,2,0,this.button3);
        posicionarElementoEnTabla(this.layout,2,1,this.button2);
        posicionarElementoEnTabla(this.layout,2,2,this.button1);
        posicionarElementoEnTabla(this.layout,2,3,this.buttonMultiply);

        posicionarElementoEnTabla(this.layout,1,0,this.button4);
        posicionarElementoEnTabla(this.layout,1,1,this.button5);
        posicionarElementoEnTabla(this.layout,1,2,this.button6);
        posicionarElementoEnTabla(this.layout,1,3,this.buttonMinus);
        
        posicionarElementoEnTabla(this.layout,0,0,this.button7);
        posicionarElementoEnTabla(this.layout,0,1,this.button8);
        posicionarElementoEnTabla(this.layout,0,2,this.button9);
        posicionarElementoEnTabla(this.layout,0,3,this.buttonAdd);
        
        posicionarElementoEnTabla(this.layout,3,0,this.button0);
        posicionarElementoEnTabla(this.layout,3,1,this.buttonDecimal);
        posicionarElementoEnTabla(this.layout,3,2,this.buttonEqual);
        posicionarElementoEnTabla(this.layout,3,3,this.buttonDivide);


        this.appendChild(this.display);
        this.appendChild(this.layout);
        this.appendChild(this.buttonDeleteOne);
        this.appendChild(this.buttonDelete);


        this.id = "x-calc"; 

    }
}

class CalculatorController
{
    constructor()
    {
        this.operator = "";

        this.calculator = new Calculator();
    }

    onclickbuttonDecimal()
    {
        this.operator += ".";
    }

    onclickbutton0()
    {
        this.operator += "0";
    }

    onclickbutton1()
    {
        this.operator += "1";
    }

    onclickbutton2()
    {
        this.operator += "2";
    }

    onclickbutton3()
    {
        this.operator += "3";
    }

    onclickbutton4()
    {
        this.operator += "4";
    }

    onclickbutton5()
    {
        this.operator += "5";
    }

    onclickbutton6()
    {
        this.operator += "6";
    }

    onclickbutton7()
    {
        this.operator += "7";
    }

    onclickbutton8()
    {
        this.operator += "8";
    }

    onclickbutton9()
    {
        this.operator += "9";
    }

    onclickbuttonDelete()
    {
        this.operator = "";
    }

    onclickbuttonDeleteOne()
    {
        this.operator = this.operator.slice(0, -1)
    }

    onclickbuttonAdd()
    {
        this.operator += "+";
    }

    onclickbuttonMinus()
    {
        this.operator += "-";
    }

    onclickbuttonMultiply()
    {
        this.operator += "*";
    }

    onclickbuttonDivide()
    {
        this.operator += "/";
    }

    onclickbuttonEqual()
    {
        
        if (this.operator === "undefined" || this.operator === "")
        {
            this.operator == "";
        }
        else
        {
            this.operator = this.calculator.calculate(this.operator);
        }    
    }
}


customElements.define('x-calculator', CalculatorView );

let calc = new CalculatorView();
document.body.appendChild(calc);

    