class CalculatorModel
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
            alert("SYNTAX ERROR!");
            return "";
        }
        
    }
}

export { CalculatorModel};