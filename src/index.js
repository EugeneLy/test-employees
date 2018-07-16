import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.scss';

import Employees from './employees/employees';
import About from './about/about';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Employees} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
