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
      <footer>
        {this.state.links.map(item => <a key={item.id} href={item.href}>{item.name}</a>)}
      </footer>
    );
  }
}