import React from 'react'

import '../assets/styles/OndeEstamos.css';

function OndeEstamos() {
  return (
    <div className="ondeContainer">
        <h1 className='ondeTitle'>ONDE ESTAMOS?</h1>
        <div className="info">
            <p className='endereco'>Rua exemplo exemplar 2346 <br/> 11111-000</p>
            <div className="divMapa"></div>
        </div>
    </div>
  )
}

export default OndeEstamos;