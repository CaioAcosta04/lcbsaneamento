import React from 'react';

import '../assets/styles/Suporte.css';
import imagem from '../assets/images/imagemSuporte.jpg';
import SampleButton from './SampleButton';

function Suporte() {
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