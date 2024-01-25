import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import estilos from './Slider.module.css';

const Slider = ({imagenes}) => {
  return (
    <div className={estilos.sliderContainer}>
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={estilos.swiper}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide key={index}>
          <img src={imagen} alt={`Slide ${index + 1}`} className={estilos.imagen} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Slider;
