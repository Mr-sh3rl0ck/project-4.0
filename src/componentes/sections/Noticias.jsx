import React from "react";
import TresCardNoticias from '../CardsNoticias';  // Asegúrate de usar el nombre correcto


export const Noticias = () => {
  const noticias = [
    {
      id: 1,
      image: 'https://bolavip.com/__export/1671402234649/sites/bolavip/img/2022/12/18/gettyimages-1450119264.jpg_242310155.jpg',
      description: 'Descripcion noticia 1',
      title: 'Noticia 1',
      link: '#'
    },
    {
      id: 2,
      image: 'https://bolavip.com/__export/1671402234649/sites/bolavip/img/2022/12/18/gettyimages-1450119264.jpg_242310155.jpg',
      description: 'Descripcion noticia 2',
      title: 'Noticia 2',
      link: '#'
    },
    {
      id: 3,
      image: 'https://bolavip.com/__export/1671402234649/sites/bolavip/img/2022/12/18/gettyimages-1450119264.jpg_242310155.jpg',
      description: 'Descripcion noticia 3',
      title: 'Noticia 3',
      link: './pages/Oportunidades'
    },
  ];

  return (
    <div className="bg-[#D6BD98] text-black py-12">

      <div className="relative flex mt-28">
        <h1 className="text-xl font-semibold text-[#40534C] ml-10">Vida Estudiantil</h1>
        <div className="ml-96">
          <h1 className="text-6xl font-bold text-[#40534C] text-center ">Noticias</h1>
        </div>
      </div>

      

      <div className="grid place-items-center my-20 mx-4 ">
        <TresCardNoticias noticias={noticias} />
      </div>
    </div>
  );
};

export default Noticias;
