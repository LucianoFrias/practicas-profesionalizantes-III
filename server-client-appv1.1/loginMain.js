import {LoginView} from './loginView.js'
import {LoginModel} from './loginModel.js'

function loginMain()
{
    let model = new LoginModel();
    let view = new LoginView(model);

    document.body.appendChild(view);
    
}

window.addEventListener('load', loginMain);