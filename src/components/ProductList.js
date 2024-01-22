// components/ProductList.js

import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'Auriculares Inalámbricos',
      price: '$3500',
      images: ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'],
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
