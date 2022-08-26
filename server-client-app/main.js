import {AppModel} from './appModel.js'
import {AppView} from './appView.js'

function main()
{
    let model = new AppModel();
    let view = new AppView(model);

    document.body.appendChild(view);
}

window.addEventListener('load', main);