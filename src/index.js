import 'babel-polyfill';  //For certain set of features that babel cannot transpile

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore(); //create store call

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
