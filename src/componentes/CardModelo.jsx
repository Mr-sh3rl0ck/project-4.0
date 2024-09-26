import PropTypes from 'prop-types';

const CardModelo = ({ image, title, link }) => {
  return (
    <a href={link} className="group">
      <div className="relative bg-white shadow-md rounded-2xl overflow-hidden w-full h-[550px] transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 flex flex-col justify-end p-4">
          <h3 className="text-3xl font-bold text-white mb-8 text-start">{title}</h3>
        </div>
      </div>
    </a>
  );
};

CardModelo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardModelo;
