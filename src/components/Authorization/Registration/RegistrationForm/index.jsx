import React from 'react';
import {Link} from "react-router-dom";
import '../../index.less';
import usersActions from '../../../../redux/actions/users';

import {Button, Form, FormField,} from "grommet";
import {Redirect} from "react-router";

const submitForm = (data, dispatch) => {
  dispatch(usersActions.register(data.value));
};

const RegistrationForm = (props) => {
  return localStorage.getItem('token') ? <Redirect to={{pathname: "/profile"}}/> : (
    <div className="auth-form">
      <p className="r-title">Registation</p>
      <Form onSubmit={data => submitForm(data, props.dispatch)}>
        <FormField
          label="First name"
          name="name"
          placeholder="Enter your first name"
          required
        />
        <FormField
          label="Last name"
          name="surname"
          placeholder="Enter your last name"
          required
        />
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
        />
        <FormField
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <div className="form-control">
          <Button type="submit" label="Register" primary/>
        </div>
      </Form>
      <p className="form-control-text">If you already have an account, <Link to="/login">login</Link>.</p>
    </div>
  )
};

export default RegistrationForm;