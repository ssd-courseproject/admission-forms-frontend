import React, {Component} from 'react';
import '../../index.less';
import usersActions from '../../../redux/actions/users';

const submitForm = (data, dispatch) => {
  if (data.value.email && data.value.password) {
    dispatch(usersActions.login(data.value.email, data.value.password));
  }
};

class TestCreate extends Component {
  render() {
    return (
      ocalStorage
        .getItem(
          'token'
        ) ? <Redirect to={{pathname: "/profile"}}/> : (
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
  }
}

export default LoginForm;