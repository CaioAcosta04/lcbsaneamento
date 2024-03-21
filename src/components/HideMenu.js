import React from 'react'

import '../assets/styles/HideMenu.css';

function HideMenu() {
  return (
    <div className="menuDiv">
        <ul className='hideMenuUl'>
          <div className="leftContentHide">
            <a href="/produtos/curvas com bolsas" className='itemLink'><li className='hideMenuItem'>CURVAS COM BOLSAS</li></a>
            <a href="/produtos/curvas flangeadas" className='itemLink'><li className='hideMenuItem'>CURVAS FLANGEADAS</li></a>
            <a href="/produtos/tubos" className='itemLink'><li className='hideMenuItem'>TUBOS</li></a>
            <a href="/produtos/luvas" className='itemLink'><li className='hideMenuItem'>LUVAS</li></a>
            <a href="/produtos/tê com flanges" className='itemLink'><li className='hideMenuItem'>TÊ COM FLANGES</li></a>
            <a href="/produtos/tê com bolsas e flange" className='itemLink'><li className='hideMenuItem'>TÊ BOLSAS E FLANGE</li></a>
          </div>
          <div className="rightContentHide">
            <a href="/produtos/tê e cruzetas" className='itemLink'><li className='hideMenuItem'>TÊ E CRUZETAS</li></a>
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