import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';
import { calculateTotal } from '../components/cartUtils';

const CartProducts: React.FC = () => {
  const remove = "https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/delete.png"
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const handleDecrement = (id: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleIncrement = (id: number, quantity: number) => {
    if (quantity < 100) {
      dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    }
  };

  const handleCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className='flex mt-[55px] ml-[100px]'>
      <div className=" ">
        <div className="flex items-center justify-center w-[817px] h-[55px] bg-pink font-Poppins font-medium text-16">
          <div className="mr-[178px]"><p>Product</p></div>
          <div className="mr-[90px]"><p>Price</p></div>
          <div className="flex space-x-[38px] ">
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center w-[817px] h-[55px] mr-[50px] mt-[55px] font-Poppins font-regular text-16">
            <div className="flex mr-[135px] items-center">
              <img className="w-[108px] h-[105px] mr-[45px]" src={item.imgUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <div className="flex items-center ">
              <div className="mr-[20px]"><p>Rs. {item.price.toFixed(2)}</p></div>
              <div className="flex items-center border border-gray-300 rounded w-[107px] h-[47px]">
                <button onClick={() => handleDecrement(item.id, item.quantity)} className="">
                  -
                </button>
                <input
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  required
                  className="text-center w-[100%]"
                  value={item.quantity}
                  onChange={(e) => {
                    const value = Number(e.target.value.replace(/\D/g, ''));
                    dispatch(updateQuantity({ id: item.id, quantity: value }));
                  }}
                />
                <button onClick={() => handleIncrement(item.id, item.quantity)} className="">
                  +
                </button>
              </div>
              <div className="ml-[22px]"><p>Rs. {(item.price * item.quantity).toFixed(2)}</p></div>
            </div>
            <button className='ml-[20px]' onClick={() => dispatch(removeItem(item.id))}>
              <img src={remove} alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className='bg-pink w-[393px] h-[390px] ml-[30px] font-Poppins text-center '>
        <h1 className='mt-[20px] font-semibold text-32'>Cart Totals</h1>
        <div className=' '>
          <div className='flex mt-[61px] justify-around'>
            <p className='font-medium text-16'>Subtotal</p>
            <p className='text-16 font-regular text-grayFonte'>Rs.{calculateTotal(cartItems)}</p>
          </div>
          <div className='flex mt-[31px] justify-around'>
            <p className='font-medium text-16'>Total</p>
            <p className='text-20 font-medium text-mustard'>Rs.{calculateTotal(cartItems)}</p>
          </div>
        </div>
        <button onClick={handleCheckout} className='text-black text-20 font-regular rounded-[15px] border border-black mt-[42px] w-[222px] h-[59px] hover:bg-black hover:text-white transition-colors duration-300'>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default CartProducts;

