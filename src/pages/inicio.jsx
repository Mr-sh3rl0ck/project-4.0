import { NavLink } from "react-router-dom";
import Logo from '../assets/logo-ut.png';


const Inicio = () => {
    return (
        <>
        <main className='inicio'>
            <section className='banner'>
                <span className='carpeta'><NavLink to='/'><img src={Logo} alt="Logo de la UT"/></NavLink></span>
                <div className='titulo'>
                    <h1>Universidad Tecnologica</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Veniam sed perferendis vero at. Dolore ratione amet accusamus 
                        cum veniam perferendis, voluptatum reiciendis natus libero, deleniti, 
                        fuga asperiores ullam aspernatur quia?
                    </p>
                </div>
            </section>
        </main>
        </>
    )
};

export default Inicio;