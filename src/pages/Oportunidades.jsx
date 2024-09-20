import React from "react";
import { Cartas } from '../componentes/Cartas';
import { Imagenes } from "../componentes/Imagenes";
import TituloBlanco from '../componentes/TituloBlanco'; 
import BtnVerMasX from '../componentes/BtnVerMasX'; 

export function Oportunidades() {
  const data = Imagenes(); // Llamamos a la función para obtener las imágenes

  return (
    <div className="relative w-full">

        <TituloBlanco text1="Vida Estudiantil"  text2="Oportunidades Para" text3="El Estudiante(a)"/>

            <div className="relative w-full flex flex-col lg:flex-row justify-center items-center mt-10 lg:space-x-10">
                <img
                    src={data[0].imageLink} // Usamos la primera imagen del array data de ./componentes/Imagenes
                    alt="Descripción de la imagen"
                    className="object-cover w-full lg:w-[900px] h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl mb-6 lg:mb-0 lg:mr-5"
                />
                <Cartas
                    title="BECAS"
                    description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona."
                    buttonText="Ver Más"
                    marginLeft="lg:ml-5"
                />
            </div>

            <div className="relative w-full flex flex-col lg:flex-row justify-center items-center mt-16 lg:space-x-10 space-y-6 lg:space-y-0">
                <Cartas
                    title="Actividades Extracurriculares"
                    description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona."
                    buttonText="Ver Más"
                    marginRight="lg:mr-5"
                />
                <img
                    src={data[1].imageLink} // Usamos la segunda imagen del array data de ./componentes/Imagenes
                    alt="Descripción de la imagen"
                    className="object-cover w-full lg:w-[900px] h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl"
                />
            </div>
            
            <BtnVerMasX
                buttonText="Ver Más"
                backgroundColor="#D6BD9800"
                textColor="white"
                width="120px"
                height="40px"
                margin="mt-2 mb-6"
                onClick={() => alert('Button Clicked')}
            />

    </div>



 


  );
}
