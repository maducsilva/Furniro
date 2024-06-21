import { Link } from 'react-router-dom'

const Footer = () => {
const sociais = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/sociais.png"


  return (
    <footer className='relative h-160 md:h-505 w-[100vw]'>
        <hr className="border-gray my-4" />
      <div className='md:mx-100 text-black justify-between '>
        <div className='relative flex mt-48'>
          <div className='ml-10 space-y-[0.3125rem] md:space-y-[1rem] w-286'>
            <h3 className='font-Poppins text-20 md:text-24'>Furniro</h3>
            <p className='font-Poppins text-grayFonte text-10 md:text-16'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
            <img src={sociais} alt="" />
          </div>
          <div className=' ml-auto flex'>
            <ul className="mr-[8px] md:mr-[52px] space-y-[5px] md:space-y-46">
              <h4 className='font-Poppins text-grayFonte text-[12px] md:text-16'>Links</h4>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/About" className='hover:text-mustard'>Home</Link></li>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/all-products" className='hover:text-mustard'>Shop</Link></li>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/NotFound" className='hover:text-mustard'>About</Link></li>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/NotFound" className='hover:text-mustard'>Contact</Link></li>
            </ul>
        </div>
        <div className=' ml-auto flex'>
            <ul className='space-y-[5px] mr-[10px] md:space-y-46'>
              <h4 className='font-Poppins text-grayFonte text-[12px] md:text-16 '>Help</h4>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/About" className='hover:text-mustard'>Payment Options</Link></li>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/all-products" className='hover:text-mustard'>Returns</Link></li>
              <li className='font-Poppins text-[10px] md:text-16'><Link to="/NotFound" className='hover:text-mustard'>Privacy Policies</Link></li>
            </ul>
        </div>
          <div className=' ml-auto w-286'>
            <h4 className='font-Poppins'>Newsletter</h4>
            <input
        type="email"
        placeholder="Enter Your Email Address"
        className="border-b-2 border-gray-400 focus:outline-none border-black flex-1 placeholder-gray-500 mt-46"/>
      <button className="font-bold text-black border-b-2 border-black ml-[5px] hover:text-mustard hover:border-mustard">SUBSCRIBE</button>
          </div>
        </div>
        <hr className="border-gray my-4 my-48 " />
        <div className=' flex justify-between '>
          <p className='font-Poppins text-[5px] md:text-16 '>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;