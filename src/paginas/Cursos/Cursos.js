import React, { useEffect, useState } from 'react'
import MultiActionAreaCard from '../../componentes/MultiActionAreaCard/MultiActionAreaCard'
import estilo from './Cursos.module.css'
import { ObtenerRamaArreglo } from '../../api/Metodos';

const Cursos = () => {

  const [CartasArreglo, SetCartasArreglo] = useState([]);

  useEffect(() => {
    ObtenerRamaArreglo("Cursos")
      .then(async (urls) => {

        SetCartasArreglo(urls);
      })
      .catch((error) => {
        console.error('Error a:', error);
      });
  }, []);




  return (
    <div className={estilo.BloqueA}>
      {Object.values(CartasArreglo).map((CartasArreglo, index) => (
        <MultiActionAreaCard 
        key={index}
        titulo={CartasArreglo.Titulo} 
        Image={CartasArreglo.Portada}
        Desc={CartasArreglo.Descripcion} 
         UID = {CartasArreglo.UID}
         />
      ))}

    </div>
  )
}

export default Cursos
