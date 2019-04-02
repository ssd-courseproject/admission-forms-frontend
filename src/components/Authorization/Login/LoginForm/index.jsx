import React from 'react';
import {Link} from "react-router-dom";
import '../../index.less';
import usersActions from '../../../../redux/actions/users';

import {
  Button,
  Form,
  FormField,
} from "grommet";

const submitForm = (data, dispatch) => {
  if (data.value.email && data.value.password) {
    dispatch(usersActions.login(data.value.email, data.value.password));
  }
};

const LoginForm = (props) => {
  return (
    <div className="auth-form">
      <p className="r-title">Login</p>
      <Form onSubmit={data => submitForm(data, props.dispatch)}>
        <FormField
          label="E-mail"
          name="email"
          placeholder="Enter your email"
          required
        />
        <FormField
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
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