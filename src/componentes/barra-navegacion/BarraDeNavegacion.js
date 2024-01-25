import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './BarraDeNavegacion.module.css';
import logo from './LogoFinanza.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const BarraDeNavegacion = () => {
  return (
    <section className={estilos.BarraNavegacion}>
      <img
        src={logo}
        alt="LinkedIn Logo"
        className={estilos.Logo}
      />
      <div className={estilos.BotonesCotenedor}>
      <Link to="/" className={estilos.Link}>
        <button className={estilos.Botones}>
          <FontAwesomeIcon icon={faHome} className={estilos.Icono} />
          Pagina principal
        </button>
        </Link>
        <Link to="/Cursos" className={estilos.Link}>
          <button className={estilos.Botones}>
            <FontAwesomeIcon icon={faBook} className={estilos.Icono} />
            Cursos
          </button>
        </Link>
        <Link to="/Consejos" className={estilos.Link}>
        <button className={estilos.Botones}>
          <FontAwesomeIcon icon={faLightbulb} className={estilos.Icono} />
          Consejos
        </button>
        </Link>
      </div>
    </section>
  );
}

export default BarraDeNavegacion;
