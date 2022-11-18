import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbarLinks">
        <div className="gpt3__navbarLinks_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbarLinks_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbarSign">
        <p>sign in</p>
        <button type="button">sign up</button>
      </div>
    </div>
  );
}
