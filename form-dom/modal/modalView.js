import { ModalController } from './modalController.js'
import { FormView } from '../form/formView.js'
import { FormModel } from '../form/formModel.js'

class ModalView extends HTMLElement
{
  constructor(model)
  {
     super()

     this.innerModel = model;
     this.innerController = new ModalController(this, this.innerModel);

     this.innerFormView = new FormView(new FormModel());


     this.modal = document.createElement('div');


     this.loginButtonModal = document.createElement('button');
     this.loginButtonModal.className = 'login-modal';
     this.loginButtonModal.innerText = 'Login Modal';

     this.modalContent = document.createElement('div');
     this.modalContent.style.display = 'none';
     this.modalContent.id = 'modalContent';

     this.modalCloseButton = document.createElement('button');
     this.modalCloseButton.innerText = 'Close';
     this.modalCloseButton.id = 'modalCloseButton';

      	 


  } 
  
  connectedCallback()
  {
  	this.appendChild(this.loginButtonModal);
    this.appendChild(this.modalContent);
    this.modalContent.appendChild(this.innerFormView);
    this.modalContent.appendChild(this.modalCloseButton);


    this.loginButtonModal.addEventListener('click', () => {
      //this.innerController.onClickLoginModal();
      this.modalContent.style.display = 'block';
    })

    this.modalCloseButton.addEventListener('click', () => {
      this.modalContent.style.display = 'none';
    })

  }

}

customElements.define('x-modal', ModalView);


export { ModalView };