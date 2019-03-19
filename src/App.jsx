import React, {Component} from 'react';
import Registration from './components/Authorization/Registration';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const headerLinks = [
      {
        id: 0,
        name: 'Login',
        href: '/login',
        active: 'active',
      }
    ];

    const footerLinks = [
      {
        id: 0,
        name: 'About',
        href: '/about',
      },
      {
        id: 1,
        name: 'Home',
        href: '/'
      }
    ];

    return (
      <div>
        <Header menu={headerLinks}/>
        <Registration/>
        <Footer links={footerLinks}/>
      </div>
    );
  }
}

export default App;