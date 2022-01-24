import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counterComponent';


const element = <h1>Hello World</h1>;
//console.log(element);
ReactDOM.render(<Counter/>, document.getElementById('bruh')); //rendering the element to the DOM - Should be 'root' lol but i made it 'bruh'