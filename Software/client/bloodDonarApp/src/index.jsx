import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './components/store'
import { App } from './components/App';
import './style.less';

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('container'));

