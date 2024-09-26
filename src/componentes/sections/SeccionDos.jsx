import CardModelo from '../CardModelo';
import inclusion from '../../assets/inclusion.jpg';
import campus from '../../assets/campus.jpg';
import xxxx from '../../assets/xxxx.jpg';
import biblioteca from '../../assets/biblioteca.jpg';
import backgroundImage from '../../assets/Frame 14.png';

const SeccionModelo = () => {
  const data = [
    {
      image: inclusion,
      title: 'Programas de Inclusión',
      link: '/Educacion Incluyente',
    },
    {
      image: campus,
      title: 'Campus',
      link: '/campus',
    },
    {
      image: xxxx,
      title: 'xxxx',
      link: '/xxxx',
    },
    {
      image: biblioteca,
      title: 'xxxx',
      link: '/xxxx',
    },
  ];

  return (
    <section
      className="py-16 pb-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <hr className="border-t-2 border-[#1A3636] mr-10 ml-10 mb-32" />

      <div className="relative flex">
        <h1 className="text-xl font-semibold text-white ml-10">Acerca de la Universidad</h1>
        <div className="ml-36">
          <h1 className="text-6xl font-bold text-white text-center ml-40">Modelo de Inclusión</h1>
          <h1 className="text-6xl font-bold text-white text-center mb-12 ml-32">Educativa y Laboral</h1>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          {/* Primera fila */}
          <div className="col-span-1" /> {/* Espacio vacío */}
          <CardModelo image={data[0].image} title={data[0].title} link={data[0].link} />
          <CardModelo image={data[1].image} title={data[1].title} link={data[1].link} />

          {/* Segunda fila */}
          <CardModelo image={data[2].image} title={data[2].title} link={data[2].link} />
          <CardModelo image={data[3].image} title={data[3].title} link={data[3].link} />
          <div className="col-span-1" /> {/* Espacio vacío */}
        </div>
      </div>
    </section>
  );
};

export default SeccionModelo;
