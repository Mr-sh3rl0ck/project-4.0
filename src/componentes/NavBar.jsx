import { NavLink } from "react-router-dom";
import Logo from '../assets/logo-ut.png'



const NavBar = () => {

    const navItems = [
        { path: '/inicio', title: 'Inicio' }
    ];

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink
                            to='/'
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li><a href="#">Educación Incluyente</a></li>
                    <li><a href="#">Quiénes Somos</a></li>
                    <li><a href="#">Oferta Educativa</a></li>
                    <li><a href="#">Vida Estudiantil</a></li>
                    <li><a href="#">Vinculación</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..."/>
                    <button type="submit">&#128269;</button>
                </div>
            </nav>
        </header>
    )
};

export default NavBar;