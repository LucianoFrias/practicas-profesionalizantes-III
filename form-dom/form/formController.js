class FormController

{
	constructor (view, model)
	{
      this.innerView = view;
      this.innerModel = model;
	}

	onsubmit()
	{
		this.innerModel.submit(this.innerView.getFormValues()).then( response => {
			console.log(response);
			alert('Datos pasados!');
		});
	}
}

export { FormController };