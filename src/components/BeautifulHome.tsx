import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { useEffect } from 'react';

const BeautifulHome = () => {
  const img1 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/carrossel1.png"
  const img2 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/carrossel2.png"
  const icon1 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/arrow.png"


  return (
    <div className="w-[100vw] h-670 bg-peach flex justify-end font-Poppins items-center">
      <div className='mr-46'>
        <h1 className="font-bold text-40">50+ Beautiful rooms  <br/> inspiration</h1>
        <p className='font-medium text-16'>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</p>
        <button className="bg-mustard w-176 h-48 mt-46 font-Poppins font-semibold text-16 text-white hover:bg-opacity-75 transition duration-300 ease-in-out">Explore More</button>
      </div>
      <div className="w-876">
        <Splide
          options={{
            type: 'coverflow',
            perPage: 2.2,
            perMove: 1,
            gap: '1rem',
            focus: 'start',
            coverflow: {
             
            },
            pagination: true,
          }}
        >
          <SplideSlide>
                <img src={img1} alt="Image 1" className="h-582 w-404 object-cover" />
              <div className="absolute bottom-4 left-4 flex items-end">
              <div className="w-217 h-130 bg-white bg-opacity-50 text-black text-center flex flex-col justify-center items-center">
                <p className="font-medium text-16">01 - Bed Room</p>
                <p className="font-semibold text-28">Inner Peace</p>
              </div>
              <div className="w-48 h-48 bg-mustard text-black text-center flex justify-center items-center">
                <img src={icon1} alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
                <img src={img2} alt="" className="h-582 w-404 object-cover" />
           </SplideSlide>
          <SplideSlide>
                <img src={img1} alt="" className="h-582 w-404 object-cover" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default BeautifulHome;
