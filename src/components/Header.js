import React from 'react'
import '../assets/styles/Header.css';
import '../index.css';

import logo from '../assets/images/LOGO_LCB_WBG.png'

function Header() {
  return (
    <div className="header">

        <a href="/" className='homeLink'>
        <div className="logo">
            <div className="image-logo-div">
                <img className='image-logo' src={logo} alt="Logo LCB" />
            </div>
            <div className="texto-logo-div">
                <p className='texto-logo'>LCB Saneamento</p>
            </div>
        </div>
        </a>

        <nav className='menu'>
            <ul className='menuul'>
                <a href="/"><li className='item'>Home</li></a>
                <a href="quemsomos"><li className='item'>Quem Somos?</li></a>
                <a href="produtos"><li className='item'>Produtos</li></a>
                <a href="contato"><li className='item'>Contato</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Header;