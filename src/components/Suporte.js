import React, { useLayoutEffect } from 'react';

import '../assets/styles/Suporte.css';
import imagem from '../assets/images/suporteimg.jpeg';
import SampleButton from './SampleButton';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Suporte() {

    useLayoutEffect(()=> {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".imagemDiv", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".suporte-container",
                start: "top 600vw",
                end: 'bottom 700vw',
                scrub: true
            }
        })
        return ()=>{
            gsap.killTweensOf(".imagemDiv")
        }
    }, [])

    useLayoutEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.rightContentt', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.suporte-container',
                start: "top 600vw",
                end: 'bottom 700vw',
                scrub: true,
            }
        })
        return ()=>{
            gsap.killTweensOf('.rightContentt');
        }
    })

    useLayoutEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.tituloDiv', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.suporte-container',
                start: "top 800vw",
                end: 'bottom 700vw',
                scrub: true,
            }
        })
        return ()=>{
            gsap.killTweensOf('.tituloDiv');
        }
    })


  return (
    <div className="container">
        
        <div className="tituloDiv">
            <h1 className='titulo'>SUPORTE</h1>
        </div>
      <div className="suporte-container">
        <div className="leftContent">
            <div className="imagemDiv">
                <img className='imgSuporte' src={imagem} alt="Imagem equipamentos LCB" />
            </div>
        </div>
        <div className="rightContentt">
            <div className="textoDiv">
                <p className='textSuporte'>Nosso histórico e experiência nos permitem oferecer um atendimento personalizado, de acordo com suas necessidades. <p className='underline'>Temos tudo que você precisa para saneamento.</p></p>
            </div>
            <div className="botaoDiv">
                <SampleButton link='quemsomos' text='CONHECER'/>
            </div>
        </div>
    </div>
        <div className="quadrado1"></div>
        <div className="quadrado2"></div>
        <div className="quadrado3"></div>
        <div className="quadrado4"></div>
    </div>
  )
}

export default Suporte;