import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Produtos from './pages/Produtos/Produtos';
import Contato from './pages/Contato/Contato';
import Produto from './pages/Produtos/produto/produto';

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/quemsomos' element={<QuemSomos/>}/>
            <Route path='/produtos/:categoria' element={<Produtos/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/produto/:produto' element={<Produto/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
