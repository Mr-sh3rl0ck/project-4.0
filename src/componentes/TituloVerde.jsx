import prototype from 'prop-types';

const TituloBeige = ({ text1, text2 }) => {
  return (
    <div className="font-bold text-[#40534C]">
        {/* Primera línea de texto */}

        <div className="flex justify-center text-4xl sm:text-5xl md:text-6xl  sm:[100px] md:[200px] sm:8 md:16 ">
          <h1 className="pt-20 text-center">{text1}</h1>
        </div>
        {/* Tercera línea de texto */}
        <div className="flex justify-center m-20 text-xl sm:text-3xl sm:[100px] md:[200px]">
          <p className="text-center">{text2}</p>
        </div>

    </div>

  );
};


TituloBeige.propTypes = {
  text1: prototype.string.isRequired,
  text2: prototype.string.isRequired,
};

export default TituloBeige;
