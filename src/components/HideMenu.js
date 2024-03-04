import React from 'react'

import '../assets/styles/HideMenu.css';

function HideMenu() {
  return (
    <div className="menuDiv">
        <ul className='hideMenuUl'>
            <a href="#" className='itemLink'><li className='hideMenuItem'>CURVAS</li></a>
            <a href="#" className='itemLink'><li className='hideMenuItem'>TUBOS</li></a>
            <a href="#" className='itemLink'><li className='hideMenuItem'>VEDAÇÕES</li></a>
            <a href="#" className='itemLink'><li className='hideMenuItem'>ROSCAS</li></a>
            <a href="#" className='itemLink'><li className='hideMenuItem'>CANOS</li></a>
        </ul>
    </div>
  )
}

export default HideMenu