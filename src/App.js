import './App.css';

import Header from './components/Header';
import Maincontent from './components/Maincontent';
import Suporte from './components/Suporte';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import OndeEstamos from './components/OndeEstamos';

function App() {
  return (
    <div className="App">
        <div className="mainContent">
          <Header/>
          <Maincontent/>
        </div>
        <Suporte/>
        <Experiencia/>
        <OndeEstamos/>
        <Footer/>
    </div>
  );
}

export default App;
