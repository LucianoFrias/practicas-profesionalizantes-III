class FormView extends HTMLElement
{

	constructor(model)
	{
		super();

		this.innerModel = model;
		//this.innerController = new FormController(this, this.innerModel);

		this.usernameInput = document.createElement('input');
		this.usernameInput.type = 'text';
		this.usernameInput.placeholder = 'Username';

		this.passwordInput = document.createElement('input');
		this.passwordInput.type = 'text';
		this.passwordInput.placeholder = 'Password';

		/*this.rememberPasswordCheckbox = document.createElement('input');
		this.rememberPasswordCheckbox.type = 'checkbox';
		this.rememberPasswordCheckbox.innerText = 'Remember login data';*/
	}

	connectedCallback()
	{
		this.appendChild(this.usernameInput);
		this.appendChild(this.passwordInput);
		//this.appendChild(this.rememberPasswordCheckbox);
	}

	getFormValues()
	{
     let loginData =
     {

     	username: this.usernameInput.value,
     	password: this.passwordInput.value,
     }

     return loginData;

	}

}

customElements.define('x-form-view', FormView);

export { FormView }