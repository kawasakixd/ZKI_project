import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Practica from './components/Practica/Practica';
import Teoriya from './components/Teoriya/Teoriya';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  debugger;
  return (
    <div className="app">
        <Header />
        <Routes>
          <Route path="/practica/*" element={<Practica buttons = {props.button}/>} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/teoriya/*" element={<Teoriya />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;