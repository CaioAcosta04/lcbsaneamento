import React, { useLayoutEffect } from 'react'

import '../assets/styles/OndeEstamos.css';
import Map from './Map';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function OndeEstamos() {

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ondeContainer",{
      x:0,
      opacity: 1,
      rotate: 0,
      scrollTrigger: {
        trigger: ".ondeTitle",
        scrub: true,
        start: "top 400vw",
        end: "top 100vw"
      }
    })

    return ()=>{
      gsap.killTweensOf(".ondeContainer")
    }
  })

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