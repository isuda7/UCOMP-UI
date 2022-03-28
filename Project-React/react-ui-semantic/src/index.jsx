
import "semantic-ui-less/semantic.less";
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const agent = window.navigator.userAgent.toLowerCase();
if ( agent.indexOf('android') > -1) {
    //안드로이드
    document.body.classList.add("android");
} else if ( agent.indexOf("iphone") > -1||agent.indexOf("ipad") > -1||agent.indexOf("ipod") > -1 ) {
    //IOS
    document.body.classList.add("ios");
} else {
    //아이폰, 안드로이드 외
    document.body.classList.add("other");
}

ReactDOM.render(<App />, document.body);


    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
