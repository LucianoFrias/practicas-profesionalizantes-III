import { AppController } from "./appController.js";
import { DeployButton } from './deployButton.js';



class AppView extends HTMLElement
{

    constructor(model)
    {

        // OBJECTS

        super();
        this.innerModel = model;
        this.innerController = new AppController(this, this.innerModel);

        this.deployButton = new DeployButton();
        this.deployButton.addItem('Link 1');
        this.deployButton.addItem('Link 2');

        // NAV

        this.nav = document.createElement('nav');
        this.nav.className = "w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card";
        this.nav.style = "z-index:3;width:250px;"

        this.w3IconAnchor = document.createElement('a');
        this.w3IconAnchor.className = "w3-bar-item w3-button w3-border-bottom w3-large";
        this.w3IconAnchor.href = "#";

        this.w3IconImg = document.createElement('img');
        this.w3IconImg.src = "https://www.w3schools.com/images/w3schools.png";
        this.w3IconImg.style = "width:80%;"

        this.closeIconAnchor = document.createElement('a');
        this.closeIconAnchor.className = "w3-bar-item w3-button w3-hide-large w3-large";
        this.closeIconAnchor.href = "javascript:void(0)";
        this.closeIconAnchor.addEventListener('click', () => this.closeSidebar());
        this.closeIconAnchor.innerText = "Close";

        this.closeIconImg = document.createElement('i');
        this.closeIconImg.className = "fa fa-remove";

        // Sidebar Anchors

        this.homeAnchor = document.createElement('a');
        this.homeAnchor.className = "w3-bar-item w3-button w3-teal";
        this.homeAnchor.href = "#";
        this.homeAnchor.innerText = "Home";

        this.firstAnchor = document.createElement('a');
        this.firstAnchor.className = "w3-bar-item w3-button";
        this.firstAnchor.href = "#"; 
        this.firstAnchor.innerText = "Link 1";
        this.secondAnchor = document.createElement('a');
        this.secondAnchor.className = "w3-bar-item w3-button";
        this.secondAnchor.href = "#";
        this.secondAnchor.innerText = "Link 2";
        this.thirdAnchor = document.createElement('a');
        this.thirdAnchor.className = "w3-bar-item w3-button";
        this.thirdAnchor.href = "#";
        this.thirdAnchor.innerText = "Link 3";
        this.fourthAnchor = document.createElement('a');
        this.fourthAnchor.className = "w3-bar-item w3-button";
        this.fourthAnchor.href = "#";
        this.fourthAnchor.innerText = "Link 4";
        this.fifthAnchor = document.createElement('a');
        this.fifthAnchor.className = "w3-bar-item w3-button";
        this.fifthAnchor.href = "#";
        this.fifthAnchor.innerText = "Link 5";


        // Sidebar Close button 

        this.w3Close = document.createElement('div');
        this.w3Close.className = "w3-overlay w3-hide-large w3-animate-opacity";
        this.w3Close.addEventListener('click', () => this.closeSidebar() );
        this.w3Close.style = "cursor:pointer";

        // MAIN 

        this.w3MainContainer = document.createElement('div');
        this.w3MainContainer.className = "w3-main";
        this.w3MainContainer.style = "margin-left: 250px;";

        // Top Container on scroll

        this.myTopContainer = document.createElement('div');
        this.myTopContainer.id = "myTop";
        this.myTopContainer.className = "w3-container w3-top w3-theme w3-large"
        this.myTopContainerP = document.createElement('p');
        this.myTopContainerPIcon = document.createElement('i');
        this.myTopContainerPIcon.className = "fa fa-bars w3-button w3-teal w3-hide-large w3-xlarge";
        this.myTopContainerPIcon.addEventListener('click', ()=> this.openSidebar() );
        this.myTopContainerPSpan = document.createElement('span');
        this.myTopContainerPSpan.id = "myIntro";
        this.myTopContainerPSpan.className = "w3-hide";
        this.myTopContainerPSpan.innerText = "W3.CSS: Introduction";

        window.addEventListener('scroll', () => this.showTopContainer())

        // Main Header

        this.w3MainHeader = document.createElement('header');
        this.w3MainHeader.className = 'w3-container w3-theme my-container';
        this.w3MainHeader.style = 'padding: 64px 32px';
        
        this.w3MainHeaderH1 = document.createElement('h1');
        this.w3MainHeaderH1.className = 'w3-xxxlarge';
        this.w3MainHeaderH1.innerText = 'W3.CSS' 

        // Empty container waiting for content...

        this.w3Container = document.createElement('div');
        this.w3Container.className = "w3-container";

    }


    connectedCallback()
    {
        this.appendChild(this.nav);
        this.nav.appendChild(this.w3IconAnchor)
        this.w3IconAnchor.appendChild(this.w3IconImg)
        
        this.nav.appendChild(this.closeIconAnchor);
        this.closeIconAnchor.appendChild(this.closeIconImg);

        this.nav.appendChild(this.homeAnchor);
        this.nav.appendChild(this.firstAnchor);
        this.nav.appendChild(this.secondAnchor);
        this.nav.appendChild(this.thirdAnchor);
        this.nav.appendChild(this.fourthAnchor);
        this.nav.appendChild(this.fifthAnchor);

        this.nav.appendChild(this.deployButton)

        this.appendChild(this.w3Close);

        this.appendChild(this.w3MainContainer);

        this.w3MainContainer.appendChild(this.myTopContainer);

        this.myTopContainer.appendChild(this.myTopContainerP);

        this.myTopContainerP.appendChild(this.myTopContainerPIcon);

        this.myTopContainerP.appendChild(this.myTopContainerPSpan);

        this.w3MainContainer.appendChild(this.w3MainHeader);

        this.w3MainHeader.appendChild(this.w3MainHeaderH1);

        this.w3MainContainer.appendChild(this.w3Container);

    }

    
    // Open the sidebar on medium and small screens 

    openSidebar() 
    {
      this.nav.style.display = "block";
    }
    
    // Close the sidebar on medium and small screens 

    closeSidebar()
    {
      this.nav.style.display = "none";
    }

    // Show top container after scrolling.
    showTopContainer() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.myTopContainer.classList.add("w3-card-4", "w3-animate-opacity");
        this.myTopContainerPSpan.classList.add("w3-show-inline-block");
      } else {
        this.myTopContainerPSpan.classList.remove("w3-show-inline-block");
        this.myTopContainer.classList.remove("w3-card-4", "w3-animate-opacity");
      }
    }
}

customElements.define('x-app', AppView);


export { AppView }