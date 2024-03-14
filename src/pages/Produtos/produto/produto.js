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
          <div className="leftContentProduct">
            <img className='imagemProdutoAtual' src={produtoAtual.imagem} alt={produtoAtual.produto} />
            <p className='pProductDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla tenetur commodi officia optio unde praesentium cumque illum ratione veritatis exercitationem iusto esse facere placeat, incidunt voluptatibus fugit distinctio ad ipsa.
            Ratione, possimus ipsam! Corporis quia, ex aliquam reiciendis maxime eveniet maiores dicta incidunt! Sapiente, dolores. Molestias temporibus numquam ullam suscipit corporis repellat qui sint iste dolorum, aliquam quidem maiores illo.</p>
          </div>
          <div className="rightContentProduct">
            <img className='imagemCatalogo' src={produtoAtual.catalogo} alt={'Catálogo '+produtoAtual.produto} />
          </div>
        </div>
    </div>
  )
}

export default Produto