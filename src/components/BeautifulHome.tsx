import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useEffect } from 'react';

const BeautifulHome = () => {
  const img1 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/carrossel1.png";
  const img2 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/carrossel2.png";

  useEffect(() => {
    const pagination = document.querySelectorAll('.splide__pagination__page');
    pagination.forEach(page => {
      if (page.classList.contains('is-active')) {
        page.classList.add('bg-mustard');
      } else {
        page.classList.add('bg-white');
      }
    });
  }, []);

  return (
    <div className="w-[100vw] h-670 bg-peach flex justify-end font-Poppins items-center">
      <div className='mr-46'>
        <h1 className="font-bold text-40">50+ Beautiful rooms  <br/> inspiration</h1>
        <p className='font-medium text-16'>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</p>
      </div>
      <div className="w-[876px]">
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
              <div className="absolute bottom-4 left-4 flex space-y-24">
              <div className="w-217 h-130 bg-white bg-opacity-50 text-black text-center flex flex-col justify-center items-center">
                <p className="font-medium text-16">01 - Bed Room</p>
                <p className="font-semibold text-28">Inner Peace</p>
              </div>
              <div className="w-[48px] h-[48px] bg-mustard text-black text-center flex justify-center items-center">
                {/* Conteúdo da segunda div */}
              </div>
            </div>
                
          </SplideSlide>
          <SplideSlide>
                <img src={img2} alt="Image 2" className="h-582 w-404 object-cover" />
           </SplideSlide>
          <SplideSlide>
                <img src={img1} alt="Image 3" className="h-582 w-404 object-cover" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default BeautifulHome;
