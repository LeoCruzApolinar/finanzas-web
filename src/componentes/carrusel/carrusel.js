import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Carrusel = ({ arreglo }) => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="m-14">
      <div className="relative overflow-hidden rounded-md">
        <div
          onClick={() => scroll('left')}
          className="absolute top-0 bottom-0 left-0 w-10 sm:w-36 z-10 cursor-pointer"
        ></div>

        <div className="flex overflow-x-auto space-x-6 p-2 relative z-20" ref={carouselRef}>
          {arreglo.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 index-auto"
              onClick={() => navigate(`/VistaCurso/${video.UID}`)}
            >
              <img
                src={video.Portada}
                alt={`carousel-item-${index}`}
                className="w-44 h-64 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-110 opacity-80"
              />
            </div>
          ))}
        </div>

        <div
          onClick={() => scroll('right')}
          className="absolute top-0 bottom-0 right-0 w-10 sm:w-36 z-10 cursor-pointer"
        ></div>
      </div>
    </div>
  );
};

export default Carrusel;
