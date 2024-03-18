import React, { useLayoutEffect } from 'react';
import '../assets/styles/Maincontent.css';
import '../index.css';

import Carrossel from './Carrossel';

import { gsap } from 'gsap';

import catalogo from '../assets/catalogocompleto.pdf'

function Maincontent() {
    useLayoutEffect(()=>{
        gsap.to(".slogan",{
            opacity: 1,
            duration: 1,
            delay: 0.5,
            x: 0
        })
        return ()=>{
            gsap.killTweensOf(".slogan")
        }
    })

    useLayoutEffect(()=>{
        gsap.to(".rightContent",{
            x: 0,
            opacity:1,
            duration: 1,
            delay: 0.5
        })

        return ()=> {
            gsap.killTweensOf(".rightContent")
        }
    })

    useLayoutEffect(()=>{

        gsap.to(".btnCatalogo",{
            opacity:1,
            delay: 0.5
        })
        return()=>{
            gsap.killTweensOf(".btnCatalogo")
        }
    })


  return (
    <div className="maincontent">
        <div className="leftContent">
            <div className="slogan">
                <h1 className='slogan-text'>Sua empresa em <div className="blue">primeiro lugar.</div> A LCB em todo lugar.</h1>
            </div>
            <div className="botao">
                <a href={catalogo} download="Catálogo LCB Saneamento"><button className='btnCatalogo'>CATÁLOGO</button></a>
            </div>
        </div>
        <div className="rightContent">
            <Carrossel/>
        </div>
    </div>
  )
}

export default Maincontent;