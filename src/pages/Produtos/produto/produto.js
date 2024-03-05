import React from 'react';
import MainContentComp from '../../../components/MainContentComp';
import { useParams } from 'react-router-dom';

import '../../../assets/styles/Produto.css';


import curva11 from '../../../assets/images/ImagesDB/curva11.png';
import curva22 from '../../../assets/images/ImagesDB/curva22.png';

function Produto() {
    const data = [
        {id: 1, categoria: 'curvas', produto: 'Curva 11 BB', imagem: curva11},
        {id: 2, categoria: 'tubos', produto: 'tubo1'},
        {id: 3, categoria: 'curvas', produto: 'Curva 22 BB', imagem: curva22},
        {id: 4, categoria: 'tubos', produto: 'tubo2'}
        ];

  let { produto } = useParams();

  let produtoUpper = produto.toUpperCase();
  let produtoAtual;
  let tamanho = data.length;

  function atribuirProduto(){
    
    for(let i=0; i<tamanho;i++){
        if(data[i].produto === produto){
            produtoAtual = data[i];
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
        </div>
    </div>
  )
}

export default Produto