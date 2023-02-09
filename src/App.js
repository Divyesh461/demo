import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Contactus from './pages/Contactus';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/aboutus' element={<Aboutus/>}/>
          <Route exact path='/contactus' element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

