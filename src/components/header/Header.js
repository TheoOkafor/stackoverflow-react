import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
