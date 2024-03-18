import React from 'react'

import MainContentWho from '../../components/MainContentWho';
import ConteudoWho from '../../components/ConteudoWho';

import '../../assets/styles/QuemSomos.css';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';

function QuemSomos() {
  useLayoutEffect(()=>{
    gsap.to(".QuemSomosDiv",{
        opacity:1,
        duration: 1
    })

    return()=>{
        gsap.killTweensOf(".QuemSomosDiv")
    }
})
  return (
    <div className="QuemSomosDiv" style={{opacity: 0}}>
        <MainContentWho/>
        <ConteudoWho/>
    </div>
  )
}

export default QuemSomos