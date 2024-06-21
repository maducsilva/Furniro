import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const logo = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/logo.png"
  const user = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/user.svg"
  const cart = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/cart.svg"

  return (
    <div className=" top-0 z-50 bg-wisper flex justify-between py-8 md:justify-around items-center w-[100vw] h-20 font-Poppins text-lg shadow ">
      <Link className='flex font-Poppins font-bold text-34 items-center space-x-2' to="/">
        <img src={logo} alt="" /> Furniro
      </Link>

      <section className="flex md:hidden">
        <div
          className="space-y-2 "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "absolute w-[100%] h-[100vh] top-0 left-0 bg-wisper z-10 flex flex-col justify-evenly items-center" : "hidden"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="my-8 uppercase hover:text-primaryAvacado"><Link to="/">Home</Link></li>
            <li className="my-8 uppercase hover:text-primaryAvacado"><Link to="/plant-registration">Register</Link></li>
            <li className="my-8 uppercase hover:text-primaryAvacado"><Link to="/all-products">Products</Link></li>
            <li className="my-8 uppercase hover:text-primaryAvacado"><Link to="/about">About us</Link></li>
            <li className="my-8 uppercase hover:text-primaryAvacado hidden"><Link to="/NotFound">Blog</Link></li>
          </ul>
          <div>
            <button>
              <img src="/src/assets/navbar/user.png" className="hover:w-[40px]" alt="" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-[80%] hidden md:flex justify-between">
        <section className="w-[100%] h-20 md:flex justify-left">
          <div className="flex justify-center w-[100%] items-center">
            <ul className="flex flex-row justify-around items-center w-[50%] h-full">
              <li className="hover:text-primaryAvacado"><Link to="/">Home</Link></li>
              <li className="hover:text-primaryAvacado"><Link to="/shop">Shop</Link></li>
              <li className="hover:text-primaryAvacado"><Link to="/about">About</Link></li>
              <li className="hover:text-primaryAvacado"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </section>

        <div className="flex flex-row items-center ml-14">
          <button >
            <Link to="/"><img src={user} className="hover:w-[40px] mr-12" alt="" /></Link>
          </button>
          <button>
          <Link to="/cart"><img src={cart} className="hover:w-[40px] mr-12" alt="" /></Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;


