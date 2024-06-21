const BrowseHome = () => {
  const img1="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/rectangle1.png"
  const img2="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/rectangle2.png"
  const img3="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/rectangle3.png"


    return (
      <div className="flex items-center justify-center min-h-screen w-[100vw] font-Poppins mb-56 mt-56">
      <div className="text-center">
        <h2 className="mb-4 font-bold text-32 ">Browse The Range</h2>
        <p className="mb-6 font-regular text-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-between space-x-[20px]">
          <div className="text-center">
            <img className="rounded" src={img1} alt="" />
            <p className="font-semibold text-24 mt-2">Dining</p>
          </div>
          <div className="text-center">
            <img className="rounded" src={img2} alt="" />
            <p className="font-semibold text-24 mt-2">Living</p>
          </div>
          <div className="text-center">
            <img className="rounded" src={img3} alt="" />
            <p className="font-semibold text-24 mt-2">Bedroom</p>
          </div>
        </div>
      </div>
    </div>

    );
  }
  
  export default BrowseHome;
  