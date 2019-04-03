import React from 'react';
import {Link} from "react-router-dom";

import {Button, Form, FormField,} from "grommet";

const submitForm = (data, dispatch) => {
  // if (data.value.email && data.value.password) {
  //   dispatch(usersActions.login(data.value.email, data.value.password));
  // }
};

const EditForm = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <div className="auth-form">
        <p className="r-title">Edit profile</p>
        <Form onSubmit={data => submitForm(data, props.dispatch)}>
          <FormField
            label="First name"
            name="first_name"
            placeholder="Enter your first name"
            required
          />
          <FormField
            label="Last name"
            name="Last_name"
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
            name="password1"
            placeholder="Enter your password"
            type="password"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Repeat password"
            name="password2"
            placeholder="Enter your password again"
            type="password"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Phone number"
            name="phone"
            placeholder="Enter your phone number"
            type="phone"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Address"
            name="address"
            placeholder="Enter your address"
            type="text"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Birth place"
            name="b_place"
            placeholder="Enter your birth place"
            type="text"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Birth date"
            name="b_date"
            placeholder="Enter your birth date"
            type="text"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Graduated from"
            name="b_date"
            placeholder="Enter your previous university/school"
            type="text"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Gender"
            name="b_date"
            placeholder="Gender"
            type="text"
            required
            // validate={{regexp: /^[a-z]/i}}
          />
          <div className="form-control">
            <Link to={'/profile'}><Button type="" label="Update profile" primary/></Link>
          </div>
        </Form>
      </div>
    </div>
  )
};

export default EditForm;