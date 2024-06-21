const img1 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/trophy.png";
const img2 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/verification.png";
const img3 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/shipping.png";
const img4 = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/icons/attendant.png";

const Protection = () => {
    return (
      <div className="w-[100vw] h-270 mt-32 bg-pink flex justify-around items-center font-Poppins">
        <div className="flex">
          <img src={img1} alt="" />
          <div className="ml-10 ">
            <h4 className="font-semibold text-25">High Quality</h4>
            <p className="font-medim text-20 text-grayFonte">crafted from top materials</p>
          </div>
        </div>
        <div className="flex">
          <img src={img2} alt="" />
          <div className="ml-10">
            <h4 className="font-semibold text-25">Warranty Protection</h4>
            <p className="font-medim text-20 text-grayFonte">Over 2 years</p>
          </div>
        </div>
        <div className="flex">
          <img src={img3} alt="" />
          <div className="ml-10">
            <h4 className="font-semibold text-25">Free Shipping</h4>
            <p className="font-medim text-20 text-grayFonte">Order over 150 $</p>
          </div>
        </div>
        <div className="flex">
          <img src={img4} alt="" />
          <div className="ml-10">
            <h4 className="font-semibold text-25">24 / 7 Support</h4>
            <p className="font-medim text-20 text-grayFonte">Dedicated support</p>
          </div>
        </div>
       

      </div>

    );
  }
  
  export default Protection;