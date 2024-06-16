import { useLocation } from 'react-router-dom';

const Path = () => {
  const location = useLocation();

  // Determina o nome da página com base na pathname da rota
  let pageName = '';
  
  switch (location.pathname) {
    case '/shop':
      pageName = 'Shop';
      break;
    case '/cart':
      pageName = 'Cart';
      break;
    case '/checkout':
      pageName = 'Checkout';
      break;
    default:
      pageName = 'Unknown Page';
      break;
  }

  return (
    <div className="w-[100vw] h-[316px] bg-mustard flex flex-col justify-center items-center">
      <h1>{pageName}</h1>
      <p>Home {'>'} {pageName} </p>
    </div>
  );
}

export default Path;