// src/App.js or src/components/Header.js

import React from 'react';
// import CartIcon from './components/CartIcon';
import CartIcon from '../components/CartIcon'; // Adjust the path as needed

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8f8f8' }}>
      <h1></h1>
      <CartIcon />
    </header>
  );
};

export default Header;
