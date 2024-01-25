import React from 'react'
import Carousel from '../../componentes/carrusel/carrusel';
import Cartas from '../../componentes/cartas/Cartas';
import Slider from '../../componentes/slider/Slider';
import Titulo from '../../componentes/titulos/Titulo';
import { ObtenerRamaArreglo, obtenerURLArchivo, obtenerURLsImagenesCarpeta } from '../../api/Metodos';
import { useState, useEffect } from 'react';

const PaginaPrincipal = () => {

  const [SliderArreglo, SetSliderArreglo] = useState([]);
  const [CartasArreglo, SetCartasArreglo] = useState([]);
  const [CartasArregloCurso, SetCartasArregloCurso] = useState([]);
  useEffect(() => {
    obtenerURLsImagenesCarpeta("SlidersImage")
      .then((urls) => {
        SetSliderArreglo(urls);
      })
      .catch((error) => {
        console.error('Error al obtener URLs de imágenes:', error);
      });

  }, []);

  useEffect(() => {
    ObtenerRamaArreglo("Consejos")
      .then(async (urls) => {
        SetCartasArreglo(urls);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  

  useEffect(() => {
    const arr = [];
    ObtenerRamaArreglo("Cursos")
      .then(async (urls) => {
        for (let key in urls) {
          if (urls.hasOwnProperty(key)) {
            let subObjeto = urls[key];
             subObjeto.Portada = await obtenerURLArchivo(subObjeto.Portada);
             arr.push(subObjeto);

          }}
        SetCartasArregloCurso(arr);
      })
      .catch((error) => {
        console.error('Error a:', error);
      });
  }, []);


  return (
    <div>
      <Slider imagenes={SliderArreglo} />
      <Titulo titulo={"Cursos"} />
      <Carousel arreglo={CartasArregloCurso} />  
      <Titulo titulo={"Consejos"} />
      <Cartas cards={CartasArreglo} />
    </div>
  )
}

export default PaginaPrincipal
