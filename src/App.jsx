import { Outlet } from 'react-router-dom';

import './index.css'; 
import './App.css';
import { Oportunidades } from './componentes/sections/Oportunidades';
import { Noticias } from './componentes/sections/Noticias';
import SeccionModelo from "./componentes/sections/SeccionDos";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <>
      {/* NavBar */}
      <NavBar />
      <div className="App">
        {/* Renderiza las rutas hijas aquí */}
        <Outlet />

        {/* Contenido adicional */}
        <SeccionModelo />
        <div className="bg-[#D6BD98] py-96"></div>
        
        {/* Oferta Educativa */}
        <Oportunidades />
        <div className="bg-gray-800 py-20"></div>
        
        {/* Noticias */}
        <Noticias />
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
