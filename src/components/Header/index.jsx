import React, {Component} from 'react';
import './index.less';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: props.links,
    };
  }

  render() {
    return (
      <header>
        <a href="/" className="logo">CompanyLogo</a>
        <div className="header-right">
          {this.state.links.map(item => <a key={item.id} href={item.href} className={item.active}>{item.name}</a>)}
        </div>
      </header>
    );
  }
}
