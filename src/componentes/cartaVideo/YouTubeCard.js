import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


function YouTubeCard({ videoThumbnail, videoTitle, channelName, videoId, cursoID }) {
  const navigate = useNavigate();
  const [forceUpdate, setForceUpdate] = useState(false);

  const cardStyle = {
    maxWidth: '100%',
    height: '200px',
    cursor: 'pointer',
  };

  const imageStyle = {
    height: '150px',
    width: '100%',
    objectFit: 'cover',
  };

  const handleClick = () => {

    navigate(`/Reproductor/${cursoID}/${videoId}`);
    setForceUpdate(prevState => !prevState); 
  };
  function truncarTexto(texto, maxCaracteres) {
    if (texto.length <= maxCaracteres) {
      return texto;
    } else {
      return texto.slice(0, maxCaracteres) + "...";
    }
  }
  return (
    <div
      key={forceUpdate} // Agrega una clave única al componente para forzar la actualización
      className="rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:-translate-y-2 bg-white"
      style={cardStyle}
      onClick={handleClick}
    >
      <img
        style={imageStyle}
        src={videoThumbnail || "https://via.placeholder.com/1000"}
        alt="Video thumbnail"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xs sm:text-base mb-2 truncate text-black" title={videoTitle}>
          {truncarTexto(videoTitle, 25)}
        </div>
        <p className="text-gray-700 text-xs sm:text-sm">
          {channelName}
        </p>
      </div>
    </div>
  );
}

YouTubeCard.propTypes = {
  videoThumbnail: PropTypes.shape({
    width: PropTypes.number,
    url: PropTypes.string,
  }),
  videoTitle: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default YouTubeCard;
