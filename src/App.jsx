import React, {Component} from 'react';
import Registration from './components/Authorization/Registration/index';
import Login from './components/Authorization/Login/index';
import MainPage from "./components/MainPage";
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Profile from "./components/Profile/index";
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from "react-redux";
import Logout from './components/Authorization/Logout';
import {PrivateRoute} from "./components/PrivateRoute/index.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {alert, user, auth} = this.props;

    console.log(localStorage);

    const headerLinksUnauthorized = [
      {
        id: 0,
        name: 'Login',
        href: '/login',
        active: 'active',
      }
    ];

    const headerLinksAuthorized = (params) => [
      {
        id: 0,
        name: 'Profile',
        href: '/profile',
        active: 'active',
      },
      {
        id: 1,
        name: 'Logout',
        href: '/logout',
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
      <BrowserRouter>
        <div>
          {/*{alert.message &&*/}
          {/*<div className={`alert ${alert.type}`}>{alert.message}</div>*/}
          {/*}*/}
          <Header
            links={localStorage.getItem('token') ? headerLinksAuthorized(localStorage.getItem('token')) : headerLinksUnauthorized}/>
          <Switch>
            <PrivateRoute path="/profile" component={Profile}/>
            <Route path="/register" component={Registration}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/" component={MainPage}/>
          </Switch>
          <Footer links={footerLinks}/>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  const {alert, user, auth} = state;
  return {
    alert,
    user,
    auth
  };
}

export default connect(mapStateToProps, null)(App);