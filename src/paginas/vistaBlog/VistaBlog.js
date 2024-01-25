import React, { useEffect, useState } from 'react';
import PDFViewer from '../../componentes/PDFViewer/PDFViewer';
import { useParams } from 'react-router-dom';
import { ObtenerRamaArreglo, obtenerURLArchivo } from '../../api/Metodos';
import estilos from './vistaBlog.module.css';
const VistaBlog = () => {
  const { consejoID } = useParams();


  const [Url, SetUrl] = useState();
  const [Titulo, SetTitulo] = useState();

  useEffect(() => {
    ObtenerRamaArreglo(`Consejos/${consejoID}`)
      .then(async (obj) => {
        try {
          obj.PDF = await obtenerURLArchivo(obj.PDF);
         
          SetUrl(obj.PDF);
          SetTitulo(obj.Titulo)
        } catch (error) {
          console.error('Error al obtener la URL del archivo:', error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [consejoID]);

  return (
    <div className={estilos.Bloque}>
      <h1 className={estilos.Titulo}>{Titulo}</h1>
      <PDFViewer pdfURL={Url} />
    </div>
  );
};

export default VistaBlog;
