import React from 'react'
import MainContentComp from '../../components/MainContentComp'
import ContentContato from '../../components/ContentContato'

function Contato() {
  return (
    <div className="contactPage">
      <MainContentComp title='Nosso Contato'/>
      <ContentContato/>
    </div>
  )
}

export default Contato