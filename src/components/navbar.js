import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './home.css';

function Navbar() {
  return (
    <div className="navbar bg-black overflow-hidden pt-[.5%] fixed w-full text-[3.5vw] md:text-[1.5vw] pr-[2%]">
        <NavLink to="/contact" activeClassName="active" >Contact Us</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <Link to="/" className="home_button flex mt-[-2%] md:mt-[-0.5%] w-[45%] md:w-[25%] items-center float-left absolute ml-[2%]">
            <img className="w-[30%] md:w-[17%] mr-[2%]" src={require("../pictures/logo.png")} alt="2ofakind logo"/>
            2ofaKind Vending LLC
        </Link>
    </div>
  );
}

export default Navbar;