class CalculatorModel
{
    constructor()
    {
        
    }

    calculate( expression )
    {
            return fetch('./version-5/backend/calculate.php', { method: 'post', body: JSON.stringify(expression)}).then(response => response.json());   
        
    }
}

export { CalculatorModel};