

class DeployButtonController
{
	constructor( view )
	{
		this.innerView = view;
	}

	// Hides or shows elements from deployable list.

	onclick()
	{
	  let x = this.innerView.container;
	  if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-theme";
		this.innerView.button.style.backgroundColor = '#009688';
		this.innerView.button.style.color = '#ffffff';
	  } else { 
		x.className = x.className.replace("w3-show", ""); 
		x.previousElementSibling.className.replace(" w3-theme", "");
		this.innerView.button.style = 'background-color: none';
	  }
	}
	
}
	
class DeployButton extends HTMLElement
{
	constructor()
	{
		super();
		
		this.button = document.createElement('a');
		this.button.classList.add("w3-bar-item", "w3-button");
		this.button.innerText = 'Dropdown';
		
		this.container = document.createElement('div');
		this.container.classList.add("w3-hide");

		this.dropdownIcon = document.createElement('i');
        this.dropdownIcon.className = "fa fa-caret-down";
		
		this.appendChild(this.button);
		this.button.appendChild(this.dropdownIcon);
		this.appendChild(this.container);
		
		this.innerController = new DeployButtonController(this);
	}
	
	addItem(name)
	{
		let item = document.createElement('div');
        
		item.classList.add('w3-bar-item', 'w3-button');	
        item.innerText = name;	
		this.container.appendChild(item);
		return item;
	}
	
	
	connectedCallback()
	{
		this.button.addEventListener('click', () => this.innerController.onclick() );
	}
	
	disconnectedCallback()
	{
		
	}
	
}
	



window.addEventListener('load', () =>
{
	console.log('DOM Cargado');
	customElements.define('x-btn-desplegable', DeployButton );
	
});



export { DeployButton }