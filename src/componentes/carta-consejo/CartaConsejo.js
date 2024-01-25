import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { obtenerURLArchivo } from '../../api/Metodos';
import { useNavigate } from 'react-router-dom';

const CartaConsejo = ({ imagen, titulo, desc, UID }) => {
  const [imagenURL, setImagenURL] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const obtenerURL = async () => {
      try {
        const url = await obtenerURLArchivo(imagen);
        setImagenURL(url);
      } catch (error) {
        console.error('Error al obtener la URL de la imagen:', error);
      }
    };

    obtenerURL();
  }, [imagen]);
  function truncarTexto(texto, maxCaracteres) {
    if (texto.length <= maxCaracteres) {
      return texto;
    } else {
      return texto.slice(0, maxCaracteres) + "...";
    }
  }
  return (
    <Card
    onClick={() => {
        navigate(`/VistaConsejo/${UID}`);
      }}
      sx={{
        maxWidth: 300,
        '&:hover': {
          boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)',
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease',
        },
        backgroundColor: '#b0e8bd',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imagenURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncarTexto(desc, 400)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CartaConsejo;
