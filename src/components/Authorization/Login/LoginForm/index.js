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

const LoginForm = () => {
  return (
    <div className="auth-form">
      <p className="r-title">Login</p>
      <Form onSubmit={({value}) => console.log("Submit", value)}>
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
          validate={{regexp: /^[a-z]/i}}
        />
      </Form>
      <p className="form-control-text">If you don't have an account, <Link to="/register">register</Link>.</p>
      <div className="form-control">
        <Button type="submit" label="Login" primary/>
      </div>
    </div>
  )
};

export default LoginForm;