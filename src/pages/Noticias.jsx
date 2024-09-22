import React from "react";
import TresCardNoticias from '../componentes/TresCardNoticias';  // Asegúrate de usar el nombre correcto
import TituloVerde from "../componentes/TituloVerde";


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
    <div className="bg-[#D6BD98] text-black">
        <TituloVerde text1="NOTICIAS" text2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ab ducimus reprehenderit,
        qui autem aliquid nisi, possimus officia provident mollitia est ratione odio quos molestias enim earum eligendi rem inventore."/>

      <div className="grid place-items-center my-20 mx-4">
        <TresCardNoticias noticias={noticias} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Noticias;
