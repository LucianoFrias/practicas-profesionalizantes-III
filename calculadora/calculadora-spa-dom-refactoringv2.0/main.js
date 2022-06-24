import {CalculatorModel} from './calculatorModel.js'
import {CalculatorView} from './calculatorView.js'

function main()
{
	let model = new CalculatorModel();
	let view = new CalculatorView(model);

	document.body.appendChild(view);

}

window.addEventListener('load', main);


