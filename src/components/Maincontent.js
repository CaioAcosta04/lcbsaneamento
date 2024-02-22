import React from 'react';
import '../assets/styles/Maincontent.css';
import '../index.css';

import Carrossel from './Carrossel';

function Maincontent() {
  return (
    <div className="maincontent">
        <div className="leftContent">
            <div className="slogan">
                <h1 className='slogan-text'>Sua empresa em <div className="blue">primeiro lugar.</div> A LCB em todo lugar.</h1>
            </div>
            <div className="botao">
                <button className='btnCatalogo'>CATÁLOGO</button>
            </div>
        </div>
        <div className="rightContent">
                <Carrossel/>
        </div>
    </div>
  )
}

export default Maincontent;