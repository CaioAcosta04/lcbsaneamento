import React from 'react'

import logo from '../assets/images/LOGO_LCB_WBG.png';

import '../assets/styles/MainContentComp.css';

function MainContentComp(props) {
  return (
    <div className="mainContentWho">
          <div className="infosWho">
            <div className="divLogo">
              <img src={logo} alt="Logo LCB" className='logoWho'/>
            </div>
            <div className="divTitle">
              <h1 className='titleWho'>{props.title}</h1>
            </div>
          </div>
    </div>
  )
}

export default MainContentComp