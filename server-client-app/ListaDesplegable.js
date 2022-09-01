

// NOT COMPLETED YET!

class ListaDesplegable extends HTMLElement
{

    constructor()
    {
        super();
        this.dropdownDiv = document.createElement('div');
        this.dropdownAnchor = document.createElement('a');
        this.dropdownAnchor.className = "w3-bar-item w3-button";
        this.dropdownAnchor.addEventListener('click', ()=>{myAccordion('demo')});
        this.dropdownAnchor.href = "javascript:void(0)";
        this.dropdownAnchor.innerText = "Dropdown";

        this.dropdownIcon = document.createElement('i');
        this.dropdownIcon.className = "fa fa-caret-down"

        this.w3HideDiv = document.createElement('div');
        this.w3HideDiv.id = "demo";
        this.w3HideDiv.className = "w3-hide";

        this.appendChild(this.dropdownDiv);


    }

    addItem(name, url)
    {
        let anchor = document.createElement('a');
        anchor.innerText = elementName;
        anchor.href = url;
        anchor.classList = 'w3-bar-item w3-button';

        this.dropdownDiv.appendChild(anchor);
        return anchor;
    }

    connectedCallback()
    {
        this.addEventListener('click', myAccordion);
    }

}

 // Accordions
 function myAccordion(id) {
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme";
    } else { 
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme", "");
    }
  }

customElements.define('x-lista-desplegable', ListaDesplegable);

export { ListaDesplegable }