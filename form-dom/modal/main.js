import { ModalView } from './modalView.js'
import { ModalModel } from './modalModel.js'

function main()
{

	let model = new ModalModel();
	let view = new ModalView(model);

	document.body.appendChild(view);


}


window.addEventListener('load', main)