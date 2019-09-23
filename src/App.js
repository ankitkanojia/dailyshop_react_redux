import React, { Component } from 'react';
import './App.css';
import Loader from './Containers/Loader';
import Header from './Containers/Header';
import Menu from './Containers/Menu';
import Footer from './Containers/Footer';
import Main from './Containers/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Loader />
        <a className="scrollToTop" href="javascript:void(0)"><i className="fa fa-chevron-up"></i></a>
        <Header />
        <Menu />
        <main>
          <Main />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
