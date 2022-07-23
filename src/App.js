import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Footer from './footer/Footer';
import Navbar from './Nav/Navbar';
import NotFound from './NotFound';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
