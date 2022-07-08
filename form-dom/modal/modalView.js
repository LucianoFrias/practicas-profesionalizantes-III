

class ModalView extends HTMLElement
{
  constructor(model)
  {
     super()

     this.innerModel = model;
     //this.innerController = new ModalController(this, this.innerModel);


     this.modal = document.createElement('div');


     this.loginButtonModal = document.createElement('button');
     this.loginButtonModal.className = 'login-modal';
     this.loginButtonModal.innerText = 'Login Modal';

     this.usernameInput = document.createElement('input');
     this.usernameInput.type = 'text';
     this.usernameInput.placeholder = 'Username';

     this.passwordInput = document.createElement('input');
	 this.passwordInput.type = 'text';
	 this.passwordInput.placeholder = 'Password';

	 this.confirmButton = document.createElement('button');
	 this.confirmButton.innerText = 'Confirm';
	 this.confirmButton.classList.add("confirmButton");

	 


  } 
  
  connectedCallback()
  {
  	this.appendChild(this.loginButtonModal);
  }

}

customElements.define('x-modal', ModalView);


export { ModalView };