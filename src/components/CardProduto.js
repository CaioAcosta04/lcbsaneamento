import React from 'react'
import '../assets/styles/CardProduto.css';

function CardProduto(props) {
  return (
    <a className='aProduto' href={props.link}>
        <div className="itemProduto">
            <div className="cardDiv">
                <h2 className='titleCard'>{props.nomeProduto}</h2>
                <img className='imgProduto' src={props.imagemProduto} alt="Imagem Produto" />
            </div>
        </div>
    </a>
  )
}

export default CardProduto