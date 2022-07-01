class CalculatorController
{
    constructor(view,model)
    {
        this.operator = "";

        this.calculatorView = view;

        this.calculator = model;

        
    }

    onclickbuttonDecimal()
    {
        this.calculatorView.display.value += ".";
    }

    onclickbutton0()
    {
        this.calculatorView.display.value += "0";
    }

    onclickbutton1()
    {
        this.calculatorView.display.value += "1";
    }

    onclickbutton2()
    {
        this.calculatorView.display.value += "2";
    }

    onclickbutton3()
    {
        this.calculatorView.display.value += "3";
    }

    onclickbutton4()
    {
        this.calculatorView.display.value += "4";
    }

    onclickbutton5()
    {
        this.calculatorView.display.value += "5";
    }

    onclickbutton6()
    {
        this.calculatorView.display.value += "6";
    }

    onclickbutton7()
    {
        this.calculatorView.display.value += "7";
    }

    onclickbutton8()
    {
        this.calculatorView.display.value += "8";
    }

    onclickbutton9()
    {
        this.calculatorView.display.value += "9";
    }

    onclickbuttonDelete()
    {
        this.calculatorView.display.value = "";
    }

    onclickbuttonDeleteOne()
    {
        this.calculatorView.display.value = this.calculatorView.display.value.toString().slice(0, -1)
    }

    onclickbuttonAdd()
    {
       this.calculatorView.display.value += "+";
    }

    onclickbuttonMinus()
    {
        this.calculatorView.display.value += "-";
    }

    onclickbuttonMultiply()
    {
        this.calculatorView.display.value += "*";
    }

    onclickbuttonDivide()
    {
        this.calculatorView.display.value += "/";
    }

    onclickbuttonEqual()
    {
        
        if (this.calculatorView.display.value === "undefined" || this.calculatorView.display.value === "")
        {
            this.calculatorView.display.value = "";
        }
        else
        {
            this.calculator.calculate(this.calculatorView.display.value).then(response => this.calculatorView.display.value = response);
        }    
    }
}

export { CalculatorController };