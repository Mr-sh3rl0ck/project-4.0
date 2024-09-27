import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-ut.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar p-4 flex items-center justify-between relative">
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <ul className="nav-links flex space-x-4">
            <li>
                <NavLink to="/" className="text-white">Inicio</NavLink>
            </li>
            <li className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                <button className="text-white focus:outline-none">Educación Incluyente</button>
                <ul className={`absolute -left-40 top-6 w-43 bg-gray-700 transition-all duration-300 transform 
                    ${isOpen ? 'opacity-100 translate-x-36' : 'opacity-0 -translate-x-40 pointer-events-none'}`}>               
                    <li>
                        <NavLink to="/Modelo_inclusion" className="block px-4 py-2 text-white hover:bg-white"> Modelo de inclusión</NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink to="/Quienes_somos" className="text-white">Quiénes Somos</NavLink>
            </li>
            <li>
                <NavLink to="/Oferta_educativa" className="text-white">Oferta Educativa</NavLink>
            </li>
            <li>
                <NavLink to="/Vida_estudiantil" className="text-white">Vida Estudiantil</NavLink>
            </li>
            <li>
                <NavLink to="/Vinculación" className="text-white">Vinculación</NavLink>
            </li>
        </ul>
        <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">&#128269;</button>
        </div>
    </nav>
    );
};

export default Navbar;
