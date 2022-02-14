
import 'react-app-polyfill/ie11'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import './index.css';
import "semantic-ui-less/semantic.less";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const agent = window.navigator.userAgent.toLowerCase();
if (agent.indexOf("msie") != -1 || agent.indexOf("rv:11.0") != -1) {
    document.body.classList.add("msie");
}

ReactDOM.render(<App />, document.getElementById('root'));


    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
