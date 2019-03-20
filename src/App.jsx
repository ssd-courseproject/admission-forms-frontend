import React, {Component} from 'react';
import Registration from './components/Authorization/Registration';
import Login from './components/Authorization/Login';
import MainPage from "./components/MainPage";
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Profile from "./components/Profile";
import Header from './components/Header';
import Footer from './components/Footer';
import {createStore} from 'redux';
import admissionsFormsReducers from './redux/reducers';
import {Provider} from "react-redux";

const store = createStore(admissionsFormsReducers);

export default class App extends Component {
  render() {
    const headerLinks = [
      {
        id: 0,
        name: 'Login',
        href: '/login',
        active: 'active',
      }
    ];

    const footerLinks = [
      {
        id: 0,
        name: 'About',
        href: '/about',
      },
      {
        id: 1,
        name: 'Home',
        href: '/',
      }
    ];

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header links={headerLinks}/>
            <Switch>
              <Route path="/profile" component={Profile}/>
              <Route path="/register" component={Registration}/>
              <Route path="/login" component={Login}/>
              <Route path="/" component={MainPage}/>
            </Switch>
            <Footer links={footerLinks}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
