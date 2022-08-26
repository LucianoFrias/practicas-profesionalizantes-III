import { AppController } from "./appController.js";



class AppView extends HTMLElement
{

    constructor(model)
    {
        super();
        this.innerModel = model;
        this.innerController = new AppController(this, this.innerModel);


        // NAV
        this.nav = document.createElement('nav');
        this.nav.className = "w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card";
        this.nav.style = "z-index:3;width:250px;"
        this.nav.id = "mySidebar"

        this.w3IconAnchor = document.createElement('a');
        this.w3IconAnchor.className = "w3-bar-item w3-button w3-border-bottom w3-large";
        this.w3IconAnchor.href = "#";

        this.w3IconImg = document.createElement('img');
        this.w3IconImg.src = "https://www.w3schools.com/images/w3schools.png";
        this.w3IconImg.style = "width:80%;"

        this.closeIconAnchor = document.createElement('a');
        this.closeIconAnchor.className = "w3-bar-item w3-button w3-hide-large w3-large";
        this.closeIconAnchor.href = "javascript:void(0)";
        this.closeIconAnchor.addEventListener('click', w3_close);
        this.closeIconAnchor.innerText = "Close";

        this.closeIconImg = document.createElement('i');
        this.closeIconImg.className = "fa fa-remove";

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
        this.firstHideAnchor = document.createElement('a');
        this.firstHideAnchor.className = "w3-bar-item w3-button";
        this.firstHideAnchor.href = "#";
        this.firstHideAnchor.innerText = "Link";
        this.secondHideAnchor = document.createElement('a');
        this.secondHideAnchor.className = "w3-bar-item w3-button";
        this.secondHideAnchor.href = "#";
        this.secondHideAnchor.innerText = "Link";
        this.thirdHideAnchor = document.createElement('a');
        this.thirdHideAnchor.className = "w3-bar-item w3-button";
        this.thirdHideAnchor.href = "#";
        this.thirdHideAnchor.innerText = "Link";

        // W3 CLOSE

        this.w3Close = document.createElement('div');
        this.w3Close.className = "w3-overlay w3-hide-large w3-animate-opacity";
        this.w3Close.addEventListener('click', w3_close);
        this.w3Close.style = "cursor:pointer";
        this.w3Close.id = "myOverlay";

        // MAIN

        this.w3MainContainer = document.createElement('div');
        this.w3MainContainer.className = "w3-main";
        this.w3MainContainer.style = "margin-left: 250px;";


        this.myTopContainer = document.createElement('div');
        this.myTopContainer.id = "myTop";
        this.myTopContainer.className = "w3-container w3-top w3-theme w3-large"
        this.myTopContainerP = document.createElement('p');
        this.myTopContainerPIcon = document.createElement('i');
        this.myTopContainerPIcon.className = "fa fa-bars w3-button w3-teal w3-hide-large w3-xlarge";
        this.myTopContainerPIcon.addEventListener('click', w3_open);
        this.myTopContainerPSpan = document.createElement('span');
        this.myTopContainerPSpan.id = "myIntro";
        this.myTopContainerPSpan.className = "w3-hide";
        this.myTopContainerPSpan.innerText = "W3.CSS: Introduction";

        this.w3MainHeader = document.createElement('header');
        this.w3MainHeader.className = 'w3-container w3-theme my-container';
        this.w3MainHeader.style = 'padding: 64px 32px';
        
        this.w3MainHeaderH1 = document.createElement('h1');
        this.w3MainHeaderH1.className = 'w3-xxxlarge';
        this.w3MainHeaderH1.innerText = 'W3.CSS' 

        this.w3Container = document.createElement('div');
        this.w3Container.className = "w3-container";

    }


    connectedCallback()
    {
        document.body.appendChild(this.nav);
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

        this.nav.appendChild(this.dropdownDiv);

        this.dropdownDiv.appendChild(this.dropdownAnchor);
        this.dropdownAnchor.appendChild(this.dropdownIcon);

        this.dropdownDiv.appendChild(this.w3HideDiv);
        this.w3HideDiv.appendChild(this.firstHideAnchor);
        this.w3HideDiv.appendChild(this.secondHideAnchor);
        this.w3HideDiv.appendChild(this.thirdHideAnchor);

        document.body.appendChild(this.w3Close);

        document.body.appendChild(this.w3MainContainer);

        this.w3MainContainer.appendChild(this.myTopContainer);

        this.myTopContainer.appendChild(this.myTopContainerP);

        this.myTopContainerP.appendChild(this.myTopContainerPIcon);

        this.myTopContainerP.appendChild(this.myTopContainerPSpan);

        this.w3MainContainer.appendChild(this.w3MainHeader);

        this.w3MainHeader.appendChild(this.w3MainHeaderH1);

        this.w3MainContainer.appendChild(this.w3Container);


    }
}

customElements.define('x-app', AppView);

// Open and close the sidebar on medium and small screens
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Change style of top container on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
      document.getElementById("myIntro").classList.add("w3-show-inline-block");
    } else {
      document.getElementById("myIntro").classList.remove("w3-show-inline-block");
      document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
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


export { AppView }