import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { calculateTotal } from '../components/cartUtils';

const Details = () =>{
  const cartItems = useSelector((state: RootState) => state.cart.items);

return(
    <div className='flex justify-around '>
    <div className='font-Poppins font-medium text-16 mt-[100px]'>
      <h1 className='text-[36px] font-semibold mb-[36px]'>Biling details</h1>
        <div className='flex mb-[36px] space-x-[31px]'>
            <div className='space-y-[22px]'>
                <p>First Name</p>
                <input className='border border-black rounded-[10px] w-[211px] h-[75px]' type="text"  />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Last Name</p>
                <input className='border border-black rounded-[10px] w-[211px] h-[75px]' type="text" />
            </div>
        </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Company Name(Optional)</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>ZIP code</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Country/Region</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Street address</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Town/city</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Province</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Country/Region</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Add-on address</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <p>Email address</p>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' type="text" />
            </div>
            <div className='space-y-[22px] mb-[36px]'>
                <input className='border border-black rounded-[10px] w-[453px] h-[75px]' placeholder='Additional information' type="text" />
            </div>
    </div>
    <div className='w-[533px] h-[616px] my-10 font-Poppins mt-[150px]'>
      <div  className='flex justify-between'>
        <div  className='space-y-[14px]'>
          <h4 className='text-24 font-bold'>Product</h4>
          {cartItems.map(item => (
          <p key={item.id} className='text-16 text-grayFonte'>{item.title} x{item.quantity}</p>
        ))}
          <p className='text-16'>Subtotal</p>
          <p className='text-16'>Total</p>
        </div>
        <div className='space-y-[14px] text-right'>
          <h4 className='text-24 font-bold'>Subtotal</h4>
          {cartItems.map(item => (
          <p key={item.id} className='text-[14px]'>Rs. {(item.price * item.quantity).toFixed(2)}</p>
        ))}
          <p className='text-[14px]'>{calculateTotal(cartItems)}</p>
          <p className='text-[20px] font-bold text-mustard'>{calculateTotal(cartItems)}</p>
          </div>
          </div>
        
      <div className=' mt-[40px] items-center text-16'>
        <hr className='border-gray-300 mb-[28px]'/>
        <div className='flex '>
          <input type='radio' id='bank' name='payment' className='mr-2' defaultChecked />
          <label  className='font-bold'>Direct Bank Transfer</label>
        </div>
        <p className='mt-[11px]'>
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div className='flex mt-[25px]'>
          <input type='radio' id='cash' name='payment' className='mr-2' />
          <label  className='font-bold'>Direct Bank Transfer</label>
        </div>
        <div className='flex mt-[11px]'>
          <input type='radio' id='cash' name='payment' className='mr-2' />
          <label  className='font-bold'>Cash On Delivery</label>
        </div>
        <p className='mt-[22px]'>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>
        <button
          className='text-black text-[20px] font-regular rounded-[15px] border border-black mt-[42px] w-[222px] h-[59px] hover:bg-black hover:text-white transition-colors duration-300'>
          Place order
        </button>
      </div>
    </div>
    </div>
    );
}

export default Details;