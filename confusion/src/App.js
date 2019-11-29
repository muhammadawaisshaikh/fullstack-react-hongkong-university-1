import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/menuComponent'

import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container-fluid">
          <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
