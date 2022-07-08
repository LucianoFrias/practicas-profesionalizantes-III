import { FormModel } from './formModel.js'
import { FormView } from './formView.js'
// import { FormController } from './formController.js' 

function main()
{
	let myFormModel = new FormModel();
	let myFormView = new FormView(myFormModel);

	let form = document.createElement('div');
	form.id = 'form';


	form.appendChild(myFormView);

	document.body.appendChild(form)



}

window.addEventListener('load', main);


