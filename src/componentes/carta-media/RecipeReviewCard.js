import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

function truncarTexto(texto, maxCaracteres) {
  if (texto.length <= maxCaracteres) {
    return texto;
  } else {
    return texto.slice(0, maxCaracteres) + "...";
  }
}

export default function RecipeReviewCard({ title, content, cartaId }) {

  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(54, 68, 93)", color: "#fff" }}>
      <CardHeader title={title} />
      <CardContent>
        <Typography color="#fff">
          {truncarTexto(content, 200)}
        </Typography>
      </CardContent>
      <CardActions   onClick={() => {
            navigate(`/VistaConsejo/${cartaId}`);
          }}>
        <IconButton aria-label="share" sx={{ color: "#fff", gap: "10px" }}>
          <RemoveRedEyeIcon />
          <Typography variant="body2" color="#fff" sx={{ fontSize: "0.8rem" }}>Ver más</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
