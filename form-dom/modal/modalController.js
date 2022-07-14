
class ModalController
{

	constructor(view, model)
	{
		this.innerView = view;
		this.innerModel = model;

	}

	onClickLoginModal()
	{
		this.innerView.modalContent.style.display = 'block';
	}

	onClickModalCloseButton()
	{
		this.innerView.modalContent.style.display = 'none';
	}


}

export { ModalController };