import { useLocation } from 'react-router-dom';


const Path = () => {
  const location = useLocation();
  const logo = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/logo.png"

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
    <div className="w-[100vw] h-[316px] bg-img-path bg-no-repeat flex flex-col justify-center items-center font-Poppins font-medium">
            <img src={logo} alt="" />
            <h1 className=' text-48'>{pageName}</h1>
            <p className='text-16'><span className="font-bold">Home {'>'}</span> {pageName} </p>
    </div>
  );
}

export default Path;