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

const RegistrationForm = () => {
  return (
    <div className="auth-form">
      <p className="r-title">Register</p>
      <Form onSubmit={({value}) => console.log("Submit", value)}>
        <FormField
          label="First name"
          name="first_name"
          required
          validate={{regexp: /^[a-z]/i}}
        />
        <FormField
          label="Last name"
          name="last_name"
          required
          validate={{regexp: /^[a-z]/i}}
        />
        <FormField label="Email" name="email" type="email" required/>
        <FormField
          label="Password"
          name="password1"
          required
          validate={{regexp: /^[a-z]/i}}
        />
        <FormField
          label="Repeat password"
          name="password2"
          required
          validate={{regexp: /^[a-z]/i}}
        />
      </Form>
      <p className="form-control-text">If you already have an account, <Link to="/login">sign in</Link></p>
      <div className="form-control">
        <Button type="submit" label="Register" primary/>
      </div>
    </div>
  )
};

export default RegistrationForm;