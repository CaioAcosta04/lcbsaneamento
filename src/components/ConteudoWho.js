import React from 'react'

import '../assets/styles/ConteudoWho.css';

function ConteudoWho() {
  return (
    <div className="conteudoWho">
        <div className="leftContentWho">
            <div className="itemLeft">
                <p className='titleLeft'>+35</p>
                <p className='subtitleLeft'>ANOS</p>
            </div>
            <div className="itemLeft">
                <p className='titleLeft'>+1000</p>
                <p className='subtitleLeft'>CLIENTES</p>
            </div>
            <div className="itemLeft">
                <p className='titleLeft'>+1000</p>
                <p className='subtitleLeft'>PRODUTOS</p>
            </div>
        </div>
        <div className="rightContentWho">
            <div className="textoContent">
                <p className='textoContentp'>Há mais de 35 anos no mercado, nós da LCB Saneamento somos especializados na fabricação e na venda de tubos, conexões e válvulas em ferro fundido, aço carbono e PVC para obras de saneamento.<br/><br/>Estamos à disposição para o fornecimento dos materiais com qualidade e segurança, tudo isso em um curto espaço de tempo.</p>
            </div>
            <div className="itensContent">
                <div className="itemContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    </svg>
                    <h3 className='titleItem'>OBJETIVO</h3>
                    <p className='textItem'>Proporcionar satisfação ao cliente, buscando sempre a melhor qualidade de produtividade.</p>
                </div>
                <div className="itemContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                    <h3 className='titleItem'>VISÃO</h3>
                    <p className='textItem'>Ser referência na entrega de materiais para a indústria do saneamento brasileiro.</p>
                </div>
                <div className="itemContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                    </svg>
                    <h3 className='titleItem'>VALORES</h3>
                    <p className='textItem'>A conduta de cada uma das pessoas com quem trabalhamos deve ser um reflexo desses Valores.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConteudoWho