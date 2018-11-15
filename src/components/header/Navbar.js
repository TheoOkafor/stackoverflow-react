import React, { Component } from 'react';
import Button from '../main/Button';

class Navbar extends Component {
render() {
  return (
    <nav className="top-link right margin-top-25">
      <ul className="list list-unstyled">
        <li className="search-container">
          <input type="search" name="search" placeholder="Which question?" />
          <Button styleName="primary" id="search-btn" >Search</Button>
        </li>
        <li>
          <a href="" className="inherit">
      Ask Question</a>
        </li>
        <li>
          <a href="" 
      className="inherit"><b>Chinaza</b></a>
        </li>
        <li>
          <a href="" className="inherit" id="logout">logout</a>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Navbar;
