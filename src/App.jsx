import { Oportunidades } from './componentes/sections/Oportunidades';
import { Noticias } from './componentes/sections//Noticias';

import './index.css'; 
import './App.css'
import SeccionModelo from "./componentes/sections/SeccionDos";

function App() {
  return (
    <>
    <div className="App">
    {/* <Navbar/> */}
    {/* <1inicio/> */}
    <SeccionModelo/>
    <div className="bg-[#D6BD98] py-96"></div>
    {/* <Oferta Educativa/> */}
    <Oportunidades/>
    <div className="bg-gray-800 py-20"></div>
    <Noticias/>
    {/* <Footer/> */}
    </div>

    </>
  )
}

export default App
