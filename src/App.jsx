import React, {Component} from 'react';
import Registration from './components/Authorization/Registration';
import {createStore} from "redux/index";
import MainPage from "./components/MainPage";
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Profile from "./components/Profile";

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
        href: '/'
      }
    ];

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/register" component={Registration}/>
            {/*<Route path="/login" component={Login}/>*/}
            <Route path="/" component={MainPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
