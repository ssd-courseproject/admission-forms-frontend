import React, {Component} from 'react';
import './index.less';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: props.menu,
    };
  }

  render() {
    return (
      <header>
        <a href="/" className="logo">CompanyLogo</a>
        <div className="header-right">
          {this.state.menu.map(item => <a key={item.id} href={item.href} className={item.active}>{item.name}</a>)}
        </div>
      </header>
    );
  }
}

export default Header;