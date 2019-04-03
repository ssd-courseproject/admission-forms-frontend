import React, {Component} from 'react';
import './index.less';
import {connect} from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: props.links,
    };
  }

  render() {
    const headerLinksAuthorized = (params) => [
      {
        id: 0,
        name: 'Profile',
        href: '/profile',
        active: 'active',
      },
      {
        id: 1,
        name: 'Tests',
        href: '/tests',
        active: 'active',
      },
      {
        id: 2,
        name: 'Logout',
        href: '/logout',
        active: 'active',
      }
    ];

    const headerLinksUnauthorized = [
      {
        id: 0,
        name: 'Login',
        href: '/login',
        active: 'active',
      }
    ];

    const links = this.props.authorization.loggedIn ? headerLinksAuthorized(1) : headerLinksUnauthorized;

    return (
      <header>
        <a href="/" className="logo">AdmissionForms</a>
        <div className="header-right">
          {links.map(item => <a key={item.id} href={item.href} className={item.active}>{item.name}</a>)}
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  const {authorization} = state;
  return {
    authorization
  };
}

export default connect(mapStateToProps, null)(Header);
