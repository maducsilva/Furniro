import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { CartItem } from '../features/cart/cartSlice';

type Product = {
  field: string;
};

type FilterShopProps = {
  itemsPerPage: number;
  products: Product[];
  onCategoryChange: (category: string) => void;
};

const FilterShop: React.FC<FilterShopProps> = ({ itemsPerPage, products, onCategoryChange }) => {
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleFilterBox = () => {
    setShowFilterBox(!showFilterBox);
  };

  const fixedCategories = ["Living room", "Kitchen", "Room"];

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory); 
    onCategoryChange(newCategory); 
  };

  const filteredProducts = selectedCategory === 'all' ? products: products.filter(product => product.field === selectedCategory);

  return (
    <div className="w-[100vw] h-[100px] bg-pink flex justify-between items-center font-Poppins font-regular text-20">
      <div className='flex space-x-[24px] ml-[98px]'>
        <button className='w-[30px] h-[30px]' onClick={toggleFilterBox}>
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/filter.svg" alt="Filter" />
        </button>
        <p>Filter</p>
        <img className='w-[28px] h-[28px]' src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/more.svg" alt="" />
        <img className='w-[24px] h-[24px]' src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/mode.svg" alt="" />
        <div className="w-[1px] h-[24px] bg-black"></div>
        <p>Showing 1-{filteredProducts.length} of {filteredProducts.length} results</p>
      </div>
      <div className='space-x-[17px] mr-[100px]'>
        <label>Show</label>
        <input type="text" placeholder={`${filteredProducts.length}`} className='w-[55px] h-[55px] text-center' />
        <label>Sort by</label>
        <input type="text" className='w-[188px] h-[55px]' />
      </div>

      {showFilterBox && (
        <div className="absolute top-[490px] left-[90px] w-[300px] h-[150px] bg-pink shadow-lg p-4 z-50">
          <h2 className="text-lg font-bold">Filter Options</h2>
          <div className="mt-2">
            <label>
              Category:
              <select className="mt-1 block w-full" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">All</option>
                {fixedCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterShop;
