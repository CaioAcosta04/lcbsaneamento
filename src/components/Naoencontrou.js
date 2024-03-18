import React from 'react'
import '../assets/styles/NaoEncontrou.css';

import catalogo from '../assets/catalogocompleto.pdf'

function Naoencontrou() {
  return (
    <div className="containerNaoEncontrou">
        <div className="textos">
            <h1 className='tituloCatalogo'>Não encontrou o que precisava?</h1>
            <h2 className='subtituloCatalogo'>Baixe nosso catálogo completo!</h2>
        </div>
        <div className="botaoCatalogoComp">
            <a href={catalogo} download="Catálogo LCB Saneamento"><button className='btnCatalogo2'>CATÁLOGO</button></a>
        </div>
    </div>
  )
}

export default Naoencontrou