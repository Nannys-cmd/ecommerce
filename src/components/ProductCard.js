// components/ProductCard.js

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import imagenAuriculares from '../imagenes/01.jpg';

const ProductCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBuy = () => {
    setPurchased(true);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="configuración">
            <MoreVertIcon />
          </IconButton>
        }
        title="Auriculares Inalámbricos"
        subheader="05 de Noviembre de 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={imagenAuriculares}
        alt="Auriculares"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Auriculares In-ear Inalámbricos Xiaomi Redmi Buds 4 Lite Negro
        </Typography>
        <Typography variant="h6" color="text.primary">
          $3500
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SKU: AU IN BT 01
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad disponible: 15
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
        <IconButton aria-label="agregar a favoritos" onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'black' }} />
        </IconButton>
        <IconButton aria-label="compartir">
          <ShareIcon />
        </IconButton>
        <IconButton
          sx={{ ml: 'auto' }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="mostrar más"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Método:</Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleBuy}>
            Comprar
          </Button>
        </CardActions>
        {purchased && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            ¡Gracias por su compra!
          </Typography>
        )}
      </Collapse>
    </Card>
  );
};

export default ProductCard;

