import React, { useState, useEffect } from 'react';
import MediaPlayer from '../../componentes/reproductor/ReproductorTest';
import DescriptionComponent from '../../componentes/caja-descripcion/descriptionVideo';
import { useNavigate, useParams } from 'react-router-dom';
import { ObtenerRamaArreglo, obtenerURLArchivo } from '../../api/Metodos';
import LoadingScreen from '../../componentes/loading-screen/LoadingScreen';
import YouTubeCard from '../../componentes/cartaVideo/YouTubeCard';

const VideoPlayer = () => {

  const { videoID, cursoID } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [Url, setUrl] = useState();
  const [TituloCurso, setTitulo] = useState();
  const [Des, setDes] = useState();
  const [ArrVideos, setArrVideos] = useState([]);
  const [OtrosVideos, setArrOtrosVideos] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    setForceUpdate(prevState => !prevState);
    const fetchData = async () => {
      try {
        setLoading(true);

        if (!cursoID) {
          throw new Error('No se ha proporcionado un ID de curso');
        }

        const obj = await ObtenerRamaArreglo(`Cursos/${cursoID}`);


        if (!obj || obj === null) {
          throw new Error('No se encontraron datos del curso');
        }

        obj.Portada = await obtenerURLArchivo(obj.Portada);
        setUrl(obj.Portada);
        setTitulo(obj.Titulo);
        setDes(obj.Descripcion);

        let arr = [];

        for (let key in obj.Videos) {
          if (obj.Videos.hasOwnProperty(key)) {
            let subObjeto = obj.Videos[key];
            subObjeto.Portada = await obtenerURLArchivo(subObjeto.Portada);
            subObjeto.Video = await obtenerURLArchivo(subObjeto.Video);

            if (subObjeto.UID !== videoID) {
              arr.push(subObjeto);
            }
          }
        }

        setArrVideos(obj.Videos);
        setArrOtrosVideos(arr);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        // Manejo de errores, puedes mostrar un mensaje al usuario o redirigir a una página de error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cursoID, videoID]);

  return (
    <div>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="h-full w-full bg-[#0d0d0d] flex flex-col md:flex-row p-5">

          <div className="flex w-full">
            <div className='relative flex flex-grow flex-col pt-20'>

              <div>
                {ArrVideos && ArrVideos[videoID] && (
                  <React.Fragment>
                    <MediaPlayer url={ArrVideos[videoID].Video} key={forceUpdate} />
                    <div className='flex w-full flex-col md:flex-row'>
                      <div className='flex w-full flex-col'>
                        <h1 className='text-white font-mono text-xl xl:text-2xl mb-2'>{ArrVideos[videoID].Titulo}</h1>
                        <div className="flex flex-row items-center space-x-4">
                          <div
                            className='text-xs sm:text-base w-12 h-12 rounded-full overflow-hidden bg-[#484848]'>
                            <img onClick={() => {
                              navigate(`/VistaCurso/${cursoID}`);
                            }} src={Url} alt="Descripción" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                          </div>
                          <div className='text-xl font-bold text-white font-mono'>{TituloCurso}</div>
                        </div>
                      </div>
                    </div>
                    <DescriptionComponent descriptionText={Des ?? "Descripcion"} />
                    {/* <CommentSection /> */}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div style={{ margin: "60px" }}>
            {OtrosVideos.map((video) => (
              <YouTubeCard
                key={video.UID}
                videoTitle={video.Titulo}
                videoId={video.UID}
                videoThumbnail={video.Portada}
                cursoID={cursoID}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
