import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledCard = styled(Card)({
  maxWidth: 345,
  // Estilos adicionales que desees aplicar al Card
});

const Producto = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        image="/components/imagenes/02.jpg"
        alt="Auriculares"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Auriculares In-ear Inalámbricos Xiaomi Redmi Buds 4 Lite Negro
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="agregar a favoritos">
          <FavoriteIcon />
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
      </Collapse>
    </StyledCard>
  );
};

export default Producto;
