import React from 'react';
import estilo from'./LoadingScreen.module.css';
import img from './15-23-06-837_512.gif'

const LoadingScreen = () => {
  return (
    <div className={estilo.loadingscreen}>
      <img src={img} alt="Loading GIF" />
      <p className={estilo.loadingtext}>Cargando...</p>
    </div>
  );
};

export default LoadingScreen;
