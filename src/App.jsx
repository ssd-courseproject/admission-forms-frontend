import React, {Component} from 'react';
import Registration from './components/Authorization/Registration/index';
import Login from './components/Authorization/Login/index';
import MainPage from "./components/MainPage";
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Profile from "./components/Profile";
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from "react-redux";
import {alertActionsTypes} from "./redux/constants";
import history from './history';

class App extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen(() => {
      dispatch(alertActionsTypes.clear());
    });
  }

  render() {
    const {alert, user, auth} = this.props;

    console.log(this.props);

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
      <BrowserRouter>
        <div>
          {/*{alert.message &&*/}
          {/*<div className={`alert ${alert.type}`}>{alert.message}</div>*/}
          {/*}*/}
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