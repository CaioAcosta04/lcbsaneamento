import React from 'react'
import '../../assets/styles/Produtos.css';
import MainContentComp from '../../components/MainContentComp';
import { useParams } from 'react-router-dom';

function Produtos() {
  const data = [
    {id: 1, categoria: 'curvas', produto: 'Curva1'},
    {id: 2, categoria: 'tubos', produto: 'tubo1'},
    {id: 3, categoria: 'curvas', produto: 'Curva2'},
    {id: 4, categoria: 'tubos', produto: 'tubo2'},
    {id: 5, categoria: 'curvas', produto: 'Curva3'}
  ];

  let { categoria } = useParams();

  let categoriaUpper = categoria.toUpperCase();

  return (
    <div className="produtosPage">
      <MainContentComp title={categoriaUpper}/>
      {data.map(function(item){
        if(item.categoria === categoria){
          return (
            <h1 key={item.id}>{item.produto}</h1>
          )
        }
        return <></>
      })}
    </div>
  )
}

export default Produtos