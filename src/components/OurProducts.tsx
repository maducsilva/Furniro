import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../app/store';
import { fetchProducts } from '../features/products/productsSlice';
import { addItem } from '../features/cart/cartSlice';


interface OurProductsProps {
  numCols: number;
  selectedCategory: string; 
}

const OurProducts: React.FC<OurProductsProps> = ({ numCols, selectedCategory }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const products = useSelector((state: RootState) => state.products.products);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPageHome = 8;
  const itemsPerPageShop = 16;
  const totalPages = 3;
  
  const isShopPage = location.pathname === '/shop';
  const itemsPerPage = isShopPage ? itemsPerPageShop : itemsPerPageHome;

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  useEffect(() => {
    console.log(products); 
  }, [products]);

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
        return 'grid-cols-3'; 
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  let filteredProducts;
  if (selectedCategory === 'all') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product => product.field === selectedCategory);
  }

  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={`text-center w-[100vw] pb-69 ${itemsPerPage}`} >
       {location.pathname === '/' && 
        <h1 className='font-Poppins font-bold text-40 mb-32'>Our Products</h1>
      }
      {productStatus === 'loading' && <p>Loading...</p>}
      {productStatus === 'failed' && <p>{error}</p>}
      {productStatus === 'succeeded' && (
        <div className="flex justify-center">
          <div className={`grid gap-4 w-1236 ${generateGridClasses(numCols)}`}>
            {currentProducts.map((product, index) => (
              <div className='bg-grayBackground w-285 h-446 relative group' key={`${product.id}-${index}`}>
                <div className='absolute inset-0 bg-blackhover bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <button 
                    className='bg-white text-mustard align-center font-Poppins font-semibold text-16 w-202 h-48'
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add to Cart
                  </button>
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
      )}
      {location.pathname === '/' && (
        <button className='text-mustard text-16 font-Poppins font-semibold bg-white border border-mustard mt-32 w-245 h-48 hover:bg-mustard hover:text-white transition-colors duration-300'>
          Show More
        </button>
      )}
      {isShopPage && (
        <div className="flex justify-center mt-4 items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-3 py-1 ${currentPage === index + 1 ? 'bg-mustard text-white' : 'bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`mx-1 px-3 py-1 bg-gray-200 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OurProducts;

