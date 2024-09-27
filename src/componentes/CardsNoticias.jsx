import React from 'react';
import CardsNoticias from './CardNoticias';

const ListaCards = ({ noticias }) => {
  return (
    <div className="grid gap-20 md:grid-cols-3 lg:grid-cols-3">
      {noticias.map(noticia => (

        <CardsNoticias
          key={noticia.id}
          image={noticia.image}
          description={noticia.description}
          title={noticia.title}
          link={noticia.link}
        />

      ))}
    </div>
  );
};

export default ListaCards;
