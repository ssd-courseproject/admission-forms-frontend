import React from 'react';
import {Link} from "react-router-dom";
import '../../index.less';

import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
} from "grommet";
import api from "../../../../common/api";

const submitForm = (data) => {
  console.log(data.value);
  api.auth.login(data.value);
  // localStorage.setItem("token", api.auth.login(data).result);
};

const LoginForm = () => {
  return (
    <div className="auth-form">
      <p className="r-title">Login</p>
      <Form onSubmit={data => submitForm(data)}>
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