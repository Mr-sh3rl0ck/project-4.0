import React, { useState } from 'react';
import BtnVerMasX from "./BtnVerMasX";
import { Link } from 'react-router-dom';


const CardsNoticias = ({ image, description, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
<article 
  className="relative overflow-visible" 
  onMouseEnter={() => setIsHovered(true)} 
  onMouseLeave={() => setIsHovered(false)}
>
  <img src={image} alt={title} className="w-[360px] rounded-2xl" />

  <div className={`absolute bottom-[-3rem] left-0 right-0 mx-auto w-[330px] bg-[rgb(245,245,220)] p-6 shadow-lg rounded-2xl transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>

    <span className="block text-sm mb-1">{description}</span>
    <h2 className="text-lg font-medium text-[#133816] mb-3">{title}</h2>
    <BtnVerMasX
        buttonText="Ver Más"
        backgroundColor="#D6BD9800"
        textColor="black"
        width="120px"
        height="40px"
        margin="mb-0"
        onClick={() => alert('Button Clicked')}
      />
  </div>
</article>

  );
};

export default CardsNoticias;
