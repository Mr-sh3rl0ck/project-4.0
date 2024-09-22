import React from "react";
import { Oportunidades } from './pages/Oportunidades';
import { Noticias } from './pages/Noticias';

import './index.css'; 
import './App.css'

function App() {
  return (
    <>
    <div className="App">
    {/* <Navbar/> */}
    {/* <1inicio/> */}
    {/* <Modelo de inclusion/> */}
    {/* <Oferta Educativa/> */}
    <Oportunidades/>
    <div className="bg-red-800 p-6"></div>
    <Noticias/>
    {/* <Footer/> */}
    </div>

    </>
  )
}

export default App
