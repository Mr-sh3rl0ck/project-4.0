import CardsOport from '../CardOportunidades';
import BtnVerMasX from '../BtnVerMasX'; 
import becas from '../../assets/becas.jpg';

export function Oportunidades() {

  const data = [
    {
      image: becas,
    },
    {
      image: becas,
    },

  ];

  return (
    <div className="relative w-full">

      <div className="relative flex mt-28">
        <h1 className="text-xl font-semibold text-white ml-10">Vida Estudiantil</h1>
        <div className="ml-96">
          <h1 className="text-6xl font-bold text-white text-center ">Oportunidades para</h1>
          <h1 className="text-6xl font-bold text-white text-center mb-12 ">el estudiante</h1>
        </div>
      </div>

      <div className="relative w-full flex flex-col lg:flex-row justify-center items-center mt-5 lg:space-x-10">
        <img
          src={data[0].image}
          alt="Descripción de la imagen"
          className="object-cover w-[900px] lg:w-[700px] h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl mb-6 lg:mb-0 lg:mr-5 relative z-0  transition-all duration-300 hover:scale-105"
        />
        <CardsOport
          title="BECAS"
          description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona."
          buttonText="Ver Más"
          marginLeft="lg:ml-5 mt-5 mb-5"
        />
      </div>

      <div className="relative w-full flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-6 lg:space-y-0">
        <CardsOport
          title="Actividades Extracurriculares"
          description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona."
          buttonText="Ver Más"
          marginRight="lg:mr-5 mt-5 mb-5"
        />
        <img
          src={data[1].image} // Usamos la segunda imagen del array data
          alt="Descripción de la imagen"
          className="object-cover w-[900px] lg:w-[700px] h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl relative z-0  transition-all duration-300 hover:scale-105"
        />
      </div>
      
      <div className="flex justify-center items-center py-10">
        <BtnVerMasX
            buttonText="Ver Más"
            backgroundColor="#D6BD9800"
            textColor="white"
            width="120px"
            height="40px"
            margin="mt-2 mb-6"
            borderWidth="2px"
            borderColor="white"
            className='relative z-0  transition-all duration-300 hover:scale-105'
            onClick={() => alert('Button Clicked')}
          />
</div>

    </div>
  );
}
