import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imgUrl: string;
}

interface OurProductsProps {
  numCols: number;
}

const OurProducts: React.FC<OurProductsProps> = ({ numCols }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/fbd68442-790f-42d9-8517-a76121f5dded')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  // Função para gerar classes de grid baseado no número de colunas
  const generateGridClasses = (numCols: number) => {
    switch (numCols) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-4';
      default:
        return 'grid-cols-3'; // Valor padrão ou tratamento de erro, caso necessário
    }
  };

  return (
    <div className="text-center w-[100vw] pb-69">
      <h1 className='font-Poppins font-bold text-40 mb-32'>Our Products</h1>
      <div className="flex justify-center">
        <div className={`grid gap-4 w-1236 ${generateGridClasses(numCols)}`}>
          {products.map(product => (
            <div className='bg-grayBackground w-285 h-446 relative group' key={product.id}>
              <div className='absolute inset-0 bg-blackhover bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <button className='bg-white text-mustard align-center font-Poppins font-semibold text-16 w-202 h-48'>Add to Cart</button>
              </div>
              <img src={product.imgUrl} alt={product.title} className='w-full h-auto' />
              <div className='space-y-5 mt-10 ml-10 text-start'>
                <h1 className='font-Poppins font-semibold text-24'>{product.title}</h1>
                <p className='font-Poppins font-medium text-16 text-grayFontHome'>{product.description}</p>
                <p className='font-Poppins font-semibold text-16'>R${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='text-mustard text-16 font-Poppins font-semibold bg-white border border-mustard mt-32 w-245 h-48 hover:bg-mustard hover:text-white transition-colors duration-300 '>Show More</button>
    </div>
  );
}

export default OurProducts;
