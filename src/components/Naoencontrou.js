import React from 'react'
import '../assets/styles/NaoEncontrou.css';


function Naoencontrou() {
  return (
    <div className="containerNaoEncontrou">
        <div className="textos">
            <h1 className='tituloCatalogo'>Não encontrou o que precisava?</h1>
            <h2 className='subtituloCatalogo'>Baixe nosso catálogo completo!</h2>
        </div>
        <div className="botaoCatalogoComp">
            <button className='btnCatalogo'>CATÁLOGO</button>
        </div>
    </div>
  )
}

export default Naoencontrou