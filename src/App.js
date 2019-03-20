import React, {Component} from 'react';
import Registration from './components/Authorization/Registration';
import {Provider} from 'react-redux';
import {createStore} from "redux/index";
import reducer from './redux/reducers';
import MainPage from "./components/MainPage";
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Profile from "./components/Profile";

export default class App extends Component {
    render() {
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