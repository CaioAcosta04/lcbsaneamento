import React from 'react'

import '../assets/styles/HideMenu.css';

function HideMenu() {
  return (
    <div className="menuDiv">
        <ul className='hideMenuUl'>
          <div className="leftContentHide">
            <a href="/produtos/curvas com bolsa" className='itemLink'><li className='hideMenuItem'>CURVAS COM BOLSA</li></a>
            <a href="/produtos/curvas flangeadas" className='itemLink'><li className='hideMenuItem'>CURVAS FLANGEADAS</li></a>
            <a href="/produtos/tubos" className='itemLink'><li className='hideMenuItem'>TUBOS</li></a>
            <a href="/produtos/luvas" className='itemLink'><li className='hideMenuItem'>LUVAS</li></a>
            <a href="/produtos/te com flanges" className='itemLink'><li className='hideMenuItem'>TE COM FLANGES</li></a>
            <a href="/produtos/te com bolsa e flanges" className='itemLink'><li className='hideMenuItem'>TE BOLSA E FLANGES</li></a>
          </div>
          <div className="rightContentHide">
            <a href="/produtos/te e cruzetas" className='itemLink'><li className='hideMenuItem'>TE E CRUZETAS</li></a>
            <a href="/produtos/extremidades" className='itemLink'><li className='hideMenuItem'>EXTREMIDADES</li></a>
            <a href="/produtos/reducoes" className='itemLink'><li className='hideMenuItem'>REDUÇÕES</li></a>
            <a href="/produtos/flanges" className='itemLink'><li className='hideMenuItem'>FLANGES</li></a>
            <a href="/produtos/jtda" className='itemLink'><li className='hideMenuItem'>JTDA</li></a>
          </div>
        </ul>
    </div>
  )
}

export default HideMenu