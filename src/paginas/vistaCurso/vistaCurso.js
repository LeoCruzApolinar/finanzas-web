import React, { useEffect, useState } from 'react'
import MuestraVideo from '../../componentes/muestraVideo/MuestraVideo'
import YouTubeCard from '../../componentes/cartaVideo/YouTubeCard';
import { useParams } from 'react-router-dom';
import estilos from './VistaCurso.module.css' 
import { ObtenerRamaArreglo, obtenerURLArchivo } from '../../api/Metodos';
const VistaCurso = () => {
  

  const { cursoID } = useParams();



  const [Url, SetUrl] = useState();
  const [Titulo, SetTitulo] = useState();
  const [Des, SetDes] = useState();
  const [ArrVideos, SetArrVideos] = useState([]);
  function ordenarPorOrden(arreglo) {
    return arreglo.slice().sort((a, b) => a.Orden - b.Orden);
  }

  useEffect(() => {
    ObtenerRamaArreglo(`Cursos/${cursoID}`)
      .then(async (obj) => {
        try {
          obj.Portada = await obtenerURLArchivo(obj.Portada);
          SetUrl(obj.Portada);
          SetTitulo(obj.Titulo)
          SetDes(obj.Descripcion)

         

          let arr = [];

          for (let key in obj.Videos) {
            if ( obj.Videos.hasOwnProperty(key)) {
   
              obj.Videos[key].Portada = await obtenerURLArchivo(obj.Videos[key].Portada);
              arr.push(obj.Videos[key]);
            }}
            arr = ordenarPorOrden(arr);
            SetArrVideos(arr);

        } catch (error) {
          console.error('Error al obtener la URL del archivo:', error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [cursoID]);




  return (
    <div>
      <MuestraVideo
        imageSrc={Url}
        title={Titulo}
        description={Des}
      />
      <div className={estilos.BloqueVideos}>
      {ArrVideos && ArrVideos.map((video, index) => (
          <YouTubeCard
            key={index}
            videoTitle={video.Titulo}
            videoThumbnail = {video.Portada}
            channelName={Titulo}
            videoId={video.UID}
            cursoID ={cursoID}
          />
        ))}
      </div>
    </div>
  )
}

export default VistaCurso
