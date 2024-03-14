import React from 'react'
import '../../assets/styles/Produtos.css';
import MainContentComp from '../../components/MainContentComp';
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/CardProduto';

import Globais from '../../assets/globals/globais';
import Naoencontrou from '../../components/Naoencontrou';

function Produtos() {
  

  let { categoria } = useParams();

  let categoriaUpper = categoria.toUpperCase();

  console.log(categoria);

  return (
    <div className="produtosPage">
        <div className="quadrado1Product"></div>
        <div className="quadrado2Product"></div>
        <div className="quadrado3Product"></div>
        <div className="quadrado4Product"></div>
      <MainContentComp/>
      <div className="tituloDoProduto">
        <h1 className='titleProduct'>{categoriaUpper}</h1>
      </div>
      <div className="cardsProdutosDiv">
        {Globais.data.map(function(item){
          if(item.categoria === categoria){
            return (
              <div className="cardKey" key={item.id}>
                <CardProduto link={'/produto/'+item.produto} nomeProduto={item.produto} imagemProduto={item.imagem}/>
              </div>
            )
          }
          return <></>
        })}
      </div>
      <Naoencontrou />
    </div>
  )
}

export default Produtos