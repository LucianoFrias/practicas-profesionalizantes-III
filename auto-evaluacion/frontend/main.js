import { AppView } from "./appView.js";
import { AppModel } from "./appModel.js";


function main()
{
    let model = new AppModel();
    let view = new AppView(model);

    document.body.appendChild(view);
}


window.addEventListener('load', main)