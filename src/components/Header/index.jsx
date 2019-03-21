import React, {Component} from 'react';
import './index.less';
import {connect} from "react-redux";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: props.links,
    };
  }

  render() {
    return (
      <header>
        <a href="/" className="logo">AdmissionForms</a>
        <div className="header-right">
          {this.state.links.map(item => <a key={item.id} href={item.href} className={item.active}>{item.name}</a>)}
        </div>
      </header>
    );
  }
}

export default Footer;
