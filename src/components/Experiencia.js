import React, { useState } from 'react'
import '../assets/styles/Experiencia.css';
import ScrollTrigger from 'react-scroll-trigger';

import CountUp from 'react-countup'

function Experiencia() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
      <div className="containerXP">
          <h1 className='title'>EXPERIÊNCIA</h1>
          <div className="itemXP">
              <h2 className='itemtitle'>+
                {counterOn && <CountUp className='counter' start={0} end={35} duration={3} delay={0}/>} 
              anos</h2>
              <p className='itemp'>EXPERIÊNCIA DE MERCADO</p>
          </div>
          <div className="itemXP">
              <h2 className='itemtitle'>+
                {counterOn && <CountUp className='counter' start={0} separator='' end={1000} duration={3} delay={0}/>}
              </h2>
              <p className='itemp'>CLIENTES ATENDIDOS</p>
          </div>
          <div className="itemXP">
              <h2 className='itemtitle'>+
                {counterOn && <CountUp className='counter' start={0} end={100} duration={3} delay={0}/>}
              </h2>
              <p className='itemp'>PRODUTOS</p>
          </div>
          <div className="quadrado1XP"></div>
          <div className="quadrado2XP"></div>
          <div className="quadrado3XP"></div>
          <div className="quadrado4XP"></div>
      </div>
    </ScrollTrigger>
  )
}

export default Experiencia