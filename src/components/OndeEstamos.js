import React from 'react'

import '../assets/styles/OndeEstamos.css';
import Map from './Map';

function OndeEstamos() {
  return (
    <div className="ondeContainer">
        <h1 className='ondeTitle'>ONDE ESTAMOS?</h1>
        <div className="info">
            <p className='endereco'>Av. Independência, 2634 - Vila Pagano<br/> Valinhos - SP <br/> 13277-000</p>
            <Map/>
        </div>
    </div>
  )
}

export default OndeEstamos;