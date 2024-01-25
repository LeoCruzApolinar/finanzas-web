// MuestraVideo.js
import React from 'react';
import styles from './MuestraVideo.module.css';

const MuestraVideo = ({ imageSrc, title, description }) => {
  return (
    <section className={styles.BloqueA}>
      <div className={styles.ImagenContainer}>
        <img src={imageSrc} alt={title} className={styles.Imagen} />
      </div>
      <div className={styles.ContenedorDeTexto}>
        <h1 className={styles.Titulo}>{title}</h1>
        <p className={styles.Texto}>{description}</p>
      </div>
    </section>
  );
};

export default MuestraVideo;
