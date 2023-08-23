import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

function Navbar() {
  return (
    <div className="navbar bg-white overflow-hidden pt-[.5%] fixed w-full text-[1.5vw]">
      <NavLink to="/products" activeClassName="active" className="mr-[3%]">Products</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      
    </div>
  );
}

export default Navbar;