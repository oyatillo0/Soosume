import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Soosum from './pages/Soosum/Soosum';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Soosum/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
