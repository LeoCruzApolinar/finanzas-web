import React from 'react';
import Estilos from './Cartas.module.css';
import RecipeReviewCard from '../carta-media/RecipeReviewCard';

const Cartas = ({ cards }) => {
  

  return (
    <section className={Estilos.Bloque}>
      {Object.values(cards).map((card, index) => (
        <RecipeReviewCard
          key={index}
          title={card.Titulo}
          content={card.Descripcion}
          cartaId = {card.UID}
        />
      ))}
    </section>
  );
};

export default Cartas;
