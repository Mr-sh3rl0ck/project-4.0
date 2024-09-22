import React from 'react';

const TituloBlanco = ({ text1, text2, text3 }) => {
  return (
    <div className="font-bold text-white">
      <h1 className="flex justify-start text-xl sm:text-3xl ml-4 sm:ml-[100px] md:ml-[200px]">
        {text1}
      </h1>
      <hr className="border-t-4 border-black my-4 mr-5 ml-5" />
      <h2 className="flex justify-end text-4xl sm:text-5xl md:text-6xl mr-4 sm:mr-[100px] md:mr-[200px]">
        {text2}
      </h2>
      <div className="flex justify-end text-4xl sm:text-5xl md:text-6xl mr-4 sm:mr-[100px] md:mr-[200px] pr-4 sm:pr-8 md:pr-16">
        <h2>{text3}</h2>
      </div>
    </div>
  );
};

export default TituloBlanco;