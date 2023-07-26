import React from 'react'

import Cart from "../Assets/cart.png";
import User from "../Assets/user.png";
import pin from "../Assets/pin.png";
import money from '../Assets/money.png'
import discount from "../Assets/discount.png"

import CartItemCard from '../components/Cart/CartItemCard';
import Footer from '../components/common components/Footer';
import NavBar from '../components/Navigation components/NavBar';

function CardOrdering() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth  bg-sky-50'>
        {/* nav bar */}
        <NavBar showSeachBar={false}/>
        
        <div className='w-full px-12 flex items-start justify-evenly my-24'>
            <div className='w-[50%]'>
                    {/* address section */}
                    <div className='w-full flex flex-col items-center bg-white rounded-md overflow-hidden shadow-md'>
                        <div className='w-full h-[7vh] bg-slate-950 flex items-center pl-8'>
                            <img src={pin} alt="" width={22} />
                            <p className='text-white ml-2'>Add Delivery Address</p>
                        </div>
                        <div className='w-full px-16 py-3'>
                            <button className='bg-none text-md font-medium text-sky-500 py-4'>
                             <span>+</span> Add your address
                            </button>
                        </div>
                    </div>
                    {/* payments section */}
                    <div className='w-full flex flex-col items-center bg-white rounded-md overflow-hidden shadow-md mt-6 pointer-events-none opacity-40'>
                        <div className='w-full h-[7vh] bg-slate-950 flex items-center pl-8'>
                            <img src={money} alt="" width={26}/>
                            <p className='text-white ml-2'>Add Payments Method</p>
                        </div>
                    </div>
                        
            </div>
            <div className='w-[30%]'>
                {/* order summary */}
                <div className='w-full flex flex-col items-center bg-white rounded-md overflow-hidden shadow-md'>
                    <div className='w-full h-[7vh] bg-slate-950 text-white flex items-center pl-8'>
                        <p className='text-sm'>Order ID</p>
                        <p className=' text-xs ml-4 font-light'>f3cfe0d810ef59e9c15ba827f032</p>
                    </div>
                    <div className='w-full bg-white flex flex-col items-center relative'>
                        <span className='w-[90%] h-[1.5px] bg-slate-300 my-4'></span>
                        <div className='w-full'>
                            <CartItemCard name={"Tandoori Chicken tikka"} price={"13"}/>
                            <CartItemCard name={"Chicken Kabab"} price={"9"}/>
                            <CartItemCard name={"Chocolate icecream"} price={"5"}/>
                        </div>
                        <div className='w-full px-8 my-8 flex items-center'>
                            <input className='w-full h-[6vh] bg-gray-100 outline-none px-8 text-sm placeholder-gray-600' type="text" placeholder='Any suggestions ?  We will pass it on ...' />
                        </div>
                        <div className='w-[85%] flex items-center border-2 border-dashed border-slate-300 py-3 cursor-pointer mb-6'>
                            <img className='ml-10' src={discount} alt="" width={24}/>
                            <p className='text-sm font-medium ml-4'>Apply Coupon</p>
                        </div>
                        {/* bill details */}
                        <div className='w-full px-10 flex flex-col items-center'>
                            <div className='w-full'>
                                <p className='text-sm font-medium'>Bill Details</p>
                            </div>
                            <div className='w-full flex items-center justify-between my-3 text-sm text-slate-500'>
                                <p>item total</p>
                                <p>$27</p>
                            </div>
                            <div className='w-full flex items-center justify-between my-3 text-sm text-slate-500'>
                                <p>Delivery Fee  |  1.2km</p>
                                <p>$2</p>
                            </div>
                            <span className='w-full h-[1.5px] bg-slate-300 my-3'></span>
                            <div className='w-full flex items-center justify-between my-3 text-sm text-slate-500'>
                                <p>GST and Restaurant Charges</p>
                                <p>$0.8</p>
                            </div>
                            <span className='w-full h-[2px] bg-slate-800 mt-3'></span>
                            <div className='w-full flex items-center justify-between my-4 text-md font-semibold'>
                                <p>To Pay</p>
                                <p>$ 29.8</p>
                            </div>
                        </div>
                        <button className='w-[75%] h-[6vh] my-8 mb-20 text-white bg-slate-950 font-medium rounded-md hover:bg-white hover:border-2 hover:border-slate-950 hover:text-slate-950 transition-colors duration-200'>Place Order</button>
                    </div>
                </div>
                {/* notes section */}
                <div className='w-full h-[30vh] mt-8 bg-white px-10 shadow-md flex flex-col items-center justify-center'>
                    <p className='text-md font-medium mb-3'>Review your order and address details to avoid cancellations</p>
                    <p className='text-sm text-gray-500'>
                        <span className='text-red-500 mr-1'>Note :</span>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CardOrdering;