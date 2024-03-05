import React from 'react'
import '../../assets/styles/Produtos.css';
import MainContentComp from '../../components/MainContentComp';
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/CardProduto';

import curva11 from '../../assets/images/ImagesDB/curva11.png';
import curva22 from '../../assets/images/ImagesDB/curva22.png';




function Produtos() {
  const data = [
    {id: 1, categoria: 'curvas', produto: 'Curva 11 BB', imagem: curva11},
    {id: 2, categoria: 'tubos', produto: 'tubo1'},
    {id: 3, categoria: 'curvas', produto: 'Curva 22 BB', imagem: curva22},
    {id: 4, categoria: 'tubos', produto: 'tubo2'}
  ];

  let { categoria } = useParams();

  let categoriaUpper = categoria.toUpperCase();

  return (
    <div className="produtosPage">
      <MainContentComp title={categoriaUpper}/>
      <div className="cardsProdutosDiv">
        {data.map(function(item){
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
    </div>
  )
}

export default Produtos