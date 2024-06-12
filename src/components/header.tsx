import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/navbar/logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-12 bg-wisper flex justify-between py-8 md:justify-around items-center w-[100vw] h-20 font-raleway font-normal text-lg text-primaryLunarGreen shadow">
      <Link to="/">
        <img src={Logo} alt="Logo Plant Peace" />
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
              <img src="/src/assets/navbar/logoUser.png" className="hover:w-[40px]" alt="" />
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
          <button>
            <img src="/src/assets/navbar/user.svg" className="hover:w-[40px] mr-12" alt="" />
          </button>
          <button>
            <img src="/src/assets/navbar/cart.svg" className="hover:w-[40px]" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;


