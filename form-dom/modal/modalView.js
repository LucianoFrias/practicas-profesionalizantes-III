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
     this.modal.id = 'modalWindow';


     this.loginButtonModal = document.createElement('button');
     this.loginButtonModal.className = 'login-modal';
     this.loginButtonModal.innerText = 'Login Modal';

     this.modalContent = document.createElement('div');
     //this.modalContent.classList.add()
     this.modalContent.style.display = 'none';
     this.modalContent.id = 'modalContent';

     this.modalCloseButton = document.createElement('button');
     this.modalCloseButton.innerText = 'Close';
     this.modalCloseButton.id = 'modalCloseButton';

     this.modalContent.classList.add('w3-modal');


  } 
  
  connectedCallback()
  {
  	this.appendChild(this.loginButtonModal);
    this.appendChild(this.modalContent);
    this.modalContent.appendChild(this.modal);
    this.modal.appendChild(this.innerFormView);

    this.modal.appendChild(this.modalCloseButton);


    this.loginButtonModal.addEventListener('click', () => {
      this.innerController.onClickLoginModal();
      
    })

    this.modalCloseButton.addEventListener('click', () => {
      this.innerController.onClickModalCloseButton();
    })

  }

}

customElements.define('x-modal', ModalView);


export { ModalView };