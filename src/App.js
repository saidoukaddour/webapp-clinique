import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RendezVous from './pages/RendezVous';
import Footer from './components/Footer';
import Doctors from './pages/Doctors';

function App() {
  return (
    <div className="App" >
      

      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/doctors" element={<Doctors/>}></Route>
      <Route path='/rendezvous' element={<RendezVous/>}></Route>

      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
