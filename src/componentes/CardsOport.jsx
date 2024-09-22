import React from "react";
import BtnVerMasX from "./BtnVerMasX";

export function CardsOport({ title, description, marginLeft = "", marginRight = "" }) {
  return (
    <div className={`shadow-md ${marginLeft} ${marginRight} rounded-2xl bg-[#677D6A] w-full h-auto sm:w-[350px] md:w-[350px] lg:w-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px]`}>
      <div className={`p-6`}>
        <h1 className="text-3xl font-bold text-white mb-2 mt-2">{title}</h1>
        <br />
        <p className="text-gray-200">{description}</p>
        <BtnVerMasX
          buttonText="Ver Más"
          backgroundColor="#D6BD98"
          textColor="white"
          width="120px"
          height="40px"
          margin="mt-6 mb-6"
          onClick={() => alert('Primary Button Clicked')}
        />
      </div>
    </div>
  );
}

export default CardsOport;
