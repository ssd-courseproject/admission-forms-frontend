import React, {Component} from 'react';
import Registration from './components/Authorization/Registration/index';
import Login from './components/Authorization/Login/index';
import MainPage from "./components/MainPage";
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import Profile from "./components/Users/Profile";
import TestCreate from "./components/Tests/TestCreate";
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from "react-redux";
import Logout from './components/Authorization/Logout';
import TestList from './components/Tests/TestList';
import Test from './components/Tests/Test';
import {PrivateRoute} from "./components/PrivateRoute/index.js";
import './index.less';
import alertActions from "./redux/actions/alerts";
import EditForm from "./components/Users/Profile/EditForm";
import ProfilesList from './components/Users/ProfilesList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {alert, user, auth} = this.props;

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
        <div className="main-container">
          {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}
            <div className="close" onClick={() => this.props.dispatch(alertActions.hide())}>x</div>
          </div>
          }
          <Header/>
          <Switch>
            <PrivateRoute path="/profile" component={Profile}/>
            <PrivateRoute path="/profiles" component={ProfilesList}/>
            <Route path="/register" component={Registration}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <PrivateRoute path="/test/:id" component={Test}/>
            <PrivateRoute path="/editProfile" component={EditForm}/>
            <PrivateRoute path="/tests/create" component={TestCreate}/>
            <PrivateRoute path="/tests" component={TestList}/>
            <Route path="/" component={MainPage}/>
          </Switch>
          <Footer links={footerLinks}/>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  const {alert, authorization} = state;
  return {
    alert,
    authorization
  };
}

export default connect(mapStateToProps, null)(App);
