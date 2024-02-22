import './App.css';
import Header from './components/Header';
import Maincontent from './components/Maincontent';

function App() {
  return (
    <div className="App">
        <div className="mainContent">
          <Header/>
          <Maincontent/>
        </div>
    </div>
  );
}

export default App;
