import React from 'react'
import '../assets/styles/Header.css';
import '../index.css';

import { useState } from 'react';

import logo from '../assets/images/LOGO_LCB_WBG.png'
import HideMenu from './HideMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

    function mudarMenu(){
        setIsOpen((prev)=>!prev);
    }

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
                <div className="divProdutos">
                    <li onClick={mudarMenu} className='item produtoItem'>Produtos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </li>
                    { isOpen && <HideMenu/>}
                </div>
                <a href="contato"><li className='item'>Contato</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Header;