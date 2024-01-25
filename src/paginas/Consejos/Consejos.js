import React, { useEffect, useState } from 'react'
import CartaConsejo from '../../componentes/carta-consejo/CartaConsejo'
import estilo from './Consejos.module.css'
import { ObtenerRamaArreglo } from '../../api/Metodos';

const Consejos = () => {

  const [CartasArreglo, SetCartasArreglo] = useState([]);

  useEffect(() => {
    ObtenerRamaArreglo("Consejos")
      .then(async (urls) => {

        SetCartasArreglo(urls);
      })
      .catch((error) => {
        console.error('Error a:', error);
      });
  }, []);

  return (
    <div className={estilo.bloque}>

      {Object.values(CartasArreglo).map((CartasArreglo, index) => (
        <CartaConsejo 
        key={index}
        titulo={CartasArreglo.Titulo} 
        imagen={CartasArreglo.imagen}
         desc={CartasArreglo.Descripcion} 
         UID = {CartasArreglo.UID}
         />
      ))}
    </div>
  )
}

export default Consejos
