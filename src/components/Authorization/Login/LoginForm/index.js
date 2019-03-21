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
  localStorage.setItem("token", api.auth.login(data).result);
};

const LoginForm = () => {
  return (
    <div className="auth-form">
      <p className="r-title">Login</p>
      <Form onSubmit={data => submitForm(data)}>
        <FormField
          label="Email"
          name="email"
          required
        />
        <FormField label="Email" name="email" type="email" required/>
        <FormField
          label="Password"
          name="password"
          required
          // validate={{regexp: /^[a-z]/i}}
        />
      </Form>
      <p className="form-control-text">If you don't have an account, <Link to="/register">register</Link>.</p>
      <div className="form-control">
          <Link to="/profile"><Button type="submit" label="Login" primary/></Link>
      </div>
    </div>
  )
};

export default LoginForm;