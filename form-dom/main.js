import { FormModel } from './formModel.js'
import { FormView } from './formView.js'
// import { FormController } from './formController.js' 

function main()
{
	let myFormModel = new FormModel();
	let myFormView = new FormView(myFormModel);

	document.body.appendChild(myFormView);


}

window.addEventListener('load', main);


