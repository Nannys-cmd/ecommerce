// Product.js

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
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Image from './Image';
import ProductDetails from './ProductDetails';
import PurchaseButton from './PurchaseButton';

const Product = () => {
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
    <Card>
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
        component={Image}
        height="194"
        image={imagenAuriculares}
        alt="Auriculares"
      />
      <CardContent>
        <ProductDetails />
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
        {/* ... (contenido colapsable) */}
        <PurchaseButton onClick={handleBuy} />
        {purchased && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Gracias por su compra
          </Typography>
        )}
      </Collapse>
    </Card>
  );
};

export default Product;

