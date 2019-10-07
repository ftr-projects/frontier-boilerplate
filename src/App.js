import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HeaderBar from './components/navbar/Navbar';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className="ftr-main">
        <HeaderBar />

      </main>
    );
  }

}

export default App;
