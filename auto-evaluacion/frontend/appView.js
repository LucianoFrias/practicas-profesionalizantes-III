
class AppView extends HTMLElement
{
    constructor()
    {
        super();

        this.anchorElement1 = document.createElement('a');
        this.anchorElement1.innerText = 'Create User'
        this.anchorElement1.href = 'createUser-page.html'


        this.anchorElement2 = document.createElement('a');
        this.anchorElement2.innerText = 'Read User'
        this.anchorElement2.href = 'readUser-page.html'

        this.anchorElement3 = document.createElement('a');
        this.anchorElement3.innerText = 'Update User'
        this.anchorElement3.href = 'updateUser-page.html'


        this.anchorElement4 = document.createElement('a');
        this.anchorElement4.innerText = 'Delete User'
        this.anchorElement4.href = 'deleteUser-page.html'


    }

    connectedCallback()
    {
       this.appendChild(this.anchorElement1);
       this.appendChild(this.anchorElement2);
       this.appendChild(this.anchorElement3);
       this.appendChild(this.anchorElement4);
    }
}

customElements.define('x-app', AppView);


export {AppView}