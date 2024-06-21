const GridHome = () => {
    return (
      <div className="font-Poppins text-center w-[100vw] pb-50 mt-[117px]">
      <p className="text-20 font-semibold">Share your setup with</p>
      <h1 className="text-40 font-bold">#FuniroFurniture</h1>
      <div className="grid gap-4 h-[780px] flex justify-center mt-12">
        <div className="row-span-2 col-start-1 col-end-3 flex justify-start items-end relative overflow-hidden">
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid9.png" className="ml-12" alt="" />
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid1.png" className="absolute w-[400px] ml-40" alt="" />
        </div>
        <div className="row-span-3 row-start-2 row-end-5 col-start-3 col-end-5 flex items-center justify-center">
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid2.png" alt="" />
        </div>
        <div className="row-span-3 flex items-end col-start-5 col-end-6">
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid3.png" className="w-full" alt="" />
        </div>
        <div className="row-span-3 flex items-end col-start-6 col-end-7">
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid4.png" alt="" />
        </div>
        <div className="row-span-3 flex items-start col-start-1 col-end-3 justify-end">
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid5.png" className="w-[800px]" alt="" />
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid6.png" className="ml-4 w-[300px]" alt="" />
        </div>
        <div className="row-span-3 flex items-start col-start-5 col-end-7 relative">
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid7.png" alt="" />
          <img src="https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/grid8.png" className="ml-4" alt="" />
        </div>
      </div>
    </div>

    );
  }
  
  export default GridHome;