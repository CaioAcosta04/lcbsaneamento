import React from 'react';

import '../App.css';
import Maincontent from '../components/Maincontent';
import Suporte from '../components/Suporte';
import Experiencia from '../components/Experiencia';
import OndeEstamos from '../components/OndeEstamos';
import FaleConosco from '../components/FaleConosco';

function Home() {
  return (
    <div className="homeDiv">
        <div className="mainContent">
          <Maincontent/>
        </div>
        <Suporte/>
        <Experiencia/>
        <OndeEstamos/>
        <FaleConosco/>
    </div>
  )
}

export default Home;