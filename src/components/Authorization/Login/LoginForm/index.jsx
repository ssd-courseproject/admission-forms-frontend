import React from 'react';
import {Link} from "react-router-dom";
import '../../index.less';
import usersActions from '../../../../redux/actions/users';

import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
} from "grommet";
import api from "../../../../common/api";
import {userActionsTypes} from "../../../../redux/constants";

const submitForm = (data, dispatch) => {
  if (data.username && data.password) {
    dispatch(usersActions.login(data.username, data.password));
  }
};

const LoginForm = (props) => {
  return (
    <div className="auth-form">
      <p className="r-title">Login</p>
      <Form onSubmit={data => submitForm(data, props.dispatch)}>
        <FormField
          label="Username"
          name="username"
          required
        />
        <FormField
          label="Password"
          name="password"
          required
          // validate={{regexp: /^[a-z]/i}}
        />
        <div className="form-control">
          <Button type="submit" label="Login" primary/>
        </div>
      </Form>
      <p className="form-control-text">If you don't have an account, <Link to="/register">register</Link>.</p>
    </div>
  )
};

export default LoginForm;