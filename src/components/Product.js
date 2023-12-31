import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse, Button, } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import imagenAuriculares from '../imagenes/01.jpg';

const StyledCard = styled(Card)({
  maxWidth: 345,
});

const Producto = () => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); // Estado para controlar el corazón
  const [purchased, setPurchased] = useState(false); // Estado para controlar la compra

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBuy = () => {
    // Lógica para la compra del producto
    setPurchased(true); // Establece el estado de compra a verdadero
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); // Cambia el estado del corazón al hacer clic
  };

  return (
    <StyledCard>
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
        {/* Mostrar datos del producto */}
        <Typography variant="body2" color="text.secondary">
          Auriculares In-ear Inalámbricos Xiaomi Redmi Buds 4 Lite Negro {/* Descripción del producto */}
        </Typography>
        <Typography variant="h6" color="text.primary">
          $3500 {/* Precio del producto */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SKU: AU IN BT 01 {/* SKU del producto */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad disponible: 15 {/* Cantidad disponible */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
        <IconButton aria-label="agregar a favoritos" onClick={handleFavoriteClick}>
          <FavoriteIcon style={{ color: isFavorite ? 'red' : 'black' }} />
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
          {/* Botón de compra */}
          <Button variant="contained" color="primary" onClick={handleBuy}>
            Comprar
          </Button>
        </CardActions>
        {/* Mensaje de agradecimiento */}
        {purchased && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Gracias por su compra
          </Typography>
        )}
      </Collapse>
    </StyledCard>
  );
};

export default Producto;
