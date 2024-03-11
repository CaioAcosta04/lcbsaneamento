import React from 'react';
import MainContentComp from '../../../components/MainContentComp';
import { useParams } from 'react-router-dom';

import '../../../assets/styles/Produto.css';

import Globais from '../../../assets/globals/globais';

function Produto() {
  let { produto } = useParams();

  let produtoUpper = produto.toUpperCase();
  let produtoAtual;
  let tamanho = Globais.data.length;

  function atribuirProduto(){
    
    for(let i=0; i<tamanho;i++){
        if(Globais.data[i].produto === produto){
            produtoAtual = Globais.data[i];
        }
    }
  }
  atribuirProduto();

  return (
    <div className="produtoPage">
        <MainContentComp/>
        <h1 className='titleProduct'>{produtoUpper}</h1>
        <div className="produtosInfos">
            <img className='imagemProdutoAtual' src={produtoAtual.imagem} alt={produtoAtual.produto} />
            <img className='imagemCatalogo' src={produtoAtual.catalogo} alt={'Catálogo '+produtoAtual.produto} />
        </div>
    </div>
  )
}

export default Produto