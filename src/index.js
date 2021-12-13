import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {state} from "./state/state";

if (!localStorage.getItem('catalog')) {
    state.catalog.setCatalog()
}
if (!localStorage.getItem('isAuth')) {
    localStorage.setItem('isAuth', 'null')
}
if (!localStorage.getItem('count')) {
    localStorage.setItem('count', 0)
}
if (!localStorage.getItem('summary')) {
    localStorage.setItem('summary', 0)
}

function tick() {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <App/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

setInterval(tick, 100);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
