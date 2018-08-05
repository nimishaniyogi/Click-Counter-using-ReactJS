import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//state of the object is passed and renedered. 
let model = {clicks:0};


function render() {
    ReactDOM.render(<App clicks={model.clicks} onClick={()=> { model.clicks += 1; render(); }} />, document.getElementById('root'));
}
render();
registerServiceWorker();
