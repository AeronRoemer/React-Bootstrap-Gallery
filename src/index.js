import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
<BrowserRouter>
<Route path="/" component={App} />
</BrowserRouter>,
  document.getElementById('root')
);
