import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { obtenerURLArchivo } from '../../api/Metodos';
import { useNavigate } from 'react-router-dom';


export default function MultiActionAreaCard({Desc, Image, titulo, UID}) {
  const [imagenURL, setImagenURL] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const obtenerURL = async () => {
      try {
        const url = await obtenerURLArchivo(Image);
        setImagenURL(url);
      } catch (error) {
        console.error('Error al obtener la URL de la imagen:', error);
      }
    };

    obtenerURL();
  }, [Image]);

  function truncarTexto(texto, maxCaracteres) {
    if (texto.length <= maxCaracteres) {
      return texto;
    } else {
      return texto.slice(0, maxCaracteres) + "...";
    }
  }


  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(54, 68, 93)"}} >
      <CardActionArea
      onClick={() => {
        navigate(`/VistaCurso/${UID}`);
      }}
      >
        <CardMedia
          component="img"
          height="140"
          image={imagenURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "white">
            {titulo}
          </Typography>
          <Typography variant="body2" color="#DDDDDD" >
            {truncarTexto(Desc,300)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" sx={{color: '#B0E8BD'}}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}