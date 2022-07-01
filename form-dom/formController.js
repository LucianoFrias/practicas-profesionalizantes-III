class FormController

{
	constructor (view, model)
	{
      this.innerView = view;
      this.innerModel = model;
	}

	onsubmit()
	{
		this.innerModel.submit(this.innerView.getFormValues()).then( response => alert('OK!!!'));
	}
}

export { FormController };