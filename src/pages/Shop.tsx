import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Path from '../components/Path';
import FilterShop from '../components/FilterShop';
import OurProducts from '../components/OurProducts';
import Protection from '../components/Protection';
import { fetchProducts } from '../features/products/productsSlice';
import { RootState } from '../app/store';

const ShopPage: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = useSelector((state: RootState) => state.products.products);
  const productStatus = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Path />
      <FilterShop
        itemsPerPage={16}
        products={products}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <OurProducts
        numCols={4}
        selectedCategory={selectedCategory}
      />
      <Protection />
    </div>
  );
};

export default ShopPage;
