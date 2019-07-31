import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import configStore from './redux/store/store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'

const st=configStore();

const renderApp=(
    <Provider store={st}>
    <ReduxToastr position="bottom-right" transitionIn="fadeIn" transitionOut="fadeOut"/>
    <App/>
    </Provider>
)


ReactDOM.render(renderApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
